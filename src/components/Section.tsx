import type { ReactNode } from 'react';

export default function Section({
  id, kicker, title, intro, children,
}: { id: string; kicker: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-night-line py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-1.5 font-mono text-sm text-mint">{kicker}</p>
        <h2 className="mb-2 text-3xl font-bold tracking-tight">{title}</h2>
        {intro && <p className="mb-8 max-w-2xl text-ink-muted">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
