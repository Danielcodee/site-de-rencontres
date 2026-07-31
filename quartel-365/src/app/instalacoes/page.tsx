import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Instalações",
  description:
    "Conhece as instalações do Quartel 365 em Felgueiras, a serem preparadas para a abertura: tatami, zona de sparring e zona de treino funcional.",
  alternates: { canonical: "/instalacoes" },
};

const categories = ["Todas", "Tatami", "Sparring", "Treino Funcional", "Comunidade"] as const;

export default function InstalacoesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Instalações"
        title="Um espaço à altura do treino."
        description="Da receção ao tatami — cada zona do Quartel 365 está a ser preparada, pensada para o teu treino desde a abertura."
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel">
          <p className="mb-8 text-sm text-mist">
            Clica numa imagem para a ampliar. Categorias: {categories.slice(1).join(" · ")}.
          </p>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
