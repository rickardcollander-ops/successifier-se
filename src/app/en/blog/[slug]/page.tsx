import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { dict } from "@/lib/i18n";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Successifier.se`,
    description: post.excerpt,
    alternates: {
      canonical: `/en/blog/${slug}`,
      languages: {
        "sv-SE": `/blog/${slug}`,
        "en": `/en/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
  };
}

export default async function EnBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content);
  const t = dict.en;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    mainEntityOfPage: `https://successifier.se/en/blog/${slug}`,
    author: { "@type": "Organization", name: "Successifier.se", url: "https://successifier.se" },
    publisher: {
      "@type": "Organization",
      name: "Successifier.se",
      logo: { "@type": "ImageObject", url: "https://successifier.se/logo.svg" },
    },
  };

  return (
    <div className="min-h-screen text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/en" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Successifier" width={36} height={36} className="h-9 w-9 drop-shadow-sm" priority />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Successifier.se</div>
              <div className="text-xs text-zinc-500">Customer Success • AI • Automation • Marketing</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <Link href="/en#tjanster" className="hover:text-zinc-950">{t.nav.services}</Link>
            <Link href="/en#sama" className="hover:text-zinc-950">{t.nav.platform}</Link>
            <Link href="/en/blog" className="font-medium text-zinc-950">{t.nav.blog}</Link>
            <Link href="/blog" className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50">SV</Link>
          </nav>
          <a
            href="/en#kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            {t.nav.cta}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link href="/en/blog" className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900">
          {t.blog.backLabel}
        </Link>

        <div className="mt-4">
          {post.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{post.title}</h1>
          <div className="mt-3 text-sm text-zinc-400">
            {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
          </div>
        </div>

        <article
          className="prose prose-zinc mt-10 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:border prose-img:border-zinc-200 prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center">
          <div className="text-lg font-semibold">{t.blog.ctaHeading}</div>
          <p className="mt-2 text-sm text-zinc-600">{t.blog.ctaDescription}</p>
          <a
            href="/en#kontakt"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            {t.blog.ctaButton}
          </a>
        </div>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-500 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Successifier.se</div>
          <div className="flex gap-4">
            <a className="hover:text-zinc-900" href="mailto:rc@successifier.com">rc@successifier.com</a>
            <a className="hover:text-zinc-900" href="tel:+46722136422">+46 72 213 64 22</a>
            <a className="hover:text-zinc-900" href="https://www.linkedin.com/in/rickard-collander/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
