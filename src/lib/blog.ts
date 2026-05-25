import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}

function slugFromFilename(filename: string) {
  return filename.replace(/\.md$/, "");
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: (data.slug as string) || slugFromFilename(file),
        title: (data.title as string) || "",
        date: data.date ? new Date(data.date as string).toISOString() : "",
        excerpt: (data.excerpt as string) || "",
        tags: (data.tags as string[]) || [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const postSlug = (data.slug as string) || slugFromFilename(file);
    if (postSlug === slug) {
      return {
        slug: postSlug,
        title: (data.title as string) || "",
        date: data.date ? new Date(data.date as string).toISOString() : "",
        excerpt: (data.excerpt as string) || "",
        tags: (data.tags as string[]) || [],
        content,
      };
    }
  }
  return null;
}
