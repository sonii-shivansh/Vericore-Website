# Vericore Website

Public website for Vericore, the evidence-grounded engineering intelligence platform.

## Local development

```bash
npm install
npm run dev
```

Then open the local Astro dev URL printed in the terminal.

## Production checks

```bash
npm run check
npm run build
npm run verify:routes
```

## Deploy

The GitHub Pages deployment is handled by `.github/workflows/deploy.yml`.

- It validates the site on push to `main`
- Builds the static site
- Verifies required production routes exist
- Publishes the `dist` output as a GitHub Pages artifact

## Notes

- Site base path: `/Vericore-Website`
- Static output: `dist/`
- Product claims should stay aligned with the shipped Vericore implementation and docs
