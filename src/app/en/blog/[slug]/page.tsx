import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AUTHOR, SITE_URL, categoryLabel, getAllPosts, getPostBySlug } from "@/lib/blog";
import ArticlePage from "@/components/blog/ArticlePage";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// Artiklarna finns bara på svenska. /en/blog/[slug] ger engelsk kringtext men
// samma innehåll, så canonical pekar på den svenska URL:en för att undvika
// duplicerat innehåll och felaktig hreflang.
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const canonical = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.metaTitle ?? post.title,
    description: post.excerpt,
    keywords: [...post.keywords, ...post.tags],
    authors: [{ name: AUTHOR.name, url: AUTHOR.linkedin }],
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        "sv-SE": `/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: post.metaTitle ?? post.title,
      description: post.excerpt,
      url: canonical,
      siteName: "Successifier.se",
      locale: "sv_SE",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [AUTHOR.name],
      section: categoryLabel(post.category) ?? undefined,
      tags: [...post.tags, ...post.keywords],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle ?? post.title,
      description: post.excerpt,
    },
  };
}

export default async function EnBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <ArticlePage post={post} locale="en" />;
}
