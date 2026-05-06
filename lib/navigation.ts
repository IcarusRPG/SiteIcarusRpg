export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigationItems: NavItem[] = [
  { label: "Página Principal", href: "/" },
  { label: "Sobre Icarus", href: "/sobre-icarus" },
  {
    label: "O Panteão",
    href: "/panteao",
    children: [
      { label: "Alfars", href: "/panteao/alfars" },
      { label: "Baldurs", href: "/panteao/baldurs" },
    ],
  },
  { label: "Raças", href: "/racas" },
  { label: "Classes", href: "/classes" },
  { label: "Mapa Interativo", href: "/mapa-interativo" },
  { label: "Entre em Contato", href: "/contato" },
];

export const logoUrl =
  "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074490/Logo_Verde_g9rebf.png";

export const diceIconUrl =
  "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778074009/Dado_Azul_500x500_sntzyc.png";

export const aboutAuthorImageUrl =
  "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778094538/Adam_Cala%C3%A7a_-_Icarus_Mestre_zdga13.png";

export const carouselImages = [
  {
    src: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778095590/Carrossel_01_na1vlv.png",
    alt: "Arte atmosférica de Icarus RPG para o carrossel principal",
  },
  {
    src: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778095592/Carrossel_02_dipq9e.png",
    alt: "Cena fantástica de Icarus RPG para o carrossel principal",
  },
  {
    src: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778095799/Carrossel_03_enkg2y.png",
    alt: "Imagem épica de aventura de Icarus RPG",
  },
  {
    src: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778096151/Carrossel_04_qvnhqw.png",
    alt: "Paisagem mística de Icarus RPG",
  },
  {
    src: "https://res.cloudinary.com/dk6okgt0a/image/upload/v1778096152/Carrossel_05_f5hpo8.png",
    alt: "Arte de fantasia medieval de Icarus RPG",
  },
];
