import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

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
    author: { "@type": "Organization", name: "Successifier.se", url: "https://successifier.se" },
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
    <div className="min-h-screen text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6" aria-label="Artikel">
        <nav aria-label="Brödsmulor" className="mb-8 text-sm text-zinc-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-zinc-900">Hem</Link></li>
            <li aria-hidden="true" className="text-zinc-300">/</li>
            <li><Link href="/blog" className="hover:text-zinc-900">Blogg</Link></li>
            <li aria-hidden="true" className="text-zinc-300">/</li>
            <li className="text-zinc-700" aria-current="page">{post.title}</li>
          </ol>
        </nav>

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
            {new Date(post.date).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" })}
          </div>
        </div>

        <article
          className="prose prose-zinc mt-10 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:border prose-img:border-zinc-200 prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center">
          <div className="text-lg font-semibold">Vill du prata med oss?</div>
          <p className="mt-2 text-sm text-zinc-600">Boka ett kostnadsfritt strategisamtal på 30 minuter.</p>
          <a
            href="/#kontakt"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Boka strategisamtal
          </a>
        </div>
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
