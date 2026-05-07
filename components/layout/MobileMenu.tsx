"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationItems } from "@/lib/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl border border-mystic/30 bg-abyss/70 text-mystic shadow-arcane transition hover:border-gold/50 hover:text-ember"
        aria-expanded={isOpen}
        aria-label="Abrir menu de navegação"
      >
        <span className="relative h-5 w-5">
          <span className={`absolute left-0 top-1 h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`absolute left-0 top-2.5 h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </span>
      </button>

      <div
        className={`absolute left-3 right-3 top-[4.25rem] md:left-6 md:right-6 md:top-[4.75rem] overflow-hidden rounded-3xl border border-gold/20 bg-abyss/95 shadow-arcane backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "max-h-[calc(100vh-5.5rem)] overflow-y-auto opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="space-y-1 p-3 md:p-4">
          {navigationItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-3 py-2.5 text-sm md:px-4 md:py-3 font-semibold text-parchment transition hover:bg-mystic/10 hover:text-mystic"
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="ml-4 border-l border-gold/20 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-4 py-2 text-sm text-parchment/75 transition hover:bg-gold/10 hover:text-ember"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
