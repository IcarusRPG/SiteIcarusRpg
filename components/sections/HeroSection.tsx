import Link from "next/link";
import HeroCarousel from "@/components/sections/HeroCarousel";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-metal-radial pt-28">
      <div className="absolute inset-0 -z-10 bg-rune-grid bg-[length:88px_88px] opacity-45" />
      <div className="absolute left-1/2 top-36 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-mystic/15 blur-3xl" />
      <div className="container-icarus flex min-h-[calc(100vh-7rem)] items-center py-16">
        <div className="mx-auto max-w-5xl text-center">
          <HeroCarousel />
          <p className="mb-4 font-display text-sm uppercase tracking-[0.45em] text-mystic/90">Novo RPG de mesa Brasileiro</p>
          <h1 className="font-display text-4xl font-black text-ember drop-shadow-[0_0_16px_rgba(216,163,58,0.18)] sm:text-5xl lg:text-7xl">
            Adentre os Mistérios de Icarus
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-parchment/78 sm:text-lg">
            Um mundo de deuses, guerras antigas, raças fantásticas e aventuras de mesa aguarda por escolhas capazes de alterar lendas.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/sobre-icarus" className="rounded-full border border-gold/50 bg-gold/15 px-7 py-3 font-semibold text-ember shadow-gold transition hover:-translate-y-0.5 hover:bg-gold/25">
              Conheça o Mundo
            </Link>
            <Link href="/panteao" className="rounded-full border border-mystic/45 bg-mystic/10 px-7 py-3 font-semibold text-mystic shadow-arcane transition hover:-translate-y-0.5 hover:bg-mystic/20">
              Explorar Panteão
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
