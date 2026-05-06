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
