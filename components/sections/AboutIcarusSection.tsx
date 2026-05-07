import Image from "next/image";
import { aboutAuthorImageUrl } from "@/lib/navigation";

const paragraphs = [
  "Olá, viajante.",
  "Meu nome é Adam Calaça, e é com honra que te recebo neste domínio.",
  "Se seus olhos alcançaram estas palavras, não foi por acaso. Você atendeu ao chamado. Escolheu cruzar os portões de um mundo onde cada decisão carrega peso, onde cada passo ecoa além do presente… e onde histórias não são apenas contadas — são forjadas.",
  "Icarus não é apenas um cenário. É um legado em constante construção.",
  "Aqui, feitos heroicos, ou até mesmo aqueles marcados por falhas, dúvidas ou sombras, têm poder. Suas escolhas podem atravessar o tempo, moldar destinos e transformar-se em lendas sussurradas por gerações futuras. Cada ação sua deixa marcas. Cada jornada altera o curso da história.",
  "Minha caminhada no universo dos RPGs começou com 3D&T e D&D 5ª Edição. Mas foi ao encontrar Tormenta 20 que algo mudou: ali nasceu a centelha que daria origem a este mundo. Desde então, venho moldando Icarus, reunindo ideias, sistemas e narrativas, até que ele estivesse pronto para ser compartilhado com você.",
  "Minhas inspirações vêm de muitos lugares, tão intensas e variadas quanto as melodias que me acompanham. Ecos de Helloween, Shaman, Angra, Judas Priest, Dream Theater e Avantasia não apenas soam, eles vivem nas histórias, nos conflitos e nas almas que habitam este universo.",
  "Agora, este mundo também é seu.",
  "Permita que sua imaginação ultrapasse limites. Questione, crie, arrisque. Pois é da ousadia que nascem os caminhos não trilhados, e são esses caminhos que transformam aventureiros em lendas.",
  "Seja bem-vindo a Icarus.",
  "Aqui, seu destino não está escrito…\nele aguarda para ser conquistado.",
];

const thanks =
  "Aleff Moreira, Arthur Andrade, Arthur Endres, Carolyne Pimenta, Diogo Carrijo, Elder Henrique, Gabriel Portes, Hélio Calaça, Hélio Calaça Filho, Jhonata Leandro, Júlia Calaça, Lazaro Henrique, Lara Calaça, Leticia Macedo, Livia Lopes, Lucas André, Madu Dutra, Marcel Castro, Matheus May, Pedro Godoi, Pedro Rohan, Sthephane Godoi, Saul Richard, Suely Calaça.";

export default function AboutIcarusSection() {
  return (
    <section className="bg-metal-radial pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="container-icarus">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-gold/25 bg-black/40 shadow-gold backdrop-blur-md">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[18rem] md:min-h-[24rem] border-b border-gold/20 bg-abyss/60 lg:border-b-0 lg:border-r">
              <Image
                src={aboutAuthorImageUrl}
                alt="Adam Calaça, criador de Icarus RPG"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent" />
            </div>

            <article className="relative p-5 sm:p-8 lg:p-12">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-mystic/10 blur-3xl" />
              <p className="font-display text-xs uppercase tracking-[0.28em] md:text-sm md:tracking-[0.35em] text-mystic/85">Sobre Icarus</p>
              <h1 className="mt-3 font-display text-3xl font-black text-ember sm:text-4xl lg:text-5xl">Bem-vindo ao mundo de Icarus</h1>
              <div className="gold-divider my-8" />

              <div className="space-y-4 text-sm leading-7 md:space-y-5 md:text-base md:leading-8 text-parchment/82">
                {paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={`whitespace-pre-line ${index === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl md:first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-ember first-letter:drop-shadow-[0_0_12px_rgba(216,163,58,0.45)]" : ""}`}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <aside className="mt-8 rounded-3xl md:mt-10 border border-mystic/25 bg-mystic/5 p-6 shadow-arcane">
                <h2 className="text-center font-display text-2xl font-bold text-ember">~ Agradecimento ~</h2>
                <p className="mt-4 text-center text-sm leading-7 text-parchment/78">{thanks}</p>
              </aside>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
