import EpicCard from "@/components/ui/EpicCard";

const cards = [
  { title: "Sobre Icarus", href: "/sobre-icarus", icon: "✦", description: "Um portal inicial para conhecer a proposta do cenário e seu tom heroico." },
  { title: "Panteão", href: "/panteao", icon: "☉", description: "Divindades, presságios e forças ancestrais aguardam futuras crônicas." },
  { title: "Raças", href: "/racas", icon: "◆", description: "Espaço reservado para povos fantásticos, linhagens e culturas jogáveis." },
  { title: "Classes", href: "/classes", icon: "⚔", description: "Arquétipos de aventureiros preparados para crescer em novas expansões." },
  { title: "Mapa Interativo", href: "/mapa-interativo", icon: "⌖", description: "Uma base para explorar continentes, ruínas e territórios de Icarus." },
];

export default function HomeIntroCards() {
  return (
    <section className="py-20">
      <div className="container-icarus">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-mystic">Primeiros portais</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ember sm:text-4xl">Explore os pilares do universo</h2>
          <p className="mt-4 text-parchment/70">Cards iniciais com conteúdo placeholder para manter a arquitetura pronta para a lore definitiva.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => (
            <EpicCard key={card.href} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
