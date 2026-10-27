import Image from "next/image";
import Link from "next/link";
import { topicLabel, type PostMeta } from "@/lib/blog";

const mono = { fontFamily: "var(--font-plex-mono)" } as const;
const serif = { fontFamily: "var(--font-spectral)" } as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric" });
}

// Artikelkort för kunskapsbasens översikt och ämnessidor.
export default function PostCard({
  post,
  showImage = false,
  showTopic = true,
  headingLevel = "h3",
}: {
  post: PostMeta;
  showImage?: boolean;
  showTopic?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const label = showTopic ? topicLabel(post) : null;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[6px] no-underline transition-colors hover:bg-[color:var(--paper-alt)]"
      style={{ border: "1px solid var(--hairline)", background: "var(--paper)", color: "var(--ink)" }}
    >
      {showImage && post.image && (
        <Image
          src={post.image}
          alt=""
          width={1536}
          height={1024}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[3/2] w-full object-cover"
          style={{ borderBottom: "1px solid var(--hairline)" }}
        />
      )}
      <div className="flex flex-1 flex-col p-6">
        {(post.pillar || label) && (
          <div className="mb-3 flex flex-wrap gap-3 uppercase" style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", color: "var(--accent)" }}>
            {post.pillar && <span>Huvudguide</span>}
            {label && <span style={{ color: post.pillar ? "var(--faint-2)" : undefined }}>{label}</span>}
          </div>
        )}
        <Heading className="text-[19px] font-medium leading-[1.25] tracking-[-0.01em]" style={serif}>
          {post.title}
        </Heading>
        <p className="mt-2 line-clamp-3 text-[14.5px] leading-[1.6]" style={{ color: "var(--muted)" }}>
          {post.answers ?? post.excerpt}
        </p>
        <div className="mt-auto pt-5 text-[12px]" style={{ ...mono, color: "var(--faint-2)" }}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true"> · </span>
          {post.readingMinutes} min läsning
        </div>
      </div>
    </Link>
  );
}
