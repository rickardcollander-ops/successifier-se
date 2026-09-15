import { buildLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

// /llms.txt – maskinläsbar översikt av sajten för AI-assistenter och
// AI-sökmotorer (se https://llmstxt.org). Genereras från innehållet så att
// nya artiklar alltid finns med.
export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
