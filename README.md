# Anak Agung Aryadipa Aditya Nugraha — Portfolio

Personal portfolio site for an AI and Machine Learning Engineer. Built with TanStack Start and deployed on Netlify.

## Tech Stack

- **Framework**: TanStack Start (React 19, TanStack Router v1)
- **Build**: Vite 7
- **Styling**: Tailwind CSS 4 with custom dark theme
- **Fonts**: Space Grotesk (headings) + Inter (body) from Google Fonts
- **Content**: Content Collections (type-safe markdown)
- **Deployment**: Netlify

## Pages

| Route | Description |
|-------|-------------|
| `/` | About page with bio and core skills |
| `/resume` | Certifications & Courses with LinkedIn links |
| `/projects` | Projects showcase (coming soon) |
| `/contact` | Social links + contact form |

## Running Locally

```bash
npm install
npm run dev
```

Or with Netlify CLI for full feature emulation:

```bash
netlify dev
```

The dev server runs on `http://localhost:8888`.

## Environment Variables

No required environment variables for the base portfolio. If the AI assistant feature is re-enabled, set one of: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, or `GEMINI_API_KEY`.
