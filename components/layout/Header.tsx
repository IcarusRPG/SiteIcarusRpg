import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu";
import NavDropdown from "@/components/ui/NavDropdown";
import { logoUrl, navigationItems } from "@/lib/navigation";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-abyss/75 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="container-icarus flex h-16 items-center justify-between gap-3 md:h-20">
        <Link href="/" className="group flex items-center gap-3" aria-label="Voltar para a página principal de Icarus RPG">
          <Image
            src={logoUrl}
            alt="Logo Icarus RPG"
            width={320}
            height={120}
            priority
            className="h-10 w-auto max-w-[8rem] object-contain drop-shadow-[0_0_12px_rgba(16,216,207,0.25)] transition duration-300 group-hover:scale-105 md:h-12 md:max-w-[9.5rem]"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex 2xl:gap-1" aria-label="Menu principal">
          {navigationItems.map((item) =>
            item.children ? (
              <NavDropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-2.5 py-2 text-xs font-medium 2xl:px-3 2xl:text-sm text-parchment/90 transition duration-300 hover:bg-mystic/10 hover:text-ember"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <MobileMenu />
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-mystic/55 to-transparent" />
    </header>
  );
}
