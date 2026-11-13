const links = [
  ['#journey', 'Journey'],
  ['#projects', 'Projects'],
  ['#experience', 'Experience'],
  ['#certs', 'Certifications'],
  ['#contact', 'Contact'],
];

export default function SiteHeader() {
  return (
    <nav className="sticky top-0 z-10 border-b border-night-line bg-night/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono font-bold text-ink">
          durgesh<span className="text-mint">@</span>chourey:~$
        </a>
        <ul className="hidden gap-6 text-sm sm:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-ink-muted transition hover:text-ink">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
