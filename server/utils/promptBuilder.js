export const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMode,
  includeDiagram,
  includeChart
}) => {
  return `
You are a STRICT JSON generator for an exam preparation system.

CRITICAL RULES (MUST FOLLOW):
- Output ONLY valid JSON
- Response will be parsed using JSON.parse()
- INVALID JSON will break the system
- Use ONLY double quotes "
- NO comments
- NO trailing commas
- NO extra text before or after JSON
- DO NOT wrap response in \`\`\`json
- Escape all line breaks using \\n
- Do NOT use emojis anywhere

TASK:
Convert the given topic into exam-focused notes.

INPUT:
Topic: ${topic}
Class Level: ${classLevel || "Not specified"}
Exam Type: ${examType || "General"}
Revision Mode: ${revisionMode ? "ON" : "OFF"}
Include Diagram: ${includeDiagram ? "YES" : "NO"}
Include Charts: ${includeChart ? "YES" : "NO"}

CONTENT RULES:
- Use simple, clear, exam-oriented language
- Keep content structured and to the point
- Avoid unnecessary explanations

NOTES RULES:
- Output MUST be plain text (NOT markdown)
- Use \\n for line breaks
- Use headings in ALL CAPS followed by colon
- Use bullet points with "- "
- DO NOT use symbols like **, #, or backticks

REVISION MODE:
- If ON:
  - Only short bullet points
  - One-line facts only
  - No explanations
  - Include definitions, formulas, keywords
  - Make it usable for last-minute revision
  - revisionPoints MUST include all key facts

- If OFF:
  - Include:
    - definition
    - short explanation (2–3 lines max)
    - examples if relevant
  - Keep paragraphs very short

IMPORTANCE DISTRIBUTION:
- Divide subtopics into ALL THREE:
  - "⭐": Very Important
  - "⭐⭐": Important
  - "⭐⭐⭐": Frequently Asked
- Do NOT leave any category empty
- Base on exam relevance

DIAGRAM RULES:
- If YES:
  - diagram.data MUST be ONE string
  - Valid Mermaid syntax ONLY
  - MUST start with: graph TD
  - Wrap EVERY label in [ ]
  - Use simple text only (no special characters)
- If NO:
  - diagram.data MUST be ""

CHART RULES:
- If YES:
  - charts MUST contain at least one chart
  - Allowed types: bar, line, pie
  - Use ONLY numeric values
  - Keep labels short
  - Choose chart type based on topic

- If NO:
  - charts MUST be []

CHART FORMAT:
{
  "type": "bar | line | pie",
  "title": "string",
  "data": [
    { "name": "string", "value": 10 }
  ]
}

OUTPUT FORMAT (STRICT):

{
  "subTopics": {
    "⭐": ["string"],
    "⭐⭐": ["string"],
    "⭐⭐⭐": ["string"]
  },
  "importance": "⭐ | ⭐⭐ | ⭐⭐⭐",
  "notes": "string",
  "revisionPoints": ["string"],
  "questions": {
    "short": ["string"],
    "long": ["string"],
    "diagram": "string"
  },
  "diagram": {
    "type": "flowchart | graph | process",
    "data": "string"
  },
  "charts": []
}

FINAL INSTRUCTION:
Return ONLY valid JSON.
If unsure, still return correct JSON structure.
`;
};