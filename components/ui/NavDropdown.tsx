import Link from "next/link";
import type { NavItem } from "@/lib/navigation";

type NavDropdownProps = {
  item: NavItem;
};

const childDescriptions: Record<string, string> = {
  "/panteao/alfars": "Divindades ligadas ao Núcleo e às forças vivas de Icarus.",
  "/panteao/baldurs": "Primeiros deuses moldadores do mundo bruto criado por Orun.",
};

export default function NavDropdown({ item }: NavDropdownProps) {
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-parchment/90 transition duration-300 hover:bg-mystic/10 hover:text-ember"
      >
        {item.label}
        <span className="text-mystic transition duration-300 group-hover:rotate-180">⌄</span>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 translate-y-2 rounded-3xl border border-gold/25 bg-abyss/95 p-3 opacity-0 shadow-gold backdrop-blur-xl transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-2xl border border-mystic/20 bg-mystic/5 p-3">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-mystic/80">Arquivo divino</p>
          <Link href={item.href} className="mt-2 block font-display text-lg font-bold text-ember transition hover:text-mystic">
            Visão geral do Panteão
          </Link>
        </div>

        <div className="gold-divider my-3" />

        <div className="space-y-2">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="group/item block rounded-2xl border border-transparent px-3 py-3 transition duration-300 hover:border-gold/25 hover:bg-mystic/10"
            >
              <span className="flex items-center justify-between gap-3 font-semibold text-parchment transition group-hover/item:text-ember">
                {child.label}
                <span className="text-mystic transition group-hover/item:translate-x-1">→</span>
              </span>
              <span className="mt-1 block text-xs leading-5 text-parchment/60">{childDescriptions[child.href]}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
