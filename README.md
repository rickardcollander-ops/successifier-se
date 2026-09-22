This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Innehåll, SEO och GEO

- Blogginlägg ligger i `content/blog/*.md` med frontmatter: `title`, `metaTitle` (≤ 55 tecken), `slug`, `date`, `updated`, `cluster` (valfritt, t.ex. `kontaktcenter`), `pillar` (valfritt, `true` för klustrets huvudguide), `answers` (en mening om vilken fråga artikeln besvarar, visas i llms.txt och klusterlistan), `excerpt` (meta description, 130–158 tecken), `summary` ("Kort svar"-ruta, används av AI-sökmotorer), `category` (`ai-konsult` | `customer-success` | `marknad` | `saas`), `tags`, `keywords`, `imageAlt`, `status`.
- Rubriker kan ha explicit ankar-id: `## Rubrik {#mitt-id}`. Sektionen `## Vanliga frågor` (H3 = fråga) exponeras automatiskt som FAQPage-schema.
- Sätt inte samma `date` på flera inlägg; publicera med spridning.
- `updated` är sidans senaste **innehållsändring** och används som `dateModified` i BlogPosting-schemat och `lastmod` i sitemap. Ändra det bara när texten faktiskt ändras (nytt avsnitt, nya siffror, omskrivning), inte vid metadata-, länk- eller layoutändringar. Samma regel gäller `PAGE_UPDATED` för statiska sidor i `src/lib/site.ts`. Datum sätts aldrig vid bygge eller deploy.
- Bilder: lägg bilden som `![alt](/blog/<slug>.webp)` eller peka på en extern URL och kör `node scripts/localize-blog-images.mjs` som laddar ner, skalar (1536 px) och konverterar till WebP.
- `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/robots.txt` och OG-bilder (`/opengraph-image`, `/blog/<slug>/opengraph-image`) genereras automatiskt vid bygge.
- IndexNow: `.github/workflows/indexnow.yml` körs efter varje lyckad produktionsdeploy och skickar bara URL:er som är nya eller har fått nytt `lastmod` sedan förra körningen (svaret loggas i Actions). Manuellt: `node scripts/indexnow-submit.mjs --urls <url ...>` eller `--changed --dry-run` för att se vad som skulle skickas.
- Författarsidan `/om/rickard-collander` (ProfilePage + Person-schema) länkas från varje artikel. Personuppgifterna ligger i `FOUNDER` i `src/lib/site.ts`.
- Företagsfakta (juridiskt namn, org.nr, adress, grundare, LinkedIn-företagssida, Allabolag, Microsoft Partner-URL) ligger i `src/lib/site.ts` och används av Organization-schemat i `src/app/layout.tsx`, sidfötterna, `/llms.txt` och tjänstesidorna. Ändra där, inte på enskilda sidor. `ORG.microsoftPartner` är tom tills partnerprofilens URL finns.
- Tjänstesidorna (`/ai-agenter`, `/seo-geo`, `/customer-success`, `/contact-center-automation`) bygger på mallen `src/components/site/ServicePage.tsx` och listas i `SERVICE_PAGES` i `src/lib/site.ts`. `/ai-kundtjanst` är ingången till produkten Supportifier och länkar vidare till supportifier.se.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
