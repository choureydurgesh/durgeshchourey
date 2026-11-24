# durgeshchourey.com

Personal portfolio of Durgesh Chourey, a DevOps, Platform and DevSecOps engineer.

It's a plain static site: one HTML page, one stylesheet, no framework, no cookies and no tracking.

## Run it locally

```sh
npx serve .
```

## How it ships

Every pull request runs gitleaks, HTML validation and a link check. A merge to `main` deploys to Cloudflare Pages (`.github/workflows/site.yml`).

The deploy needs two repository secrets:

- `CLOUDFLARE_API_TOKEN`: an API token with the **Cloudflare Pages: Edit** permission
- `CLOUDFLARE_ACCOUNT_ID`
