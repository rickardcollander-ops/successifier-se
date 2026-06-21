import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
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
    title: `${post.title} · Successifier.se`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        "sv-SE": `/blog/${slug}`,
        "en": `/en/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://successifier.se/blog/${slug}`,
      siteName: "Successifier.se",
      locale: "sv_SE",
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "sv-SE",
    mainEntityOfPage: `https://successifier.se/blog/${slug}`,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      name: "Rickard Collander",
      url: "https://successifier.se/#rickard-collander",
      sameAs: ["https://www.linkedin.com/in/rickard-collander/"],
    },
    publisher: {
      "@type": "Organization",
      name: "Successifier.se",
      logo: { "@type": "ImageObject", url: "https://successifier.se/logo.svg" },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://successifier.se/" },
      { "@type": "ListItem", position: 2, name: "Blogg", item: "https://successifier.se/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://successifier.se/blog/${slug}` },
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
      <SiteHeader locale="sv" />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10" aria-label="Artikel">
        <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="no-underline" style={{ color: "var(--faint)" }}>Blogg</Link></li>
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
            {new Date(post.date).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })}
          </div>
        </div>

        <article
          className="article-prose prose mt-10 max-w-none prose-a:no-underline hover:prose-a:underline prose-img:rounded-[6px] prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-16 rounded-[6px] p-8 text-center" style={{ border: "1px solid var(--hairline)", background: "var(--paper-alt)" }}>
          <div className="text-[22px] font-medium" style={{ fontFamily: "var(--font-spectral)" }}>Vill du prata med oss?</div>
          <p className="mt-2 text-[15px]" style={{ color: "var(--muted)" }}>Boka ett kostnadsfritt strategisamtal på 30 minuter.</p>
          <Link
            href="/#kontakt"
            className="mt-6 inline-flex items-center justify-center rounded-[3px] px-6 py-[14px] text-[15px] font-medium no-underline transition-opacity hover:opacity-90"
            style={{ background: "var(--accent)", color: "var(--on-accent)" }}
          >
            Boka strategisamtal →
          </Link>
        </div>
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
