import Link from "next/link";
import type { NavItem } from "@/lib/navigation";

type NavDropdownProps = {
  item: NavItem;
};

export default function NavDropdown({ item }: NavDropdownProps) {
  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-parchment/90 transition duration-300 hover:text-ember"
      >
        {item.label}
        <span className="text-mystic transition duration-300 group-hover:rotate-180">⌄</span>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 translate-y-2 rounded-2xl border border-gold/25 bg-abyss/95 p-2 opacity-0 shadow-gold backdrop-blur-xl transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="gold-divider mb-2" />
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block rounded-xl px-3 py-2 text-sm text-parchment/85 transition duration-300 hover:bg-mystic/10 hover:text-mystic"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
