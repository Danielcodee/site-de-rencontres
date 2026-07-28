import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { blogPosts } from "@/lib/data";

type Params = { slug: string };

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader eyebrow={post.tags.join(" · ")} title={post.title}>
        <p className="mt-5 text-sm uppercase tracking-widest text-mist">
          {formatDate(post.date)} · Por {post.author}
        </p>
      </PageHeader>

      <article className="bg-ink py-16 sm:py-24">
        <div className="container-quartel max-w-3xl">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-sm border border-line">
            <Image src={post.cover} alt="" aria-hidden fill sizes="100vw" className="object-cover" />
          </div>

          <div className="space-y-5 text-base leading-relaxed text-mist sm:text-lg">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Link
            href="/blog"
            className="mt-12 inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-flame hover:underline"
          >
            <ArrowLeft size={16} aria-hidden />
            Voltar ao blog
          </Link>
        </div>
      </article>
    </>
  );
}
