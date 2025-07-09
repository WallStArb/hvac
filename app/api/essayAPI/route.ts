import { EssayBody } from '@/types/types';
import { OpenAIStream } from '@/utils/streams/essayStream';
import { OpenRouterEssayStream } from '@/utils/streams/openRouterEssayStream';

export const runtime = 'edge';

export async function GET(req: Request): Promise<Response> {
  try {
    const {
      topic,
      words,
      essayType,
      model,
      apiKey,
      provider = 'openai'
    } = (await req.json()) as EssayBody;

    let apiKeyFinal;
    if (apiKey) {
      apiKeyFinal = apiKey;
    } else {
      apiKeyFinal = provider === 'openrouter' 
        ? process.env.NEXT_PUBLIC_OPENROUTER_API_KEY 
        : process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    }

    const stream = provider === 'openrouter' 
      ? await OpenRouterEssayStream(topic, essayType, words, model, apiKeyFinal)
      : await OpenAIStream(topic, essayType, words, model, apiKeyFinal);

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const {
      topic,
      words,
      essayType,
      model,
      apiKey,
      provider = 'openai'
    } = (await req.json()) as EssayBody;

    let apiKeyFinal;
    if (apiKey) {
      apiKeyFinal = apiKey;
    } else {
      apiKeyFinal = provider === 'openrouter' 
        ? process.env.NEXT_PUBLIC_OPENROUTER_API_KEY 
        : process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    }

    const stream = provider === 'openrouter' 
      ? await OpenRouterEssayStream(topic, essayType, words, model, apiKeyFinal)
      : await OpenAIStream(topic, essayType, words, model, apiKeyFinal);

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
}
