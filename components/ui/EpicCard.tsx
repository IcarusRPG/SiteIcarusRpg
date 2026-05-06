import Link from "next/link";

type EpicCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function EpicCard({ title, description, href, icon }: EpicCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-mystic/20 bg-obsidian/70 p-6 shadow-arcane backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-gold"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-mystic/10 via-transparent to-gold/10 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-black/30 text-2xl shadow-inner shadow-mystic/10">
          {icon}
        </div>
        <h3 className="font-display text-xl font-bold text-ember">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-parchment/72">{description}</p>
        <span className="mt-5 inline-flex text-sm font-semibold text-mystic transition group-hover:text-ember">
          Abrir pergaminho →
        </span>
      </div>
    </Link>
  );
}
