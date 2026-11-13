import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  metadataBase: new URL('https://durgeshchourey.com'),
  title: 'Durgesh Chourey · DevOps & DevSecOps',
  description:
    'Software engineer with 10+ years in embedded systems, moving into DevOps and DevSecOps on Azure and AWS. Learning in public.',
  openGraph: {
    title: 'Durgesh Chourey · DevOps & DevSecOps',
    description: '10+ years of embedded software. Now automating how software is built, secured and shipped on Azure and AWS.',
    url: 'https://durgeshchourey.com',
    siteName: 'Durgesh Chourey',
    type: 'website',
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230f172a'/%3E%3Ctext x='32' y='42' font-family='monospace' font-size='28' font-weight='700' text-anchor='middle' fill='%2334d399'%3EDC%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-night font-sans text-ink">
        <SiteHeader />
        <main>{children}</main>
        <footer className="border-t border-night-line">
          <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-ink-muted">
            © {new Date().getFullYear()} Durgesh Chourey · <code className="font-mono text-ink">v1</code>: Next.js on
            Vercel behind Cloudflare. No trackers, no cookies, strict security headers. Next: an AWS + Azure version
            provisioned with Terraform.
          </div>
        </footer>
      </body>
    </html>
  );
}
