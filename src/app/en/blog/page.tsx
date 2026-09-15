import Link from "next/link";
import { categoryLabel, getAllPosts } from "@/lib/blog";
import { dict } from "@/lib/i18n";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata = {
  title: dict.en.blog.metaTitle,
  description: dict.en.blog.metaDescription,
  alternates: {
    canonical: "/en/blog",
    languages: {
      "sv-SE": "/blog",
      "en": "/en/blog",
      "x-default": "/blog",
    },
  },
};

export default function EnBlogPage() {
  const posts = getAllPosts();
  const t = dict.en;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.successifier.se/en" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.successifier.se/en/blog" },
        ],
      },
      {
        "@type": "Blog",
        "@id": "https://www.successifier.se/en/blog#blog",
        name: t.blog.metaTitle,
        description: t.blog.metaDescription,
        inLanguage: "en",
        url: "https://www.successifier.se/en/blog",
        publisher: { "@id": "https://www.successifier.se/#organization" },
        author: { "@id": "https://www.successifier.se/#rickard-collander" },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `https://www.successifier.se/blog/${post.slug}#article`,
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          author: { "@id": "https://www.successifier.se/#rickard-collander" },
          url: `https://www.successifier.se/en/blog/${post.slug}`,
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
      <SiteHeader locale="en" />

      <main className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10" aria-label="Blog overview">
        <nav aria-label="Breadcrumb" className="mb-8 text-[13px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/en" className="no-underline" style={{ color: "var(--faint)" }}>Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" style={{ color: "var(--ink-soft)" }}>Blog</li>
          </ol>
        </nav>
        <div className="max-w-2xl">
          <h1 className="text-[clamp(34px,4.4vw,52px)] font-medium tracking-[-0.018em]" style={{ fontFamily: "var(--font-spectral)" }}>{t.blog.heading}</h1>
          <p className="mt-4 text-[17px] leading-[1.6]" style={{ color: "var(--muted)" }}>{t.blog.description}</p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-12" style={{ color: "var(--faint)" }}>{t.blog.noPosts}</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/en/blog/${post.slug}`}
                className="group flex flex-col rounded-[6px] p-6 no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
                style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
              >
                {(categoryLabel(post.category) || post.tags[0]) && (
                  <div className="mb-3 flex flex-wrap gap-2 uppercase" style={{ fontFamily: "var(--font-plex-mono)", fontSize: "11px", letterSpacing: "0.12em", color: "var(--accent)" }}>
                    <span>{categoryLabel(post.category) ?? post.tags[0]}</span>
                  </div>
                )}
                <h2 className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={{ fontFamily: "var(--font-spectral)" }}>{post.title}</h2>
                <p className="mt-2 line-clamp-3 text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>{post.excerpt}</p>
                <div className="mt-auto pt-5 text-[12px]" style={{ fontFamily: "var(--font-plex-mono)", color: "var(--faint-2)" }}>
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</time>
                  <span aria-hidden="true"> · </span>
                  {post.readingMinutes} {t.blog.readingTimeLabel}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
