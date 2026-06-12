# Molecular Properties Calculator — Documentation

The complete, plain-language documentation site for the **Molecular Properties
Calculator**, written for drug-discovery researchers and medicinal chemists.

It explains *what every number means, why it's there, and how to use the tool* —
no coding or statistics background required.

🔗 **Live app:** https://molecular-properties-calculator-2.streamlit.app/

---

## What this is

A **static documentation site** — plain HTML, one shared CSS file, one shared JS
file. **No build step, no framework, no dependencies.** It hosts on GitHub Pages
(or any static host) exactly as-is.

```
index.html              Home / introduction
getting-started.html    How to use it, start to finish
input-formats.html      SMILES, InChI, InChI Key
properties.html         The 28 molecular properties
rules.html              Drug-likeness rules (Lipinski, Veber, …)
interference.html       Assay-interference flags (PAINS, aggregators, …)
ligand-efficiency.html  The 8 efficiency indices
regression.html         3D regression analysis
gmm.html                Grouping compounds (GMM) — every control explained
visualization.html      Visualization gallery (every chart type)
batch.html              Batch processing
faq.html                Frequently asked questions
glossary.html           Plain-language glossary
assets/styles.css       Shared design system
assets/app.js           Shared behavior (theme, nav, on-page rail)
```

---

## Preview locally

Just open `index.html` in a browser — it works over `file://`.

For a more faithful preview (clean URLs), serve it:

```bash
cd molecular-properties-calculator-docs
python3 -m http.server 8080
# open http://localhost:8080
```

---

## Deploy to GitHub Pages

Two options — pick one.

### Option A — GitHub Actions (recommended)
1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source = "GitHub Actions".**
3. Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
   which uploads the static site and publishes it. No build, no Jekyll.

### Option B — Deploy from a branch
1. Push this repo to GitHub.
2. **Settings → Pages → Source = "Deploy from a branch" → `main` / `/ (root)`.**
3. The `.nojekyll` file ensures GitHub serves the files as-is.

Your site will be at `https://<your-username>.github.io/<repo-name>/`. All asset
and page links are **relative**, so it works at any base path without changes.

---

## Editing

- Content lives in the `*.html` files; the look lives in `assets/styles.css`.
- The navbar/sidebar/footer are repeated in each page (identical markup); the
  active sidebar item and the "On this page" rail are set automatically by
  `assets/app.js` from each page's `data-page` attribute and its headings.
- `BUILD-SPEC.md` documents the design system and components used to author the
  pages — handy if you add new pages.

---

Built for **Dr. Guido Pauli's Research Group, ITR-UIC**.
