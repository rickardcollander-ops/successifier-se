import { buildLlmsFullTxt } from "@/lib/llms";

export const dynamic = "force-static";

// /llms-full.txt – alla artiklar i sin helhet som markdown, för AI-system
// som vill läsa hela innehållet i ett anrop.
export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
