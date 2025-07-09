import Stripe from 'stripe';
// import { stripe } from '@/utils/stripe/config'; // Remove this line
import {
  upsertProductRecord,
  upsertPriceRecord,
  manageSubscriptionStatusChange
} from '@/utils/supabase/admin';
import { headers } from 'next/headers';

const relevantEvents = new Set([
  'product.created',
  'product.updated',
  'price.created',
  'price.updated',
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted'
]);

export async function POST(req: Request) {
  if (!process.env.STRIPE_API_KEY) {
    return new Response('Stripe not configured', { status: 501 });
  }
  // Initialize Stripe client only if key is present
  const stripe = new Stripe(process.env.STRIPE_API_KEY, { apiVersion: '2025-06-30.basil' });
  const body = await req.text();
  const headersList = await headers();
  const sig = headersList.get('Stripe-Signature') as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'product.created':
        case 'product.updated':
          await upsertProductRecord(event.data.object as Stripe.Product);
          break;
        case 'price.created':
        case 'price.updated':
          await upsertPriceRecord(event.data.object as Stripe.Price);
          break;
        case 'customer.subscription.created':
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          const subscription = event.data.object as Stripe.Subscription;
          await manageSubscriptionStatusChange(
            subscription.id,
            subscription.customer as string,
            event.type === 'customer.subscription.created'
          );
          break;
        case 'checkout.session.completed':
          const checkoutSession = event.data.object as Stripe.Checkout.Session;
          if (checkoutSession.mode === 'subscription') {
            const subscriptionId = checkoutSession.subscription;
            await manageSubscriptionStatusChange(
              subscriptionId as string,
              checkoutSession.customer as string,
              true
            );
          }
          break;
        default:
          throw new Error('Unhandled relevant event!');
      }
    } catch (error) {
      return new Response(
        'Webhook handler failed. View your nextjs function logs.',
        {
          status: 400
        }
      );
    }
  }
  return new Response(JSON.stringify({ received: true }));
}

export async function GET(req: Request) {
  if (!process.env.STRIPE_API_KEY) {
    return new Response('Stripe not configured', { status: 501 });
  }
  // Optionally, export GET or other handlers as needed
  // Prevent further execution
  // @ts-ignore
  return;
}
