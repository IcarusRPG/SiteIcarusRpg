"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Alfar = {
  name: string;
  image: string;
  description: string[];
};

const alfars: Alfar[] = [
  {
    name: "Alétris",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074578/Al%C3%A9tris_ag8we6.png",
    description: [
      "Alétris rege o imprevisível, o incerto e a transformação. Seu domínio está tanto no tudo quanto no absoluto nada, tecendo o destino em uma dança que abraça o sim, o não e o talvez. Representando a transição entre forças opostas, Alétris é a manifestação viva das estações e ciclos naturais.",
      "Durante o outono e o inverno, Alétris assume uma forma feminina, expressando introspecção e quietude. Na primavera e no verão, revela-se em forma masculina, irradiando energia e renovação. Em raros momentos de harmonia entre o caos e a ordem, surge em ambas as formas ao mesmo tempo, pintando o arco-íris nos céus como um lembrete de sua dualidade eterna.",
      "Aqueles que nascem com dois espíritos em um único corpo, ou cujas mentes transitam entre diferentes consciências, são considerados abençoados por Alétris. Essas pessoas são frequentemente levadas aos templos sagrados dedicados ao Guardião do Imprevisível, onde são instruídas pelos clérigos a se conectarem com sua essência divina.",
      "Dogmas e Restrições. Devotos de Alétris devem se adaptar ao fluxo natural das transformações. Assim, não podem se apegar a objetos, hábitos ou relações que já cumpriram seu propósito. Sempre que se depararem com sinais claros de mudança, devem aceitar e seguir adiante, mesmo que isso signifique abandonar algo valioso ou confortável.",
      "A imprevisibilidade é uma virtude para aqueles que seguem Alétris. Devotos devem abraçar desafios inesperados e aceitar oportunidades imprevisíveis, mesmo quando assustadoras ou desconfortáveis.",
      "Alétris ensina que todas as formas de vida, expressão e individualidade possuem um papel no grande tecido do mundo. Por isso, seus devotos são proibidos de praticar qualquer tipo de preconceito, intolerância ou exclusão. Devem acolher e respeitar as diferenças com genuína curiosidade e compaixão, jamais julgando ou silenciando a essência do outro.",
    ],
  },
  {
    name: "Amorina",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074582/Amorina_fjnifs.png",
    description: [
      "Amorina é a manifestação da bondade em sua forma mais pura e sincera. Embora considerada uma das divindades mais antigas, sua forma eterna é a de uma criança alegre, pois acredita-se que o verdadeiro poder do mundo reside na inocência de sorrir e brincar mesmo em meio ao caos. Seu riso é um bálsamo para almas aflitas, e sua presença transforma o sofrimento em esperança.",
      "Dizem que o som de gargalhadas infantis, uma brincadeira sincera e o brilho do sorriso de uma criança são manifestações diretas de Amorina, espalhando sua energia curativa pelo mundo. Seus seguidores a descrevem como etérea e encantadora, com cabelos que parecem feitos de pétalas de flores e olhos radiantes como o nascer do sol.",
      "Amorina está profundamente conectada ao núcleo do mundo de Icarus, como uma força estabilizadora de bondade e esperança. Durante a Purificação Divina, acredita-se que sua energia protegeu as crianças, permitindo que o ciclo da vida continuasse mesmo em tempos sombrios.",
      "Amorina é particularmente adorada por curandeiros, parteiras e mulheres grávidas. Seus templos são centros de amparo e renovação, frequentemente servindo como orfanatos onde crianças sem famílias recebem amor e cuidado. Nessas casas sagradas, é dito que ninguém chora por muito tempo, pois o toque da Alfar está sempre presente para aliviar as dores.",
      "Dogmas e Restrições. Devotos de Amorina devem proteger e zelar pelas crianças, consideradas manifestações puras da esperança no mundo. Sempre que uma criança estiver em risco ou pedir ajuda, o devoto é obrigado a intervir, colocando seu bem-estar como prioridade mesmo diante de outros deveres.",
      "A compaixão é a flor que guia o coração dos seguidores de Amorina. Por isso, devem estar abertos a acolher o sofrimento alheio e oferecer empatia a todos, inclusive aos seus inimigos. Negar abrigo emocional ou se recusar a ouvir quem sofre vai contra os ensinamentos da Alfar.",
      "Cuidar é um ato sagrado. Os devotos de Amorina devem oferecer ajuda e conforto físico, emocional ou espiritual sempre que possível. Seja tratando ferimentos, oferecendo uma palavra gentil ou apenas estando presente, o devoto não pode ignorar o sofrimento de outro ser, independentemente de sua raça, credo ou passado.",
    ],
  },
  {
    name: "Béllica",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074592/B%C3%A9llica_qrcqvy.png",
    description: [
      "Béllica personifica o conflito, a espada e o escudo, sendo uma das divindades mais temidas e reverenciadas em Icarus. Ela é considerada a origem de todas as armas e armaduras, moldadas de seu próprio sangue e forjadas através da força de suas mãos contra o núcleo de Icarus.",
      "Embora originalmente descrita como uma divindade neutra, a influência de Odincia fez com que Béllica se tornasse implacável, particularmente contra os seguidores dos Baldurs, contra quem mantém um ódio profundo. Ela é também considerada a dona dos caminhos — os trilhos que precedem as grandes marchas e guerras. Acredita-se que cada gota de sangue derramada no solo seja reivindicada por ela, já que, ao criar as armas e armaduras, ela sacrificou seu próprio sangue.",
      "Os devotos de Béllica são guerreiros valentes, estrategistas e forjadores de armas, todos profundamente imbuídos de um senso de dever e honra. Eles buscam supremacia no combate, usando as armas forjadas em honra a Béllica como uma extensão de sua própria força. Alguns devotos também se tornam mensageiros, guiando os destinos das batalhas e das guerras com o poder da transformação.",
    ],
  },
  {
    name: "Ethéria",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074587/Etheria_w00vl3.png",
    description: [
      "Etheria é venerada como a Alfar da Essência Mágica e da Mana. Segundo as escrituras ancestrais, ela é creditada por ter dividido a mana em dois novos aspectos: o divino e o arcano, dando origem às primeiras magias que moldariam o destino das civilizações de Icarus. Sua essência está presente em todas as fontes de poder mágico, tornando-a uma divindade central na vida dos magos e estudiosos da magia.",
      "Etheria é conhecida por sua neutralidade implacável. Ela não interfere nos aspectos morais ou éticos do uso da magia. Para ela, a magia e a mana são ferramentas universais que pertencem a todos, e sua essência é tão pura e poderosa que não deve ser restrita a julgamento humano.",
      "Sua criação, a mana, não tem lado; ela é apenas o meio através do qual o destino é manipulado, e é o uso que os mortais fazem dessa energia que define seu impacto. Etheria crê que a responsabilidade do uso da magia recai sobre quem a utiliza. Para ela, o equilíbrio entre o bem e o mal é uma construção dos próprios seres que manuseiam a mana.",
      "Ela é representada como uma figura serena, com cabelos que fluem como rios de energia, cercada por véus cintilantes de pura mana.",
    ],
  },
  {
    name: "Floressa",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074605/Floressa_knbaa9.png",
    description: [
      "Floressa é a Protetora da Natureza, personificando a essência pura e a harmonia natural do mundo. Reverenciada por seu carinho pelos seres vivos, tanto pelas plantas mais simples quanto pelas feras selvagens, ela é o símbolo da verdadeira bondade na existência. Para Floressa, a natureza é uma manifestação sagrada que merece respeito e proteção.",
      "Ela acredita profundamente na inocência dos animais selvagens, que caçam apenas por necessidade, e vê as plantas como seres de sabedoria e cura, essenciais à vida. A Alfar é a guardiã do equilíbrio natural, cujos domínios incluem as florestas, os campos verdes e todos os elementos da vida selvagem. Sua energia flui por toda a vegetação, trazendo saúde e harmonia a todos os seres vivos.",
      "Floressa também é associada aos curandeiros, que buscam suas bênçãos para aprender os segredos das plantas e da cura. Ela emana uma aura de tranquilidade, promovendo a paz através da relação íntima entre os seres vivos e o mundo natural. Aqueles que buscam a cura, proteção ou sabedoria sobre os ciclos naturais se voltam para ela, sabendo que a harmonia entre todas as coisas é fundamental para a prosperidade.",
      "Ao mesmo tempo, ela despreza a crueldade de seres que destroem a natureza por ganância, considerando-os profanadores do ciclo sagrado da vida. Floressa é implacável contra aqueles que desrespeitam os seres vivos e suas interações com o mundo, e, com sua intervenção, pode restaurar o equilíbrio de regiões corrompidas por tais ações.",
    ],
  },
  {
    name: "Justar",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074601/Justar_b7v0n3.png",
    description: [
      "Justar, o Alfar do Equilíbrio e da Ordem, é venerado como a personificação da imparcialidade e da justiça inabalável. Sua figura irradia uma beleza serena e poderosa, com olhos que parecem refletir todas as balanças do mundo, revelando a simetria perfeita entre o bem e o mal, o caos e a harmonia.",
      "Ele empunha um machado de duas mãos, forjado a partir do núcleo flamejante de Icarus. Este machado não apenas corta, mas também incinera tudo o que ameaça o equilíbrio do mundo, representando sua dedicação em erradicar a injustiça e os excessos.",
      "Dizem que foi Justar quem aqueceu o núcleo de Icarus com seu poder, permitindo que Béllica moldasse as primeiras armas e armaduras, fundando a conexão entre justiça e força. Sua presença não busca controle, mas sim estabilidade; não para governar, mas para guiar.",
      "Os devotos de Justar são conhecidos como Guardadores do Equilíbrio. São mediadores, legisladores e pacificadores que buscam corrigir desigualdades sem parcialidade. Para eles, cada ação deve manter a balança universal em equilíbrio, sendo sua missão promover a igualdade em sociedades marcadas por conflitos.",
      "Embora não sejam numerosos, são respeitados pela sabedoria, paciência e dedicação à ordem. O machado flamejante é o principal símbolo de Justar, representando sua autoridade e julgamento implacável. Seus santuários geralmente são localizados em pedreiras, montanhas e cavernas – lugares de estabilidade e força natural, onde os devotos podem meditar.",
    ],
  },
  {
    name: "Logos",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074611/Logos_hiu39a.png",
    description: [
      "Logos, a Divindade do Conhecimento, é a manifestação viva da sabedoria, da vida e da justiça divina. Foi o primeiro Alfar criado por Orun e, com sua centelha divina, moldou as primeiras raças de Icarus, unindo os elementos do fogo, água, terra e ar em perfeita harmonia.",
      "Seu corpo é coberto por palha, com cada palha simbolizando uma vida criada. Diz-se que em cada uma delas está escrito o nome de um ser vivo, um lembrete da conexão eterna entre Logos e suas criações. Por onde passa, Logos deixa um rastro de lama seca, a fusão perfeita dos elementos essenciais da existência.",
      "Ele carrega o \"Orin Àiukú\" (\"Cântico da Eternidade\"), um livro divino criado a partir de suas palhas. Esse artefato contém o conhecimento mais profundo do universo, inscrito em uma linguagem sagrada que só pode ser lida por aqueles que atingiram um estado elevado de sabedoria e propósito.",
    ],
  },
  {
    name: "Nocturna",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074615/Nocturna_urzneh.png",
    description: [
      "Nocturna é o véu que cobre os horrores do desconhecido, a presença que se esconde nos cantos mais escuros da alma e do mundo. Sua figura é uma silhueta indistinta, envolta em sombras vivas que se contorcem como serpentes famintas, exalando um ar de desespero e reverência. Essas sombras não apenas a ocultam, mas sussurram segredos macabros e histórias esquecidas, uma sinfonia de murmúrios que gela até os ossos.",
      "Seus olhos brilham como brasas em um abismo sem fim, irradiando uma luz sombria que penetra as profundezas da mente e expõe os medos mais íntimos. Dizem que quem encara seus olhos vê reflexos de sua própria mortalidade e é consumido por visões de verdades que não deveriam ser reveladas.",
      "Ela veste um manto de escuridão pura, tecido costurado pelos lamentos de almas perdidas e adornado com marcas de sangue seco, um testemunho de sua soberania sobre a vida e a morte.",
      "Nocturna é considerada a dona dos conhecimentos antigos, guardiã dos segredos há muito perdidos, senhora dos mortos-vivos. Ela é a sombra que abraça os mistérios que transcendem a compreensão humana, tomando para si as verdades que poderiam destruir mentes frágeis.",
    ],
  },
  {
    name: "Odíncia",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074619/Od%C3%ADncia_urgaum.png",
    description: [
      "Odincia é uma divindade de essência ardente, que personifica o rancor e a busca implacável por retaliação. Sua figura é cercada de luxúria pelo sofrimento alheio e pela manipulação das fraquezas humanas. Frequentemente retratada com longos cabelos negros e um olhar penetrante que reflete um ego desmedido, Odincia é uma deusa que exige adoração, mas também se alimenta da subordinação dos outros.",
      "Além disso, foi Odincia quem forjou, no núcleo de Icarus, as fraquezas e os piores sentimentos dos seres vivos. A ira, o ciúmes, a inveja, a sede de vingança, e todos os sentimentos mais corrosivos e destrutivos foram sua criação, e ela continua a se alimentar de tais emoções para aumentar seu poder.",
      "Dizem que foi Odincia quem iniciou a Purificação Divina, convencendo Béllica e Nocturna a se unirem à sua causa. A revolta de Odincia surgiu do fato de não ter sido a primeira divindade a ser criada, o que a fez sentir que sua importância havia sido desconsiderada, o que gerou um ressentimento profundo.",
    ],
  },
  {
    name: "Sólem",
    image: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074624/S%C3%B3lem_x2fjur.png",
    description: [
      "Sólem, o Deus-Sol, é a personificação da luz divina, o princípio da criação e da proteção eterna. Sua aparência é imponente e radiante, com cabelos dourados que flamejam como o sol ao amanhecer. Seus olhos, profundos e intensos, são como duas fontes de luz pura, capazes de penetrar nas sombras e iluminar até o mais profundo dos corações.",
      "Sólem é reverenciado como o pilar da proteção e da justiça. De acordo com as escrituras antigas, após o fim da Purificação Divina, ele foi essencial para o fortalecimento da barreira do núcleo de Icarus, garantindo que nenhum Alfar tivesse influência sobre seus devotos, como aconteceu durante a primeira guerra santa. Ele é considerado o defensor das causas justas e do bem-estar de todos que buscam por redenção, bondade e luz em seus corações. Seu compromisso com a verdade e a justiça transcende qualquer forma de domínio ou poder.",
      "Em sua essência, o Alfar é a antítese do desespero e da escuridão. Onde houver caos, ele traz clareza; onde houver desespero, ele traz esperança. Seu objetivo é fornecer uma base sólida e inabalável para que seus seguidores possam viver em paz, protegidos da corrupção do mundo exterior. Ele é o defensor imbatível da vida e da verdade, sendo aquele que ilumina o caminho para aqueles que buscam sua orientação, levando-os a uma existência plena e justa.",
    ],
  },
];

