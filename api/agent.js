// Optional live agent endpoint for Vercel deployments.
// Requires OPENAI_API_KEY. If not set, the frontend falls back to local intent logic.
module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "Live agent unavailable" });
  }

  const message = (req.body?.message || "").toString().trim();
  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  const systemPrompt = [
    "You are Poe, the guide agent on tonymikityuk.com.",
    "Answer clearly and briefly.",
    "Focus on: site purpose, Tony's career background, target roles, project evidence, and contact information.",
    "This site is not presenting consulting services; it is a career and execution profile.",
    "Do not invent specific company claims or private details.",
    "When routing helps, direct users to the Career page or Agentic Projects page.",
    "When relevant, invite users to contact via mikityuk.tony@gmail.com and LinkedIn.",
  ].join(" ");

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          { role: "system", content: [{ type: "text", text: systemPrompt }] },
          { role: "user", content: [{ type: "text", text: message }] },
        ],
      }),
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Agent upstream error" });
    }

    const data = await response.json();
    const reply =
      data?.output_text ||
      "I can help with career fit, project evidence, role alignment, and contact details.";
    return res.status(200).json({ reply });
  } catch {
    return res.status(500).json({ error: "Agent request failed" });
  }
};
