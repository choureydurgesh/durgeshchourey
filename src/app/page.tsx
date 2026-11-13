import Section from '@/components/Section';
import StatusBadge from '@/components/StatusBadge';
import { certs, experience, pipeline, profile, projects, skills, stages } from '@/content/profile';

const btn = 'inline-block rounded-xl border px-5 py-2.5 text-[15px] font-semibold transition hover:brightness-110';
const btnPrimary = `${btn} border-mint bg-mint text-mint-dark`;
const btnGhost = `${btn} border-night-line bg-night-panel text-ink`;
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-24">
        <p className="mb-5 font-mono text-sm text-mint">
          $ whoami <span className="text-ink-muted">// software engineer → devops &amp; devsecops</span>
        </p>
        <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
          Hi, I&apos;m Durgesh.
          <br />
          I&apos;m building{' '}
          <span className="bg-gradient-to-r from-mint to-sky bg-clip-text text-transparent">secure delivery pipelines</span>{' '}
          on Azure &amp; AWS.
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-ink-muted">
          After 10+ years of engineering embedded software for companies like Canon, Philips and Kverneland, I&apos;m
          moving into DevOps and DevSecOps: automating how software is built, tested, secured and shipped. I&apos;m
          learning in public, and this site is part of the journey.
        </p>
        <div className="mb-9 flex flex-wrap gap-2.5">
          {[`📍 ${profile.location}`, '🇳🇱 Dutch citizen, no sponsorship needed', '☁️ Azure · AWS · Terraform · Kubernetes'].map((c) => (
            <span key={c} className="rounded-full border border-night-line bg-night-panel px-3 py-1 text-sm text-ink-muted">{c}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a className={btnPrimary} href={profile.linkedin} {...ext}>Connect on LinkedIn</a>
          <a className={btnGhost} href={profile.github} {...ext}>GitHub</a>
          <a className={btnGhost} href="#journey">See my roadmap ↓</a>
        </div>
      </header>

      {/* Journey */}
      <Section
        id="journey"
        kicker="// 01 · the journey"
        title="From embedded C++ to DevSecOps in 12 months"
        intro="DevSecOps means building security into every step of software delivery. Here's the flow I'm learning to automate, and the roadmap I'm following (Nov 2026 to Nov 2027)."
      >
        <div className="mb-2 flex flex-wrap items-center gap-2 font-mono text-[13px]">
          {pipeline.map((step, i) => (
            <span key={step.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-ink-muted">→</span>}
              <span className={`rounded-lg border px-2.5 py-1.5 ${step.security ? 'border-mint/50 text-mint' : 'border-night-line bg-night-panel'}`}>
                {step.label}
              </span>
            </span>
          ))}
        </div>
        <p className="mb-7 text-xs text-ink-muted">Green steps are the security checks.</p>
        <div className="grid gap-3">
          {stages.map((s) => (
            <div key={s.title} className="grid gap-1.5 rounded-2xl border border-night-line bg-night-panel p-5 sm:grid-cols-[130px_1fr_auto] sm:gap-5">
              <div className="pt-0.5 font-mono text-sm text-ink-muted">{s.when}</div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-[15px] text-ink-muted">{s.text}</p>
              </div>
              <div><StatusBadge status={s.status} /></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        kicker="// 02 · projects"
        title="What I'm building"
        intro="Every DevOps project is public on GitHub with an architecture diagram, a write-up and teardown instructions. New ones appear here as they ship."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-night-line bg-night-panel p-6">
              <h3 className="mb-1.5 font-semibold">{p.title}</h3>
              <p className="mb-4 flex-1 text-[15px] text-ink-muted">{p.text}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-sky/20 bg-sky/10 px-2 py-0.5 font-mono text-xs text-sky">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-2 text-sm">
                {p.status && <span className="font-mono text-ink-muted">{p.status}</span>}
                {p.href && <a className="font-semibold text-sky hover:underline" href={p.href} {...ext}>View →</a>}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        kicker="// 03 · experience"
        title="10+ years of engineering"
        intro="Real-time embedded systems taught me the habits DevOps runs on: reliability, automation, root-cause analysis and working across disciplines."
      >
        <ol className="ml-1.5 border-l-2 border-night-line">
          {experience.map((job) => (
            <li key={job.dates} className="relative pb-7 pl-7 last:pb-0">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-mint bg-night" />
              <p className="font-mono text-xs text-ink-muted">{job.dates}</p>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-[15px] text-ink-muted">{job.org}</p>
              <ul className="mt-2 list-disc pl-5 text-[15px] text-ink-soft">
                {job.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Skills */}
      <Section id="skills" kicker="// 04 · toolbox" title="Skills" intro="What I work with today, and what I'm adding this year.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.group}>
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-mint">{s.group}</h4>
              <p className="text-[15px] text-ink-soft">{s.items}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certs" kicker="// 05 · certifications" title="Certification roadmap" intro="Each one is paired with a hands-on project, so the paper is backed by proof.">
        <table className="w-full border-collapse text-[15px]">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-ink-muted">
              <th className="border-b border-night-line px-2.5 py-3 font-semibold">Certification</th>
              <th className="border-b border-night-line px-2.5 py-3 font-semibold">Target</th>
              <th className="border-b border-night-line px-2.5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {certs.map((c) => (
              <tr key={c.name}>
                <td className="border-b border-night-line px-2.5 py-3">{c.name}</td>
                <td className="border-b border-night-line px-2.5 py-3 font-mono text-sm text-ink-muted">{c.target}</td>
                <td className="border-b border-night-line px-2.5 py-3"><StatusBadge status={c.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 border-t border-night-line py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-night-line bg-gradient-to-br from-mint/10 to-sky/10 p-9">
            <p className="mb-1.5 font-mono text-sm text-mint">// 06 · contact</p>
            <h2 className="mb-2 text-3xl font-bold tracking-tight">Let&apos;s talk</h2>
            <p className="mb-6 max-w-2xl text-ink-muted">
              Hiring for DevOps, cloud or DevSecOps in the Netherlands? Want to swap notes on the journey? I&apos;d love to connect.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className={btnPrimary} href={profile.linkedin} {...ext}>Message me on LinkedIn</a>
              <a className={btnGhost} href={profile.github} {...ext}>Follow on GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
