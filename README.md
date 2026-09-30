# Ryan Guzelian — Portfolio

A personal engineering portfolio built with React 18 and styled-components, deployed to GitHub Pages at https://ryanguzelian.com.

## Development

```sh
npm ci
npm start
```

## Verification

```sh
npm test -- --watchAll=false --runInBand
npm run build
```

Integration tests cover project deep links, browser back/forward, search and status filters, empty results, retained filters, and page focus/title changes.

## Content

- `src/data/projects.js` supplies the homepage, project archive, and case studies. Set `featured` to include a project in the Featured filter. Optional case-study fields are `problem`, `contribution`, `technicalDetails`, and `outcome`.
- `src/data/profile.js` contains professional experience, education, and grouped technologies.
- `public/Ryan Guzelian Resume.pdf` is the resume served for preview and download. Keep this filename when replacing the PDF, and regenerate public/resume-preview.png from its first page to keep the preview in sync.
- `src/components/GlobalStyles.js` and `UI.js` define the shared colors, typography, spacing, and layout.

Images in `src/images` retain the original project previews. The Blackout preview is a still frame so project previews do not animate automatically. Courtsy uses a court illustration, not a product screenshot.

## Navigation

Page URLs use hashes (`#home`, `#projects`, `#about`, `#resume`, `#contact`). Project URLs use `#projects/<id>`, such as `#projects/courtsy`. Unknown project IDs display the Work listing. Hash navigation works on GitHub Pages without server-side route rewrites. Page changes use a short native crossfade where supported, with an entrance fade as a fallback. Reduced-motion preferences disable both paths. Rapid navigation always resolves to the latest URL.

## Deployment

The existing `.github/workflows/deploy.yml` builds and publishes the `build/` directory using GitHub Pages. Local changes remain available for review until pushed. No deployment command is configured in package.json.
