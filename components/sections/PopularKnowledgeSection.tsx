import Image from "next/image";

type PopularKnowledgeStory = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
};

const stories: PopularKnowledgeStory[] = [
  {
    id: "conhecimento-popular-de-icarus",
    title: "Conhecimento Popular de Icarus",
    image:
      "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778098251/Conhecimento_Popular_de_Icarus_cs9y3n.png",
    imageAlt: "Conhecimento Popular de Icarus",
    paragraphs: [
      "Em Icarus, há um tecido intricado de conhecimentos que permeia os confins do continente. São narrativas entrelaçadas, histórias transmitidas de geração em geração, tecendo um manto de verdades percebidas e crenças arraigadas. Porém, a verdade é tão maleável quanto a imaginação que a tece.",
      "Estas informações, tais como as epopeias do divino, os feitos lendários dos heróis e as antigas profecias, são conhecidas por todos. São relatos sagrados, escrituras antigas e contos sussurrados nas tavernas, forjando a essência cultural de Icarus.",
      "Contudo, a veracidade desses relatos é tão enigmática quanto as próprias divindades que protagonizam tais mitos. Cada conto é uma teia de realidade e ficção, onde a linha que separa a verdade da fantasia é muitas vezes indistinta. Pois uma mentira repetida incessantemente pode se transformar em uma suposta verdade, moldando os alicerces do conhecimento comum.",
      "Assim, os habitantes de Icarus vivem em um mundo onde a sabedoria é um emaranhado de histórias e lendas que moldam suas crenças e compreensão do mundo. Cada fábula, cada mito, carrega consigo o peso da possibilidade e da incerteza, desafiando aqueles que buscam a verdade absoluta a navegar nas águas turvas da história e da fé.",
    ],
  },
  {
    id: "orin-aiuku",
    title: "Orin Àiukú",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778098610/Orin_%C3%80iuk%C3%BA_uvyah9.png",
    imageAlt: "Orin Àiukú",
    paragraphs: [
      "Nas escrituras antigas, é contado que, no princípio dos tempos, quando o vazio dominava tudo, a Divindade Primordial conhecida como Orun surgiu da vastidão.",
      "Com sua imensa energia, Orun criou o mundo de Icarus em sua forma bruta, uma terra selvagem e indomável, com montanhas que se erguiam até os céus, mares infinitos e furiosos, e florestas titânicas onde as copas das árvores gigantes bloqueavam a luz do sol, mergulhando o solo em sombras perenes.",
      "Para moldar esse caos em algo habitável, Orun criou os Baldurs, os primeiros seres divinos além dele. Os Baldurs foram incumbidos de decantar e transformar Icarus. Os mares agitados se acalmaram e se dividiram em rios serenos, lagos cristalinos, e enseadas pacíficas. As vastas florestas se dispersaram, dando origem a florestas menores, bosques tranquilos e planícies abertas. Das montanhas altíssimas, surgiram túneis profundos e cavernas secretas, moldando o mundo com equilíbrio e harmonia.",
      "Antes de povoar o mundo com seres vivos, Orun criou os Alfars, divindades cuja essência emanava do próprio Núcleo de Icarus, localizado no coração da terra. Juntos, Alfars, Baldurs e Orun deram vida às primeiras raças e criaturas que caminhariam em harmonia com a natureza.",
      "Uma vez que o trabalho de criação estava completo, Orun desapareceu. Alguns acreditam que ele morreu, outros que partiu para um plano superior, e há quem diga que ele nunca existiu de fato, sendo apenas uma lenda. No entanto, seu legado permanece nas terras, nos ventos e nas águas de Icarus.",
    ],
  },
  {
    id: "purificacao-divina",
    title: "A Purificação Divina",
    image:
      "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778098785/A_Purifica%C3%A7%C3%A3o_Divina_gwdnut.png",
    imageAlt: "A Purificação Divina",
    paragraphs: [
      "Segundo as antigas crenças, Orun, a primeira divindade, havia deixado para os Baldurs a tarefa monumental de decantar Icarus — um processo essencial para moldar o mundo bruto em um lugar habitável para as raças e criaturas que viriam a existir. Para cumprir tal missão, os Baldurs recorreram ao Opon Ifá, o único artefato divino criado por Orun. Esta tábua de adivinhação era uma ferramenta sagrada, capaz de guiar os deuses no equilíbrio do destino e da criação.",
      "Contudo, Odincia, nutrindo um desejo profundo de inveja por não ter sido a primeira ou única divindade criada por Orun, arquitetou uma trama sombria. Ela enganou Béllica e Nocturna, fazendo-as acreditar que os Baldurs haviam enfraquecido Orun, levando à sua misteriosa partida.",
      "A semente da discórdia, plantada por Odincia, floresceu em revolta nos corações de suas irmãs. Convencidas de que os Baldurs haviam traído seu criador, Nocturna, Odincia e Béllica passaram a influenciar sutilmente seus seguidores mais devotos — clérigos e paladinos — incitando-os a iniciar uma cruzada contra os Baldurs.",
      "A Cruzada Sagrada durou décadas, marcando as crônicas de Icarus como a primeira grande tragédia da humanidade. Os seguidores dos Baldurs foram massacrados nas sangrentas batalhas que varreram os campos de Icarus. O conflito se arrastou por mais de oitenta anos, encharcando o solo com o sangue dos devotos e deixando cicatrizes profundas na terra e nos corações.",
      "Entretanto, nem todos os Alfars apoiavam a carnificina. Justar, Logos e Amorina, recusaram-se a compactuar com a violência e buscaram uma solução para pôr fim ao caos. Eles sabiam que a sobrevivência de Icarus dependia da cooperação e da harmonia entre divindades e mortais, e, por isso, uniram-se aos Baldurs em uma tentativa de restaurar a paz.",
      "Juntos, forjaram o primeiro guerreiro divino, uma entidade nascida da fusão de energias divinas, um ser criado para transcender a guerra e restaurar o equilíbrio. Esse guerreiro possuía o poder de ambos os lados, não lutando pela glória individual, mas pela salvação de Icarus.",
      "Assim, a guerra finalmente chegou ao seu fim, e o evento ficou conhecido como \"A Purificação Divina\". Embora a paz tenha sido restaurada, as cicatrizes da guerra permaneceram. A cruzada deixou marcas indeléveis em Icarus, e as lendas desse tempo sombrio continuam a ser contadas em sussurros pelas gerações futuras, como um lembrete de que mesmo as divindades não estão imunes à inveja, ao ódio e à destruição.",
    ],
  },
];

