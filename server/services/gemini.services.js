// const Gemini_URL =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent"

// export const generateGeminiResponse = async (prompt) => {
//   try {
//     const response = await fetch(
//       `${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [{ text: prompt }],
//             },
//           ],
//         }),
//       },
//     );
//     if (!response.ok) {
//       const err = await response.text();
//       throw new Error(err);
//     }

//     const data = await response.json();

//     const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
//     if (!text) {
//       throw new Error("No text returned from Gemini");
//     }

//     const cleanText = text
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     return JSON.parse(cleanText);
//   } catch (error) {
//     console.log("Gemini Fetch Error:", error.message);
//     throw new Error("Gemini Api fetch failed");
//   }
// };

const OPENAI_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
import { buildPrompt } from "../utils/promptBuilder.js";
export const generateGeminiResponse = async (prompt) => {
  try {
    const response = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`, // store safely
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    const data = await response.json();

    const text = data.choices?.[0]?.message?.content;
    if (!text) {
      throw new Error("No text returned from model");
    }

    // optional: clean if expecting JSON
    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const extractJSON = (text) => {
      
      try {
        return JSON.parse(text);
      } catch {
        const match = text.match(/\{[\s\S]*\}/);
        if (!match) throw new Error("No JSON found");
        return JSON.parse(match[0]);
      }
    };
    return extractJSON(cleanText);
    // return JSON.parse(cleanText);
  } catch (error) {
    console.log("OpenAI Fetch Error:", error.message);
    throw new Error("OpenAI API fetch failed");
  }
};
