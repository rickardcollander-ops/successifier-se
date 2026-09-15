import { categoryLabel, getAllPosts, getPostBySlug } from "@/lib/blog";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return renderOgImage({
    title: post?.title ?? "Successifier",
    eyebrow: categoryLabel(post?.category ?? null) ?? "Blogg",
  });
}
