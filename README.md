# durgeshchourey.com

My portfolio and learning-in-public site: Software Engineer → DevOps & DevSecOps.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · deployed on Vercel · DNS and registrar on Cloudflare.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

## Update content

All text lives in `src/content/profile.ts`: roadmap stages, projects, experience, skills and certifications.
Change a stage or cert `status` to `'now'` or `'done'` as you progress; no component changes needed.

## Security

`next.config.mjs` sends security headers on every response: Content-Security-Policy, HSTS, X-Frame-Options,
X-Content-Type-Options, Referrer-Policy and Permissions-Policy. Check the result at https://securityheaders.com.

## Roadmap for this site

| Stage | Change |
|---|---|
| 2: Cloud basics | AWS twin: static export on S3 + CloudFront + ACM, and an Azure Static Web Apps copy |
| 3: CI/CD | GitHub Actions: lint, typecheck, build, Gitleaks on every push |
| 4: Terraform | All cloud resources and DNS as code |
| 6: DevSecOps | OWASP ZAP scan in the pipeline, SBOM for dependencies |
