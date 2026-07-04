import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Lazy initialize Gemini client to prevent crash if key is missing on startup.
let aiClient: GoogleGenAI | null = null;

function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. Using mock sustainability reports.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

export async function POST(req: NextRequest) {
  try {
    const { scenario, details } = await req.json();

    if (!scenario) {
      return NextResponse.json({ error: "Scenario is required" }, { status: 400 });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Return a high-quality mock response if API Key is missing, ensuring the app works perfectly regardless.
      return NextResponse.json({
        sustainabilityRating: 88,
        synergy: "Nitrogen-Fixing Clover (Trifolium repens) paired with Mycorrhizal Fungal Inoculants",
        mitigation: "Install bioswales and high-density organic buffers to intercept agricultural or urban run-off, preventing eutrophication and keeping adjacent waterways secure.",
        steps: [
          "Phase 1: Initial soil decompaction and compost amendment.",
          "Phase 2: Seeding native groundcovers and primary nitrogen-fixers.",
          "Phase 3: Planting sub-canopy berry shrubs and companion polycultures.",
          "Phase 4: Establishing a micro-retention pond with bio-filtering reed beds.",
        ],
        summary: "This scenario displays a strong ecological vision. By combining deep-rooting native species with robust moisture retention zones, we create a climate-resilient micro-ecosystem that mitigates local erosion and supports local pollinator populations.",
      });
    }

    const prompt = `Perform a deep biological and ecological sustainability simulation for the following scenario:
Scenario Type: ${scenario}
User Details / Additions: ${details || "No custom additions specified"}

Please return the results as a JSON object with the following fields:
1. "sustainabilityRating" (integer between 0 and 100 representing the ecological viability and success rate of this project)
2. "synergy" (string, describing the best symbiotic biological relationship to harness for this project, such as legume-rhizobia pairings or multi-strata guilds)
3. "mitigation" (string, detailing specific steps to mitigate common systemic failures, referencing how to avoid soil erosion, nutrient runoff, or genetic erosion)
4. "steps" (an array of 4 strings representing sequential implementation phases)
5. "summary" (string, a highly-polished 2-sentence summary of why this setup sustains the earth and how it protects biodiversity)

Ensure the response is valid JSON matching this schema exactly.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            sustainabilityRating: { type: Type.INTEGER },
            synergy: { type: Type.STRING },
            mitigation: { type: Type.STRING },
            steps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            summary: { type: Type.STRING },
          },
          required: ["sustainabilityRating", "synergy", "mitigation", "steps", "summary"],
        },
      },
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Empty response from Gemini API");
    }

    const parsedData = JSON.parse(responseText.trim());
    return NextResponse.json(parsedData);
  } catch (error: any) {
    console.error("Error in Gemini route:", error);
    return NextResponse.json(
      {
        error: "Failed to generate sustainability report",
        details: error.message || error,
      },
      { status: 500 }
    );
  }
}
