/**
 * LLM Configuration for Google Gemini model
 * 
 * This file exports the Gemini model configured to support tool calling
 * which will be used in future lessons.
 */

import { google } from "@ai-sdk/google";

/**
 * PRIMARY MODEL: gemini-2.0-flash-001
 * - Latest Gemini model optimized for speed
 * - Supports function calling (essential for future lessons)
 * - Great balance of performance and capabilities
 */
export const model = google("gemini-2.0-flash-001");

/**
 * ALTERNATIVE MODELS
 * 
 * Uncomment any of these to switch models (make sure to comment out the primary model above)
 */

// Gemini 2.0 Pro - Latest high-capability model with tool calling support
// export const model = google("gemini-2.0-pro");

// Gemini 1.5 Pro - Previous generation high-capability model
// export const model = google("gemini-1.5-pro");

// Gemini 1.5 Flash - Previous generation fast model
// export const model = google("gemini-1.5-flash");

/**
 * MODEL SELECTION GUIDE
 * 
 * gemini-2.0-flash-001 (Recommended):
 * - Latest model with tool calling support
 * - Best balance of speed and capabilities
 * - Optimized for efficiency
 * 
 * gemini-2.0-pro:
 * - Higher quality outputs, more capabilities
 * - Slower response times
 * - More expensive to operate
 * 
 * For this course, gemini-2.0-flash-001 is recommended as it supports
 * tool calling which is required for future lessons on deep search.
 */
