import Image from "next/image";
import Link from "next/link";

const pantheonImageUrl =
  "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778101662/O_Pante%C3%A3o_t4m8at.png";

const pantheonParagraphs = [
  "No universo de Icarus, o Panteão é aberto a todas as criaturas, permitindo que personagens sejam devotos ou não, dependendo de suas classes. No entanto, para Paladinos, Clérigos e Druidas, a devoção a uma divindade é necessária.",
  "As Alfars influenciavam o mundo através do Núcleo, suas vozes sussurrando aos corações daqueles que acreditavam em suas virtudes, enquanto os Baldurs moldavam e vivenciavam suas próprias experiências em Icarus. Assim, o mundo florescia sob a presença dos Baldurs e a sutil, mas poderosa, influência dos Alfars, cada uma nutrindo e defendendo suas crenças e ideais.",
  "Não há obrigatoriedade na escolha da divindade, mas é importante considerar a complexidade e perigos associados a um personagem devoto de uma divindade diferente de sua raça. Por exemplo, um devoto de Draconara que não seja um Draconato pode enfrentar desafios se encontrar algum Draconato em sua jornada.",
  "A regra fundamental é a limitação de poderes e restrições que um personagem pode possuir:",
];

const powerRules = ["Devotos comuns: Um poder", "Paladinos: Dois poderes", "Clérigos: Todos os poderes"];

export default function PantheonSection() {
  return (
    <section className="bg-metal-radial pb-24 pt-32">
      <div className="container-icarus">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-mystic/85">Deuses em silêncio</p>
          <h1 className="mt-4 font-display text-4xl font-black text-ember sm:text-6xl">O Panteão</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-parchment/75">
            Um guia inicial sobre devoção, influência divina e as escolhas de fé que acompanham os aventureiros de Icarus.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[18rem_1fr]">
          <nav className="sticky top-24 z-30 flex flex-col gap-3 rounded-3xl border border-gold/20 bg-abyss/85 p-4 shadow-arcane backdrop-blur-xl" aria-label="Navegação do panteão">
            <p className="px-2 font-display text-xs uppercase tracking-[0.28em] text-mystic/80">Caminhos divinos</p>
            <Link
              href="/panteao/alfars"
              className="rounded-2xl border border-mystic/20 bg-mystic/5 px-4 py-4 text-left text-sm font-semibold text-parchment transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/10 hover:text-ember"
            >
              Alfars
            </Link>
            <Link
              href="/panteao/baldurs"
              className="rounded-2xl border border-mystic/20 bg-mystic/5 px-4 py-4 text-left text-sm font-semibold text-parchment transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/10 hover:text-ember"
            >
              Baldurs
            </Link>
          </nav>

          <article className="overflow-hidden rounded-[2rem] border border-mystic/20 bg-black/42 p-6 shadow-arcane backdrop-blur-md sm:p-8 lg:p-10">
            <h2 className="font-display text-3xl font-black text-ember sm:text-5xl">O Panteão</h2>
            <div className="gold-divider my-7" />

            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-gold/20 bg-abyss/60 shadow-gold">
              <Image
                src={pantheonImageUrl}
                alt="O Panteão de Icarus"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/55 via-transparent to-transparent" />
            </div>

            <div className="mt-8 space-y-5 text-base leading-8 text-parchment/80">
              {pantheonParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="space-y-3 rounded-3xl border border-gold/20 bg-gold/5 p-5 text-parchment/85">
                {powerRules.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-mystic shadow-arcane" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
              <p>
                Existe uma distinção importante quando se trata da fé de um druida. Caso o druida for devoto de Floressa, a Deusa da Vida Selvagem, ele seguirá as mesmas regras de poderes de um clérigo.
              </p>
              <p>
                Por outro lado, caso o druida seja devoto de outra divindade, ele deverá adotar a mecânica de um paladino.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
