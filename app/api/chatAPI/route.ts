import { ChatBody } from '@/types/types';
import { OpenAIStream } from '@/utils/streams/chatStream';
import { OpenRouterStream } from '@/utils/streams/openRouterStream';

export const runtime = 'edge';

export async function GET(req: Request): Promise<Response> {
  try {
    const { inputMessage, model, apiKey, provider = 'openai' } = (await req.json()) as ChatBody;

    let apiKeyFinal;
    if (apiKey) {
      apiKeyFinal = apiKey;
    } else {
      apiKeyFinal = provider === 'openrouter' 
        ? process.env.NEXT_PUBLIC_OPENROUTER_API_KEY 
        : process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    }

    const stream = provider === 'openrouter' 
      ? await OpenRouterStream(inputMessage, model, apiKeyFinal)
      : await OpenAIStream(inputMessage, model, apiKeyFinal);

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { inputMessage, model, apiKey, provider = 'openai' } = (await req.json()) as ChatBody;

    let apiKeyFinal;
    if (apiKey) {
      apiKeyFinal = apiKey;
    } else {
      apiKeyFinal = provider === 'openrouter' 
        ? process.env.NEXT_PUBLIC_OPENROUTER_API_KEY 
        : process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    }

    const stream = provider === 'openrouter' 
      ? await OpenRouterStream(inputMessage, model, apiKeyFinal)
      : await OpenAIStream(inputMessage, model, apiKeyFinal);

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
}
