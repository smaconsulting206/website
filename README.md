# SMA Consulting — capability website

Production-ready static site. **No build step required** — these are plain files
(HTML, CSS, JS, images). Deploy the contents of this `deploy/` folder to any
static host.

> The React app is **precompiled** (`site.js` contains plain `React.createElement`
> calls — no in-browser Babel), so it loads fast. React itself is pulled from a
> CDN; the page therefore needs an internet connection to render. Fonts load from
> Google Fonts. Everything else (images, CSS) is local.

## What's here

```
index.html        ← entry point
styles.css        ← design-system entry (imports tokens/*)
tokens/*.css       ← colours, type, spacing, base, components
site.css          ← page layout
data.js           ← all site copy (pillars, principals, podcast, impact …)
site.js           ← precompiled app
assets/           ← logos + principal headshots
.nojekyll         ← GitHub Pages: serve folders as-is
netlify.toml      ← Netlify config
vercel.json       ← Vercel config
```

To edit copy (add a podcast link, a new impact card, reword a pillar) edit
**`data.js`** and redeploy — no rebuild needed.

---

## Deploy options

### 1 · GitHub Pages
1. Create a repo and push the **contents** of this folder to the root of the
   `main` branch (so `index.html` sits at the repo root).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch:
   `main` / `/ (root)` → **Save**.
3. Live at `https://<user>.github.io/<repo>/` in ~1 min. (`.nojekyll` is already
   included so the `tokens/` and `assets/` folders serve correctly.)

To use the custom domain **sma-consulting.co.uk**: add a `CNAME` file containing
`sma-consulting.co.uk`, then point a DNS `CNAME`/`ALIAS` at GitHub Pages.

### 2 · Netlify
- **Drag & drop:** go to app.netlify.com → *Add new site → Deploy manually* →
  drag this `deploy/` folder onto the page. Done.
- **Git:** connect the repo; set *Publish directory* to the folder containing
  `index.html`. `netlify.toml` handles the rest.

### 3 · Vercel
- Install the CLI (`npm i -g vercel`) and run `vercel` from inside this folder,
  **or** import the repo at vercel.com. Framework preset: **Other**. No build
  command; output directory is this folder. `vercel.json` is already set.

### 4 · Cloudflare Pages
1. dash.cloudflare.com → **Workers & Pages → Create → Pages**.
2. *Upload assets* (drag this folder) **or** connect the repo.
3. Build command: *(leave blank)*. Build output directory: `/` (or the folder
   with `index.html`). **Save and Deploy**.

---

## Custom domain (sma-consulting.co.uk)
Every host above has a *Custom domains* panel — add `sma-consulting.co.uk`, then
create the DNS record they show you (usually a `CNAME` to their domain, or an
`A`/`ALIAS` record). HTTPS is provisioned automatically.

## Going fully offline / self-hosted React (optional)
If you ever need zero external dependencies, download these two files into a
local `vendor/` folder and update the two `<script src>` tags in `index.html`:
- `react@18.3.1/umd/react.production.min.js`
- `react-dom@18.3.1/umd/react-dom.production.min.js`
…and self-host the three Google fonts (Sora, Hanken Grotesk, Space Mono).
