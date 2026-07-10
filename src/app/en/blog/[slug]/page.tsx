import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts, relatedServices, renderMarkdown } from "@/lib/blog";
import { dict } from "@/lib/i18n";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    // Artiklarna finns bara på svenska – /en/blog/[slug] serverar samma innehåll
    // som /blog/[slug]. Kanonisera till det svenska originalet (ingen hreflang,
    // eftersom sidorna inte är översättningar) så undviks dubbletter i sök.
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://www.successifier.se/en/blog/${slug}`,
      siteName: "Successifier.se",
      locale: "en",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["Rickard Collander"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function EnBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);
  const t = dict.en;
  const related = getRelatedPosts(slug);
  const services = relatedServices(slug, "en");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    mainEntityOfPage: `https://www.successifier.se/en/blog/${slug}`,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      name: "Rickard Collander",
      url: "https://www.successifier.se/#rickard-collander",
      sameAs: ["https://www.linkedin.com/in/rickard-collander/"],
    },
    publisher: {
      "@type": "Organization",
      name: "Successifier.se",
      logo: { "@type": "ImageObject", url: "https://www.successifier.se/logo.svg" },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.successifier.se/en" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.successifier.se/en/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.successifier.se/en/blog/${slug}` },
    ],
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader locale="en" />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10" aria-label="Article">
        <nav aria-label="Breadcrumb" className="mb-8 text-[13px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/en" className="no-underline" style={{ color: "var(--faint)" }}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/en/blog" className="no-underline" style={{ color: "var(--faint)" }}>Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>{post.title}</li>
          </ol>
        </nav>

        <div className="mt-4">
          {post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-3 uppercase" style={{ fontFamily: "var(--font-plex-mono)", fontSize: "11px", letterSpacing: "0.12em", color: "var(--accent)" }}>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          <h1 className="text-[clamp(32px,4.4vw,52px)] font-medium leading-[1.08] tracking-[-0.018em]" style={{ fontFamily: "var(--font-spectral)" }}>{post.title}</h1>
          <div className="mt-4 text-[13px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
            {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </div>
        </div>

        <article
          lang="sv"
          className="article-prose prose mt-10 max-w-none prose-a:no-underline hover:prose-a:underline prose-img:rounded-[6px] prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {services.length > 0 && (
          <aside className="mt-16" aria-label={t.blog.relatedServicesHeading}>
            <div className="mb-4 uppercase" style={{ fontFamily: "var(--font-plex-mono)", fontSize: "11px", letterSpacing: "0.16em", color: "var(--accent)" }}>
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
                  <div className="text-[16px] font-medium" style={{ fontFamily: "var(--font-spectral)" }}>{s.label} →</div>
                  <p className="mt-1 text-[14px] leading-[1.55]" style={{ color: "var(--muted)" }}>{s.description}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}

        {related.length > 0 && (
          <aside className="mt-14" aria-label={t.blog.relatedHeading}>
            <div className="mb-5 flex items-baseline justify-between gap-4">
              <h2 className="text-[22px] font-medium tracking-[-0.01em]" style={{ fontFamily: "var(--font-spectral)" }}>{t.blog.relatedHeading}</h2>
              <Link href="/en/blog" className="text-[13px] no-underline" style={{ color: "var(--faint)", borderBottom: "1px solid var(--hairline)" }}>{t.blog.allPostsLabel} →</Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/en/blog/${r.slug}`}
                  className="group flex flex-col rounded-[6px] p-5 no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                  style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
                >
                  {r.tags.length > 0 && (
                    <div className="mb-2 uppercase" style={{ fontFamily: "var(--font-plex-mono)", fontSize: "10px", letterSpacing: "0.12em", color: "var(--accent)" }}>{r.tags[0]}</div>
                  )}
                  <h3 className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em]" style={{ fontFamily: "var(--font-spectral)" }}>{r.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[13.5px] leading-[1.55]" style={{ color: "var(--muted)" }}>{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}

        <div className="mt-16 rounded-[6px] p-8 text-center" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
          <div className="text-[22px] font-medium" style={{ fontFamily: "var(--font-spectral)" }}>{t.blog.ctaHeading}</div>
          <p className="mt-2 text-[15px]" style={{ color: "var(--muted)" }}>{t.blog.ctaDescription}</p>
          <a
            href="/en#kontakt"
            className="mt-6 inline-flex items-center justify-center rounded-[3px] px-6 py-[14px] text-[15px] font-medium no-underline transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "var(--on-accent)" }}
          >
            {t.blog.ctaButton} →
          </a>
        </div>
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
