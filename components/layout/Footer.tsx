import Image from "next/image";
import Link from "next/link";
import { diceIconUrl, navigationItems } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-black/55">
      <div className="container-icarus py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">
          <div className="flex items-center gap-4">
            <Image
              src={diceIconUrl}
              alt="Ícone de dado azul"
              width={56}
              height={56}
              className="h-14 w-14 rounded-2xl border border-mystic/30 bg-mystic/5 p-1 shadow-arcane"
            />
            <div>
              <p className="font-display text-xl font-bold text-ember">Icarus RPG</p>
              <p className="text-sm text-parchment/70">Fantasia épica para mesas lendárias.</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3 md:justify-end" aria-label="Links do rodapé">
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