export default function PopularKnowledgeSection() {
  return (
    <section className="bg-metal-radial pb-24 pt-32">
      <div className="container-icarus">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.35em] text-mystic/85">Histórias conhecidas por todos</p>
          <h1 className="mt-4 font-display text-4xl font-black text-ember sm:text-6xl">Conhecimento Popular</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-parchment/75">
            Relatos, crenças e mitos que circulam pelas tavernas, templos e estradas de Icarus — verdades possíveis que moldam a visão do povo.
          </p>
        </div>

        <nav className="sticky top-24 z-30 mx-auto mt-10 flex max-w-4xl flex-col gap-3 rounded-3xl border border-gold/20 bg-abyss/85 p-3 shadow-arcane backdrop-blur-xl sm:flex-row" aria-label="Navegação rápida das histórias">
          {stories.map((story, index) => (
            <a
              key={story.id}
              href={`#${story.id}`}
              className="flex-1 rounded-2xl border border-mystic/20 bg-mystic/5 px-4 py-3 text-center text-sm font-semibold text-parchment transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/10 hover:text-ember"
            >
              {index + 1} - {story.title}
            </a>
          ))}
        </nav>

        <div className="mt-14 space-y-14">
          {stories.map((story, index) => (
            <article
              key={story.id}
              id={story.id}
              className="scroll-mt-40 overflow-hidden rounded-[2rem] border border-mystic/20 bg-black/42 shadow-arcane backdrop-blur-md"
            >
              <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[22rem] border-b border-gold/20 bg-abyss/60 lg:border-b-0 lg:border-r">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 via-transparent to-transparent" />
                </div>

                <div className="relative p-7 sm:p-10">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-mystic/10 blur-3xl" />
                  <p className="font-display text-xs uppercase tracking-[0.35em] text-mystic/80">História {index + 1}</p>
                  <h2 className="mt-3 font-display text-3xl font-black text-ember sm:text-4xl">{story.title}</h2>
                  <div className="gold-divider my-6" />
                  <div className="space-y-5 text-base leading-8 text-parchment/80">
                    {story.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
