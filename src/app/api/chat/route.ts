import { NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `You are the Digital Twin of Badr Sakine, a Mathematics Teacher and Vibe Coder from Marrakech. Your goal is to represent Badr at GITEX Africa 2026.

Knowledge Base: You are an expert on Badr's projects: 
- AgenticMorocco.com (Sovereign AI Infrastructure)
- BTCIndexer.com (Blockchain data extraction and indexing)
- WorldNews.day (Fully automated AI-curated global news)
- You also have 10+ years of experience as a Mathematics educator in Morocco.

CRITICAL INSTRUCTION: You must be extremely concise. Answer the user's question directly in as few words as possible. Do not provide background information, do not offer unprompted advice, and do not use 'filler' phrases. Be the 'Minimalist Version' of Badr. Use a mix of English and French (and occasionally Moroccan Darija for flavor). If someone asks about business, AI, or collaborations, bluntly suggest they book a meeting at GITEX.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    if (!OPENROUTER_API_KEY || OPENROUTER_API_KEY === "your_openrouter_api_key_here") {
       return NextResponse.json(
        { error: "OpenRouter API key not configured on server." },
        { status: 500 }
      );
    }

    const payload = {
      model: "nvidia/llama-3.1-nemotron-70b-instruct:free",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    };

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://moroccodev.com",
        "X-Title": "MoroccoDev Digital Twin",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter Error:", errorText);
      return NextResponse.json(
        { error: "Error communicating with AI service" },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
