// VISTA · Barra de navegación superior (fija).
const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#vision", label: "Visión IA" },
  { href: "#automatizacion", label: "Automatización" },
  { href: "#dashboards", label: "Dashboards" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0b1020]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="text-xl font-extrabold tracking-tight">
          YF<span className="text-brand">.</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-lg bg-brand px-4 py-2 font-semibold text-white transition hover:bg-[#5a79f0]"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
