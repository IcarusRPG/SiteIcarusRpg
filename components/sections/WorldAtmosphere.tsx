export default function WorldAtmosphere() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-icarus">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-black/35 p-6 shadow-gold backdrop-blur-md sm:p-10 lg:p-16">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-mystic/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative max-w-4xl">
            <p className="font-display text-xs uppercase tracking-[0.28em] md:text-sm md:tracking-[0.35em] text-mystic/85">Crônicas futuras</p>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-ember sm:text-4xl lg:text-5xl">
              Um mundo moldado por divindades, lendas e escolhas
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 md:text-base md:leading-8 text-parchment/75">
              Esta seção prepara o tom visual do site oficial: sombras profundas, metal antigo, brilho arcano e espaço para revelar gradualmente os mistérios de Icarus sem antecipar conteúdos definitivos de lore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
