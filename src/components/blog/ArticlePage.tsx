import Image from "next/image";
import Link from "next/link";
import {
  AUTHOR,
  CLUSTERS,
  SITE_URL,
  buildArticleParts,
  categoryLabel,
  clusterHref,
  getClusterPosts,
  getRelatedPosts,
  relatedServices,
  topicLabel,
  type Post,
} from "@/lib/blog";
import { dict } from "@/lib/i18n";
import { ORG } from "@/lib/site";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ShareLinks from "@/components/blog/ShareLinks";
import TocNav from "@/components/blog/TocNav";

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

// Artikelmall för /blog. Artiklarna finns bara på svenska; /en/blog/*
// omdirigeras (301) till /blog/* i next.config.ts. Locale "en" styr bara
// kringtexten och används inte av några publicerade sidor i dag.
const proseClass =
  "article-prose prose mt-10 max-w-none prose-a:no-underline hover:prose-a:underline prose-img:rounded-[6px] prose-table:text-sm";

export default function ArticlePage({ post, locale }: { post: Post; locale: Locale }) {
  const t = dict[locale];
  const parts = buildArticleParts(post.content);
  // Klusterartiklar visas i egen lista; "Relaterade artiklar" fyller på med
  // närliggande ämnen utanför klustret.
  const clusterPosts = post.cluster ? getClusterPosts(post.cluster).filter((p) => p.slug !== post.slug) : [];
  const related = getRelatedPosts(post.slug, 3 + clusterPosts.length)
    .filter((r) => !clusterPosts.some((c) => c.slug === r.slug))
    .slice(0, 3);
  const services = relatedServices(post.slug, locale);
  const prefix = locale === "en" ? "/en" : "";
  const home = locale === "en" ? "/en" : "/";
  const blogHref = `${prefix}/blog`;
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;
  const pageUrl = `${SITE_URL}${prefix}/blog/${post.slug}`;
  const isUpdated = post.updated && post.updated.slice(0, 10) !== post.date.slice(0, 10);
  const category = categoryLabel(post.category);
  const cluster = post.cluster ? { ...CLUSTERS[post.cluster], href: clusterHref(post.cluster) } : null;
  const kb = t.blog.heading;
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
      author: {
        "@type": "Person",
        "@id": AUTHOR.id,
        name: AUTHOR.name,
        jobTitle: AUTHOR.jobTitle,
        url: AUTHOR.url,
        image: AUTHOR.image,
        sameAs: [AUTHOR.linkedin],
      },
      publisher: {
        "@type": "Organization",
        "@id": ORG.id,
        name: ORG.legalName,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
      },
      isAccessibleForFree: true,
      copyrightHolder: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: locale === "en" ? "Home" : "Hem", item: `${SITE_URL}${home === "/" ? "/" : home}` },
        { "@type": "ListItem", position: 2, name: kb, item: `${SITE_URL}${blogHref}` },
        ...(cluster ? [{ "@type": "ListItem", position: 3, name: cluster.label, item: `${SITE_URL}${cluster.href}` }] : []),
        { "@type": "ListItem", position: cluster ? 4 : 3, name: post.title, item: pageUrl },
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

      <main className="mx-auto max-w-[1180px] px-6 py-16 sm:px-10 lg:grid lg:grid-cols-[minmax(0,48rem)_240px] lg:justify-between lg:gap-14" aria-label={locale === "en" ? "Article" : "Artikel"}>
        <div className="min-w-0">
        <nav aria-label={locale === "en" ? "Breadcrumb" : "Brödsmulor"} className="mb-8 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href={home} className="no-underline" style={{ color: "var(--faint)" }}>{locale === "en" ? "Home" : "Hem"}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={blogHref} className="no-underline" style={{ color: "var(--faint)" }}>{kb}</Link></li>
            <li aria-hidden="true">/</li>
            {cluster && (
              <>
                <li><Link href={cluster.href} className="no-underline" style={{ color: "var(--faint)" }}>{cluster.short}</Link></li>
                <li aria-hidden="true">/</li>
              </>
            )}
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>{post.title}</li>
          </ol>
        </nav>

        <article lang="sv">
          <header className="mt-4">
            {(cluster || category || post.tags.length > 0) && (
              <div className="mb-4 flex flex-wrap gap-3 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", color: "var(--accent)" }}>
                {cluster ? (
                  <Link href={cluster.href} className="no-underline" style={{ color: "var(--accent)" }}>{topicLabel(post)}</Link>
                ) : (
                  category && <span>{category}</span>
                )}
                {post.tags.map((tag) => (
                  <span key={tag} style={{ color: "var(--faint-2)" }}>{tag}</span>
                ))}
              </div>
            )}

            <h1 className="text-[clamp(32px,4.4vw,52px)] font-medium leading-[1.08] tracking-[-0.018em]" style={serif}>
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]" style={{ ...mono, color: "var(--faint-2)" }}>
              <span>
                {t.blog.authorLabel}{" "}
                <Link href={AUTHOR.path} rel="author" className="no-underline" style={{ color: "var(--ink-soft)" }}>
                  {AUTHOR.name}
                </Link>
              </span>
              <span>
                {t.blog.publishedLabel}{" "}
                <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
              </span>
              {isUpdated && (
                <span>
                  {t.blog.updatedLabel}{" "}
                  <time dateTime={post.updated}>{formatDate(post.updated, locale)}</time>
                </span>
              )}
              <span>{post.readingMinutes} {t.blog.readingTimeLabel}</span>
            </div>
            <div className="mt-4">
              <ShareLinks url={canonicalUrl} labels={{ copy: t.blog.copyLinkLabel, copied: t.blog.copiedLabel, linkedin: t.blog.shareLinkedInLabel }} />
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
              <p className="text-[17px] leading-[1.6]" style={{ color: "var(--ink-soft)" }}>
                {post.summary}
              </p>
            </section>
          )}

          {parts.toc.length > 0 && (
            <div className="mt-8 lg:hidden">
              <TocNav items={parts.toc} label={t.blog.tocLabel} variant="inline" />
            </div>
          )}

          <div className={proseClass} dangerouslySetInnerHTML={{ __html: parts.beforeHtml }} />

          {parts.afterHtml.trim() && services[0] && (
            <aside
              className="my-12 rounded-[6px] p-6 sm:p-7"
              aria-label={t.blog.midCtaLabel}
              style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}
            >
              <div className="mb-2 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
                {t.blog.midCtaLabel}
              </div>
              <div className="text-[19px] font-medium leading-[1.3]" style={serif}>{services[0].label}</div>
              <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: "var(--muted)" }}>{services[0].description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href={`${home === "/" ? "" : home}/#kontakt`.replace("//", "/")}
                  className="inline-flex items-center rounded-[3px] px-5 py-[11px] text-[14px] font-medium no-underline transition-opacity hover:opacity-90"
                  style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                >
                  {t.blog.ctaButton} →
                </Link>
                <Link href={services[0].href} className="text-[14px] no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline-strong)" }}>
                  {t.blog.midCtaReadMore} →
                </Link>
              </div>
            </aside>
          )}

          {parts.afterHtml.trim() && <div className={proseClass} dangerouslySetInnerHTML={{ __html: parts.afterHtml }} />}

          {parts.faq.length > 0 && (
            <section className="mt-2" aria-label={t.blog.faqLabel}>
              <div className={proseClass} dangerouslySetInnerHTML={{ __html: parts.faqHeadingHtml }} />
              <div className="mt-6 divide-y" style={{ borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", borderColor: "var(--hairline)" }}>
                {parts.faq.map((f) => (
                  <details key={f.id} className="faq-item group py-1" style={{ borderColor: "var(--hairline)" }}>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4">
                      <h3
                        id={f.id}
                        className="m-0 text-[18px] font-medium leading-[1.35] tracking-[-0.01em]"
                        style={serif}
                        dangerouslySetInnerHTML={{ __html: f.question }}
                      />
                      <span aria-hidden="true" className="mt-1 shrink-0 transition-transform group-open:rotate-45" style={{ ...mono, color: "var(--accent)" }}>+</span>
                    </summary>
                    <div className={`${proseClass.replace("mt-10 ", "")} pb-5`} dangerouslySetInnerHTML={{ __html: f.answerHtml }} />
                  </details>
                ))}
              </div>
            </section>
          )}

          {parts.tailHtml.trim() && <div className={proseClass} dangerouslySetInnerHTML={{ __html: parts.tailHtml }} />}

          <footer className="mt-14 rounded-[6px] p-6 sm:p-7" style={{ border: "1px solid var(--hairline)", background: "var(--paper)" }}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full" style={{ border: "1px solid var(--hairline)" }}>
                <Image src="/rc2.jpg" alt={AUTHOR.name} width={144} height={144} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
                  {t.blog.authorLabel}
                </div>
                <div className="mt-1 text-[18px] font-medium" style={serif}>
                  <Link href={AUTHOR.path} rel="author" className="no-underline" style={{ color: "var(--ink)" }}>{AUTHOR.name}</Link>
                </div>
                <div className="text-[13px]" style={{ color: "var(--faint-2)" }}>{t.about.founderTitle}</div>
                <p className="mt-3 text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>{t.blog.authorBio}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  <Link
                    href={AUTHOR.path}
                    rel="author"
                    className="inline-block text-[13.5px] no-underline"
                    style={{ color: "var(--accent)", borderBottom: "1px solid var(--hairline-strong)" }}
                  >
                    {t.blog.authorPageLabel} →
                  </Link>
                  <a
                    href={AUTHOR.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[13.5px] no-underline"
                    style={{ color: "var(--accent)", borderBottom: "1px solid var(--hairline-strong)" }}
                  >
                    {t.blog.authorLinkLabel} →
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </article>

        {post.cluster && clusterPosts.length > 0 && (
          <nav className="mt-16 rounded-[6px] p-6 sm:p-7" aria-label={CLUSTERS[post.cluster].label} style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
            <div className="mb-1 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
              {t.blog.clusterLabel}
            </div>
            <h2 className="text-[22px] font-medium tracking-[-0.01em]" style={serif}>
              <Link href={clusterHref(post.cluster)} className="no-underline" style={{ color: "var(--ink)" }}>{CLUSTERS[post.cluster].label}</Link>
            </h2>
            <ul className="mt-4 space-y-3">
              {clusterPosts.map((c) => (
                <li key={c.slug} className="text-[15px] leading-[1.55]">
                  <Link href={`/blog/${c.slug}`} className="font-medium no-underline" style={{ color: "var(--ink)", borderBottom: "1px solid var(--hairline-strong)" }}>
                    {c.pillar ? `${t.blog.pillarPrefix}: ${c.title}` : c.title}
                  </Link>
                  {c.answers && <span style={{ color: "var(--muted)" }}> – {c.answers}</span>}
                </li>
              ))}
            </ul>
          </nav>
        )}

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
                {kb} →
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
        </div>

        <aside className="hidden lg:block" aria-label={t.blog.tocLabel}>
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pb-6">
            <TocNav items={parts.toc} label={t.blog.tocLabel} variant="sidebar" />
            {cluster && (
              <Link href={cluster.href} className="mt-6 block text-[13px] no-underline" style={{ color: "var(--faint)", borderTop: "1px solid var(--hairline)", paddingTop: "16px" }}>
                {t.blog.hubLinkLabel}: {cluster.label} →
              </Link>
            )}
          </div>
        </aside>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
