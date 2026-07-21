# Kona Hydrostatic Testing — website

A responsive rebuild of [kona-hydrostatic-testing.com](http://kona-hydrostatic-testing.com/)
(originally built in EverWeb) using **Hugo**, deployed free on **GitHub Pages**.

## Run locally

```sh
hugo server
```

Then open <http://localhost:1313/>.

## Build

```sh
hugo --minify
```

Output goes to `public/`.

## Deploy to GitHub Pages (free subdomain)

1. Create a GitHub repo (e.g. `kona-hydrostatic-testing`) and push this folder to
   the `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site
   and publishes it to `https://<username>.github.io/<repo>/`.
   The workflow injects the correct `baseURL` automatically, so you don't need to
   edit `hugo.toml` for the subdomain.

## Later: custom domain

Once Tim has access to the domain's DNS for `kona-hydrostatic-testing.com`:

1. Repo **Settings → Pages → Custom domain** → enter the domain.
2. At the registrar, add the DNS records GitHub shows (A/AAAA records to GitHub's
   IPs for an apex domain, or a `CNAME` to `<username>.github.io` for `www`).
3. Tick **Enforce HTTPS** — GitHub issues a free certificate (fixes the old
   site's broken cert).

## Editing content

All page text lives in `content/*.md`. Business details (phone, email, address,
hours, Facebook, map) are defined once in `hugo.toml` under `[params]` and reused
across the footer and home page.
