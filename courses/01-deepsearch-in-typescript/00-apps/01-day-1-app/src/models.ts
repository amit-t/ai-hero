import { google } from "@ai-sdk/google";

// Gemini 2.0 Flash is cost-effective, has generous context window and supports tool calling.
// Change model name here if you want to experiment with newer versions.
export const model = google("gemini-2.0-flash-001");
