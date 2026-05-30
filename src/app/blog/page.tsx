import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { dict } from "@/lib/i18n";

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
          { "@type": "ListItem", position: 1, name: "Hem", item: "https://successifier.se/" },
          { "@type": "ListItem", position: 2, name: "Blogg", item: "https://successifier.se/blog" },
        ],
      },
      {
        "@type": "Blog",
        "@id": "https://successifier.se/blog#blog",
        name: t.blog.metaTitle,
        description: t.blog.metaDescription,
        inLanguage: "sv-SE",
        url: "https://successifier.se/blog",
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          url: `https://successifier.se/blog/${post.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Successifier" width={36} height={36} className="h-9 w-9 drop-shadow-sm" priority />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Successifier.se</div>
              <div className="text-xs text-zinc-500">Customer Success • AI • Automation • Marknadsföring</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex" aria-label="Huvudmeny">
            <Link href="/#tjanster" className="hover:text-zinc-950">Tjänster</Link>
            <Link href="/#sama" className="hover:text-zinc-950">Plattform</Link>
            <Link href="/#arbetssatt" className="hover:text-zinc-950">Arbetssätt</Link>
            <Link href="/#resultat" className="hover:text-zinc-950">Resultat</Link>
            <Link href="/#om-oss" className="hover:text-zinc-950">Om oss</Link>
            <Link href="/blog" className="font-medium text-zinc-950">Blogg</Link>
            <Link href="/#kontakt" className="hover:text-zinc-950">Kontakt</Link>
          </nav>
          <a
            href="/#kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Boka strategisamtal
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-label="Bloggöversikt">
        <nav aria-label="Brödsmulor" className="mb-8 text-sm text-zinc-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-zinc-900">Hem</Link></li>
            <li aria-hidden="true" className="text-zinc-300">/</li>
            <li className="text-zinc-700" aria-current="page">Blogg</li>
          </ol>
        </nav>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Blogg</h1>
          <p className="mt-3 text-zinc-600">
            Insikter och guider om Customer Success, AI, automation och marknadsföring.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="mt-12 text-zinc-500">Inga inlägg publicerade än.</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                {post.tags.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-indigo-700">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p>
                <div className="mt-auto pt-4 text-xs text-zinc-400">
                  {new Date(post.date).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })}
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-200 bg-white" aria-label="Sidfot">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-500 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Successifier.se</div>
          <div className="flex gap-4">
            <a className="hover:text-zinc-900" href="mailto:rc@successifier.com">rc@successifier.com</a>
            <a className="hover:text-zinc-900" href="tel:+46722136422">+46 72 213 64 22</a>
            <a className="hover:text-zinc-900" href="https://www.linkedin.com/in/rickard-collander/" target="_blank" rel="noopener noreferrer nofollow">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
