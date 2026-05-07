import Link from "next/link";
import HeroCarousel from "@/components/sections/HeroCarousel";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-metal-radial pt-20 md:pt-28">
      <div className="absolute inset-0 -z-10 bg-rune-grid bg-[length:56px_56px] opacity-35 md:bg-[length:88px_88px] md:opacity-45" />
      <div className="absolute left-1/2 top-28 -z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-mystic/15 blur-3xl md:top-36 md:h-72 md:w-72" />
      <div className="container-icarus grid min-h-[calc(100vh-5rem)] items-center gap-8 py-10 md:min-h-[calc(100vh-7rem)] md:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-14">
        <HeroCarousel />

        <div className="mx-auto max-w-3xl text-center lg:text-left">
          <p className="mb-3 font-display text-[0.68rem] uppercase tracking-[0.28em] text-mystic/90 sm:text-xs md:mb-4 md:text-sm md:tracking-[0.45em]">Novo RPG de mesa Brasileiro</p>
          <h1 className="font-display text-3xl font-black leading-tight text-ember drop-shadow-[0_0_16px_rgba(216,163,58,0.18)] sm:text-5xl lg:text-6xl xl:text-7xl">
            Adentre os Mistérios de Icarus
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-parchment/78 sm:text-base md:mt-6 md:text-lg md:leading-8 lg:mx-0">
            Um mundo de deuses, guerras antigas, raças fantásticas e aventuras de mesa aguarda por escolhas capazes de alterar lendas.
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <Link href="/sobre-icarus" className="rounded-full border border-gold/50 bg-gold/15 px-6 py-3 text-center text-sm font-semibold text-ember shadow-gold transition hover:-translate-y-0.5 hover:bg-gold/25 md:px-7 md:text-base">
              Conheça o Mundo
            </Link>
            <Link href="/panteao" className="rounded-full border border-mystic/45 bg-mystic/10 px-6 py-3 text-center text-sm font-semibold text-mystic shadow-arcane transition hover:-translate-y-0.5 hover:bg-mystic/20 md:px-7 md:text-base">
              Explorar Panteão
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
