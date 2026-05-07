type PlaceholderPageProps = {
  title: string;
  eyebrow?: string;
};

export default function PlaceholderPage({ title, eyebrow = "Arquivo em construção" }: PlaceholderPageProps) {
  return (
    <section className="min-h-[72vh] bg-metal-radial pb-20 pt-36">
      <div className="container-icarus">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-mystic/20 bg-black/40 p-8 text-center shadow-arcane backdrop-blur-md sm:p-12">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-mystic/85">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-black text-ember sm:text-6xl">{title}</h1>
          <div className="gold-divider my-8" />
          <p className="mx-auto max-w-2xl text-base leading-8 text-parchment/75">
            Página reservada para conteúdo futuro do universo de Icarus RPG. A estrutura visual e a rota já estão prontas para receber textos, imagens e interações definitivas.
          </p>
        </div>
      </div>
    </section>
  );
}
