import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));

const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Server-side Gemini API route for generating complete structured websites from prompt
app.post('/api/generate-website', async (req, res) => {
  try {
    const { prompt, existingSite, refinement } = req.body;

    if (!prompt && !refinement) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (!ai) {
      // Return flag indicating fallback generator should be used on client
      return res.status(200).json({
        fallbackNeeded: true,
        message: 'No GEMINI_API_KEY configured on server, using intelligent client generator',
      });
    }

    const systemInstruction = `You are an elite, modern website architect and UI designer.
Your task is to take a user prompt and generate a complete, high-quality, responsive website data structure in JSON format.
The generated website must feel like it was created by an award-winning human designer:
- Authentic, compelling, human copy (never generic AI placeholders or lorem ipsum).
- Clear typographic hierarchy, domain-native color palette, and layout structure.
- Distinctive features, services, or showcase items tailored to the prompt.
- Interactive components: functional hero, feature grid, showcase gallery/products, testimonials, pricing or menu (if applicable), FAQ accordion items, and contact section.

Return ONLY a valid JSON object matching this schema:
{
  "siteName": "string",
  "tagline": "string",
  "category": "string (e.g. Cafe, Tech SaaS, Portfolio, Clinic, Studio, E-commerce, Architecture)",
  "theme": {
    "accentColor": "string (hex code e.g. #8C4325 or #2563EB or #059669)",
    "accentName": "string (e.g. Terracotta, Royal Blue, Emerald, Amber, Slate)",
    "fontPairing": "string (serif-editorial | modern-sans | minimal-mono)",
    "vibe": "string (e.g. Warm Artisanal, Minimalist High-Tech, Crisp Editorial)"
  },
  "navLinks": ["string", "string", "string", "string"],
  "hero": {
    "badge": "string",
    "headline": "string",
    "subheadline": "string",
    "primaryCta": "string",
    "secondaryCta": "string",
    "imageSubject": "string (description of ideal photograph)",
    "imageKeyword": "string (e.g. coffee, architecture, tech, interior, nature, doctor)"
  },
  "about": {
    "title": "string",
    "lead": "string",
    "paragraphs": ["string", "string"],
    "highlights": [
      { "label": "string", "value": "string" },
      { "label": "string", "value": "string" },
      { "label": "string", "value": "string" }
    ]
  },
  "features": [
    { "title": "string", "description": "string", "icon": "string (star | zap | shield | spark | heart | compass | coffee | check)" }
  ],
  "showcase": {
    "title": "string",
    "subtitle": "string",
    "filterTags": ["All", "string", "string"],
    "items": [
      {
        "title": "string",
        "category": "string",
        "description": "string",
        "priceOrDate": "string",
        "badge": "string"
      }
    ]
  },
  "testimonials": [
    { "quote": "string", "name": "string", "role": "string", "avatarInitials": "string" }
  ],
  "pricing": {
    "title": "string",
    "subtitle": "string",
    "plans": [
      {
        "name": "string",
        "price": "string",
        "period": "string",
        "description": "string",
        "isPopular": boolean,
        "features": ["string", "string", "string", "string"],
        "cta": "string"
      }
    ]
  },
  "faq": [
    { "question": "string", "answer": "string" }
  ],
  "contact": {
    "title": "string",
    "subtitle": "string",
    "email": "string",
    "location": "string",
    "hours": "string"
  },
  "footer": {
    "copyright": "string",
    "tagline": "string"
  }
}`;

    const userContent = refinement
      ? `Modify this existing website based on this request: "${refinement}". Existing website JSON: ${JSON.stringify(
          existingSite
        )}`
      : `Create a complete website for this prompt: "${prompt}". Make all content specific, high quality, and realistic.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userContent,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) {
      return res.status(500).json({ error: 'Empty response from Gemini' });
    }

    const websiteData = JSON.parse(text);
    return res.json({ website: websiteData, success: true });
  } catch (err: any) {
    console.error('Gemini generation error:', err);
    return res.status(200).json({
      fallbackNeeded: true,
      error: err.message || 'Generation failed',
    });
  }
});

// Mount Vite middleware for SPA in development
const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'spa',
});
app.use(vite.middlewares);

const port = Number(process.env.PORT) || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
