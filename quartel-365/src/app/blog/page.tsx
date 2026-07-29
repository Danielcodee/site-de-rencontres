import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre Muay Thai, Treino Funcional e nutrição, escritos pelos treinadores do Quartel 365.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notas dos treinadores."
        description="Técnica, nutrição e histórias de quem treina no Quartel 365 — escrito por quem ensina todos os dias."
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <Link href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-sm border border-line bg-charcoal">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-gold">
                    {formatDate(post.date)} · {post.author}
                  </p>
                  <h2 className="mt-3 font-heading text-xl leading-snug text-bone group-hover:text-gold">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
