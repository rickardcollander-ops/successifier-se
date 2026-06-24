import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { dict } from "@/lib/i18n";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const t = dict.sv;

export const metadata = {
  title: t.blog.metaTitle,
  description: t.blog.metaDescription,
  alternates: {
    canonical: "/blog",
    languages: {
      "sv-SE": "/blog",
      "en": "/en/blog",
      "x-default": "/blog",
    },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.successifier.se/" },
          { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.successifier.se/blog" },
        ],
      },
      {
        "@type": "Blog",
        "@id": "https://www.successifier.se/blog#blog",
        name: t.blog.metaTitle,
        description: t.blog.metaDescription,
        inLanguage: "sv-SE",
        url: "https://www.successifier.se/blog",
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          url: `https://www.successifier.se/blog/${post.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen" style={{ color: "var(--ink)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <SiteHeader locale="sv" />

      <main className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10" aria-label="Bloggöversikt">
        <nav aria-label="Brödsmulor" className="mb-8 text-[13px]" style={{ ...{ fontFamily: "var(--font-plex-mono)" }, color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="no-underline" style={{ color: "var(--faint)" }}>Hem</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>Blogg</li>
          </ol>
        </nav>
        <div className="max-w-2xl">
          <h1 className="text-[clamp(34px,4.4vw,52px)] font-medium tracking-[-0.018em]" style={{ fontFamily: "var(--font-spectral)" }}>Blogg</h1>
          <p className="mt-4 text-[17px] leading-[1.6]" style={{ color: "var(--muted)" }}>
            Insikter och guider om Customer Success, AI, automation och marknadsföring.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-12" style={{ color: "var(--faint)" }}>Inga inlägg publicerade än.</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-[6px] p-6 no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
              >
                {post.tags.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2 uppercase" style={{ fontFamily: "var(--font-plex-mono)", fontSize: "11px", letterSpacing: "0.12em", color: "var(--accent)" }}>
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <h2 className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={{ fontFamily: "var(--font-spectral)" }}>
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>{post.excerpt}</p>
                <div className="mt-auto pt-5 text-[12px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
                  {new Date(post.date).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <SiteFooter locale="sv" />
    </div>
  );
}
