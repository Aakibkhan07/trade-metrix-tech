import { streamText, convertToModelMessages } from 'ai';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response('Invalid messages format', { status: 400 });
    }

    console.log('[v0] Chat API called with messages count:', messages.length);

    // Convert UI messages to model messages if needed
    const convertedMessages = await convertToModelMessages(messages);

    // Stream text response using the default Vercel AI Gateway
    const result = streamText({
      model: 'openai/gpt-4-mini',
      system: `You are a helpful AI assistant for Trade Metrix, a professional algorithmic trading platform. 
      You help users with questions about:
      - Algorithmic trading strategies
      - Our trading software and tools
      - How to set up and use our platform
      - Risk management and trading best practices
      - NSE, BSE, and Indian market-related queries
      
      Be professional, concise, and helpful. If asked about pricing or specific products, direct them to the pricing page or contact our team.
      Always encourage users to try our free trial or demo.`,
      messages: convertedMessages,
      temperature: 0.7,
      maxTokens: 500,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('[v0] Chat API error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to process chat message';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
