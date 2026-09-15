import Image from "next/image";
import Link from "next/link";
import {
  AUTHOR,
  SITE_URL,
  categoryLabel,
  getRelatedPosts,
  relatedServices,
  renderMarkdown,
  type Post,
} from "@/lib/blog";
import { dict } from "@/lib/i18n";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

type Locale = "sv" | "en";

const mono = { fontFamily: "var(--font-plex-mono)" } as const;
const serif = { fontFamily: "var(--font-spectral)" } as const;

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : "sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Gemensam artikelmall för /blog och /en/blog. Innehållet är svenskt i båda
// fallen; /en-varianten har engelsk kringtext och canonical mot den svenska
// URL:en (se respektive page.tsx).
export default function ArticlePage({ post, locale }: { post: Post; locale: Locale }) {
  const t = dict[locale];
  const html = renderMarkdown(post.content);
  const related = getRelatedPosts(post.slug);
  const services = relatedServices(post.slug, locale);
  const prefix = locale === "en" ? "/en" : "";
  const home = locale === "en" ? "/en" : "/";
  const blogHref = `${prefix}/blog`;
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const pageUrl = `${SITE_URL}${prefix}/blog/${post.slug}`;
  const isUpdated = post.updated && post.updated.slice(0, 10) !== post.date.slice(0, 10);
  const category = categoryLabel(post.category);
  const imageUrl = post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/blog/${post.slug}/opengraph-image`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      headline: post.title.slice(0, 110),
      alternativeHeadline: post.metaTitle,
      description: post.excerpt,
      abstract: post.summary,
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        width: post.image ? 1536 : 1200,
        height: post.image ? 1024 : 630,
      },
      datePublished: post.date,
      dateModified: post.updated || post.date,
      inLanguage: "sv-SE",
      url: canonicalUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      isPartOf: { "@id": `${SITE_URL}/blog#blog` },
      keywords: [...post.keywords, ...post.tags].join(", "),
      articleSection: category ?? undefined,
      wordCount: post.wordCount,
      timeRequired: `PT${post.readingMinutes}M`,
      author: { "@id": AUTHOR.id },
      publisher: { "@id": `${SITE_URL}/#organization` },
      isAccessibleForFree: true,
      copyrightHolder: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: locale === "en" ? "Home" : "Hem", item: `${SITE_URL}${home === "/" ? "/" : home}` },
        { "@type": "ListItem", position: 2, name: locale === "en" ? "Blog" : "Blogg", item: `${SITE_URL}${blogHref}` },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
      ],
    },
  ];

  if (post.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      inLanguage: "sv-SE",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader locale={locale} />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10" aria-label={locale === "en" ? "Article" : "Artikel"}>
        <nav aria-label={locale === "en" ? "Breadcrumb" : "Brödsmulor"} className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href={home} className="no-underline" style={{ color: "var(--faint)" }}>{locale === "en" ? "Home" : "Hem"}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={blogHref} className="no-underline" style={{ color: "var(--faint)" }}>{locale === "en" ? "Blog" : "Blogg"}</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>{post.title}</li>
          </ol>
        </nav>

        <article itemScope itemType="https://schema.org/BlogPosting" lang="sv">
          <header className="mt-4">
            {(category || post.tags.length > 0) && (
              <div className="mb-4 flex flex-wrap gap-3 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", color: "var(--accent)" }}>
                {category && <span>{category}</span>}
                {post.tags.map((tag) => (
                  <span key={tag} style={{ color: "var(--faint-2)" }}>{tag}</span>
                ))}
              </div>
            )}

            <h1 className="text-[clamp(32px,4.4vw,52px)] font-medium leading-[1.08] tracking-[-0.018em]" style={serif} itemProp="headline">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
              <span>
                {t.blog.authorLabel}{" "}
                <a href={`${home === "/" ? "" : home}#om-oss`} className="no-underline" style={{ color: "var(--ink-soft)" }} itemProp="author">
                  {AUTHOR.name}
                </a>
              </span>
              <span>
                {t.blog.publishedLabel}{" "}
                <time dateTime={post.date} itemProp="datePublished">{formatDate(post.date, locale)}</time>
              </span>
              {isUpdated && (
                <span>
                  {t.blog.updatedLabel}{" "}
                  <time dateTime={post.updated} itemProp="dateModified">{formatDate(post.updated, locale)}</time>
                </span>
              )}
              <span>{post.readingMinutes} {t.blog.readingTimeLabel}</span>
            </div>
          </header>

          {post.summary && (
            <section
              aria-label={t.blog.shortAnswerLabel}
              className="mt-10 rounded-[6px] p-6 sm:p-7"
              style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)", borderLeft: "3px solid var(--accent)" }}
            >
              <div className="mb-2 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
                {t.blog.shortAnswerLabel}
              </div>
              <p className="text-[17px] leading-[1.6]" style={{ color: "var(--ink-soft)" }} itemProp="abstract">
                {post.summary}
              </p>
            </section>
          )}

          <div
            className="article-prose prose mt-10 max-w-none prose-a:no-underline hover:prose-a:underline prose-img:rounded-[6px] prose-table:text-sm"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <footer className="mt-14 rounded-[6px] p-6 sm:p-7" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full" style={{ border: "1px solid var(--hairline)" }}>
                <Image src="/rc2.jpg" alt={AUTHOR.name} width={144} height={144} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
                  {t.blog.authorLabel}
                </div>
                <div className="mt-1 text-[18px] font-medium" style={serif}>{AUTHOR.name}</div>
                <div className="text-[13px]" style={{ color: "var(--faint-2)" }}>{t.about.founderTitle}</div>
                <p className="mt-3 text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>{t.blog.authorBio}</p>
                <a
                  href={AUTHOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[13.5px] no-underline"
                  style={{ color: "var(--accent)", borderBottom: "1px solid var(--hairline-strong)" }}
                >
                  {t.blog.authorLinkLabel} →
                </a>
              </div>
            </div>
          </footer>
        </article>

        {services.length > 0 && (
          <aside className="mt-16" aria-label={t.blog.relatedServicesHeading}>
            <div className="mb-4 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
              {t.blog.relatedServicesHeading}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group rounded-[6px] p-5 no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                  style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
                >
                  <div className="text-[16px] font-medium" style={serif}>{s.label} →</div>
                  <p className="mt-1 text-[14px] leading-[1.55]" style={{ color: "var(--muted)" }}>{s.description}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}

        {related.length > 0 && (
          <aside className="mt-14" aria-label={t.blog.relatedHeading}>
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <h2 className="text-[22px] font-medium tracking-[-0.01em]" style={serif}>{t.blog.relatedHeading}</h2>
              <Link href={blogHref} className="text-[13px] no-underline" style={{ color: "var(--faint)", borderBottom: "1px solid var(--hairline)" }}>
                {t.blog.allPostsLabel} →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`${prefix}/blog/${r.slug}`}
                  className="group flex flex-col rounded-[6px] p-5 no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                  style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
                >
                  {(categoryLabel(r.category) || r.tags[0]) && (
                    <div className="mb-2 uppercase" style={{ ...mono, fontSize: "10px", letterSpacing: "0.12em", color: "var(--accent)" }}>
                      {categoryLabel(r.category) ?? r.tags[0]}
                    </div>
                  )}
                  <h3 className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em]" style={serif}>{r.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}

        <div className="mt-16 rounded-[6px] p-8 text-center" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
          <div className="text-[22px] font-medium" style={serif}>{t.blog.ctaHeading}</div>
          <p className="mt-2 text-[15px]" style={{ color: "var(--muted)" }}>{t.blog.ctaDescription}</p>
          <Link
            href={`${home === "/" ? "" : home}/#kontakt`.replace("//", "/")}
            className="mt-6 inline-flex items-center justify-center rounded-[3px] px-6 py-[14px] text-[15px] font-medium no-underline transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "var(--on-accent)" }}
          >
            {t.blog.ctaButton} →
          </Link>
        </div>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
