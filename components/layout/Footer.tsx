import Image from "next/image";
import Link from "next/link";
import { diceIconUrl, navigationItems } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black/55">
      <div className="container-icarus py-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center md:gap-8">
          <div className="flex items-center justify-center gap-3 text-center md:justify-start md:gap-4 md:text-left">
            <Image
              src={diceIconUrl}
              alt="Ícone de dado azul"
              width={56}
              height={56}
              className="h-12 w-12 md:h-14 md:w-14 rounded-2xl border border-mystic/30 bg-mystic/5 p-1 shadow-arcane"
            />
            <div>
              <p className="font-display text-lg font-bold md:text-xl text-ember">Icarus RPG</p>
              <p className="text-sm text-parchment/70">Novo RPG de mesa Brasileiro</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-3 md:justify-end" aria-label="Links do rodapé">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-parchment/70 transition hover:text-mystic">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="gold-divider my-8" />
        <p className="text-center text-xs text-parchment/55">
          © 2026 Icarus RPG. Todos os direitos reservados em crônicas ainda não escritas.
        </p>
      </div>
    </footer>
  );
}