export default function AlfarsSection() {
  const [selectedName, setSelectedName] = useState(alfars[0].name);
  const selectedAlfar = useMemo(
    () => alfars.find((alfar) => alfar.name === selectedName) ?? alfars[0],
    [selectedName],
  );

  return (
    <section className="bg-metal-radial pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="container-icarus">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.28em] md:text-sm md:tracking-[0.35em] text-mystic/85">Panteão de Icarus</p>
          <h1 className="mt-4 font-display text-2xl font-black text-ember sm:text-4xl lg:text-5xl lg:text-6xl">Alfars</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-parchment/75 md:text-base md:leading-8">
            Forças primordiais, vozes do Núcleo e divindades que ecoam através de virtudes, conflitos e escolhas eternas.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 md:mt-14 lg:grid-cols-[16rem_1fr] xl:grid-cols-[18rem_1fr] xl:gap-8">
          <nav className="z-30 flex max-h-none flex-col gap-2 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto rounded-3xl border border-gold/20 bg-abyss/85 p-3 shadow-arcane md:p-4 backdrop-blur-xl" aria-label="Lista de Alfars">
            <p className="px-2 pb-1 font-display text-xs uppercase tracking-[0.28em] text-mystic/80">Escolha um Alfar</p>
            {alfars.map((alfar) => {
              const isSelected = alfar.name === selectedAlfar.name;

              return (
                <button
                  key={alfar.name}
                  type="button"
                  onClick={() => setSelectedName(alfar.name)}
                  className={`rounded-2xl border px-3 py-2.5 text-left text-sm md:px-4 md:py-3 font-semibold transition duration-300 ${
                    isSelected
                      ? "border-gold/55 bg-gold/15 text-ember shadow-gold"
                      : "border-mystic/20 bg-mystic/5 text-parchment hover:-translate-y-0.5 hover:border-gold/45 hover:bg-gold/10 hover:text-ember"
                  }`}
                  aria-pressed={isSelected}
                >
                  {alfar.name}
                </button>
              );
            })}
          </nav>

          <div className="space-y-6 md:space-y-8">
            <article className="rounded-[2rem] border border-mystic/20 bg-black/42 p-5 shadow-arcane backdrop-blur-md sm:p-8 lg:p-10">
              <h2 className="font-display text-2xl font-black text-ember sm:text-4xl lg:text-5xl">As forças primordiais</h2>
              <div className="gold-divider my-5 md:my-7" />
              <div className="space-y-5 text-sm leading-7 text-parchment/80 md:text-base md:leading-8">
                <p>
                  Os Alfars são as forças primordiais que moldaram Icarus a partir do vazio. Nascidos da centelha de Orun, caminharam sobre o nada e o transformaram em vida, propósito e destino. Logos deu forma às raças com os próprios elementos, selando o início de tudo.
                </p>
                <p>
                  Mas onde há criação, há conflito — e sua divisão marcou o mundo com a Purificação Divina, um eco eterno das escolhas feitas pelos próprios deuses.
                </p>
              </div>
            </article>

            <article key={selectedAlfar.name} className="animate-alfar-reveal overflow-hidden rounded-[2rem] border border-gold/25 bg-black/45 p-5 shadow-gold backdrop-blur-md sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 md:gap-8 xl:grid xl:grid-cols-[0.85fr_1.15fr] xl:items-start">
                <div className="relative aspect-[4/5] max-h-[38rem] overflow-hidden rounded-[1.75rem] border border-mystic/25 bg-abyss/70 shadow-arcane">
                  <Image
                    src={selectedAlfar.image}
                    alt={selectedAlfar.name}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 420px"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/65 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 rounded-2xl border border-gold/20 bg-black/55 px-4 py-3 md:px-5 md:py-4 backdrop-blur-md">
                    <p className="font-display text-2xl font-black text-ember md:text-3xl">{selectedAlfar.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.28em] text-mystic/80">Alfar de Icarus</p>
                  </div>
                </div>

                <div>
                  <p className="font-display text-xs uppercase tracking-[0.28em] md:text-sm md:tracking-[0.35em] text-mystic/85">Arquivo divino</p>
                  <h2 className="mt-3 font-display text-3xl font-black text-ember sm:text-4xl lg:text-5xl">{selectedAlfar.name}</h2>
                  <div className="gold-divider my-5 md:my-7" />
                  <div className="space-y-4 text-sm leading-7 text-parchment/82 md:space-y-5 md:text-base md:leading-8">
                    {selectedAlfar.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
