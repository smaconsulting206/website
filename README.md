# sma-consulting.co.uk — static build

Plain HTML and CSS. No build step, no JavaScript runtime, no bundler.

## Structure

```
/                       index.html (homepage)
/ai-advisory/           AI advisory
/ai/                    redirect to /ai-advisory/
/insights/              article index
/insights/<slug>/       four articles
/accessibility/         accessibility statement
/privacy/               privacy notice
404.html                branded not-found page (root-absolute paths, as Pages requires)
styles.css, site.css, tokens/   styling
assets/                 WebP images, favicons, og-card.jpg (1200×630)
.nojekyll  CNAME  robots.txt  sitemap.xml
```

## Publishing

1. Create a branch, e.g. `static-2026`.
2. Remove from the repo: `site.js`, `data.js`, `_ds/`, `netlify.toml`, `vercel.json`, and any old PNG headshots.
3. Copy the contents of this folder into the repo root, including the dotfile `.nojekyll`.
4. Push the branch and check it (Pages settings → deploy from branch), then merge to `main`.
5. After go-live, check the social card at LinkedIn Post Inspector and submit `sitemap.xml` in Google Search Console.

## Editing

Each page is self-contained HTML. Header and footer are repeated on every page; change them in all files together.
