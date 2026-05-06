import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { diceIconUrl } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Icarus RPG | Fantasia Épica de Mesa",
  description:
    "Site oficial de Icarus RPG, um universo de fantasia épica para aventuras de RPG de mesa.",
  icons: {
    icon: diceIconUrl,
    shortcut: diceIconUrl,
    apple: diceIconUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
