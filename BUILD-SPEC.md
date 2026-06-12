# BUILD SPEC — Molecular Properties Calculator Documentation

You are authoring ONE page of a multi-page static documentation site. Every page
shares the same chrome and design system (already built in `assets/styles.css`
and `assets/app.js`). Your job: produce a single complete `.html` file in the
site root for your assigned page.

## Audience & voice (CRITICAL)
- Readers are **drug-discovery researchers and medicinal chemists — NOT programmers**.
- Plain language. Explain every term the first time. Keep the math where it adds
  understanding, but ALWAYS pair a formula with an "in plain words" explanation.
- Warm, precise, credible — like the docs of a good scientific product.
- Prefer concrete chemistry examples (aspirin `CC(=O)OC1=CC=CC=C1C(=O)O`, caffeine,
  quinones) over abstract talk.
- Use British/American spelling consistently with the existing pages (American).

## GLOBAL CONTENT DIRECTIVE — be exhaustive and assume zero technical background
This is meant to be the **complete go-to guide** for chemists and drug researchers who
are **not** familiar with statistics, machine learning, or programming jargon. Therefore:
- **Explain EVERY control, option, toggle, slider, and button** the user can touch: (1) what
  it does, (2) **why it's there / what problem it solves**, and (3) **what changes if you
  adjust it** (the practical impact on the result). Never assume a control is "obvious."
- **Define every technical term the first time it appears**, in plain words — e.g. "seed,"
  "standardize," "log-transform," "BIC/AIC," "covariance," "p-value," "R²," "cluster,"
  "density," "z-score." If you write a formula, immediately translate it into a `.plain` box.
- Favor "**what does this mean for my compounds?**" framing over math-for-its-own-sake.
- Include small worked examples and "what if I change this?" call-outs (use `adm-tip`/`adm-info`).
- When in doubt, over-explain. A reader should never hit a term or button they can't understand
  from this page alone.
- **Add representative SAMPLE PLOTS wherever a concept is visual** — draw them as clean, labelled
  inline SVGs (illustrative sketches, not real data) so readers see what the app's output looks like.
  Examples of where a sample plot belongs: a histogram/density curve split into colored humps (GMM
  single mode), a 2-D scatter with colored clusters and marked centers (GMM multi mode), the BIC/AIC
  "dip" curve with the minimum marked, a 3-D-ish regression plane through points, and one small sketch
  per chart type on the visualization page. Always caption a plot with a one-line plain explanation of
  what it shows. Use the theme palette (`#e0564a`, `#0e9384`, `#3b6fb0`, `#7c5cbf`, `#b87514`) on a
  `var(--surface)` panel with `var(--border)`; label axes with `var(--muted)` text.

## File rules
- Write to the SITE ROOT (same folder as `assets/`), filename exactly as assigned.
- Reference assets relatively: `assets/styles.css`, `assets/app.js` (NEVER absolute paths).
- Use ONLY the CSS classes documented below — they already exist. Do not invent new
  classes or add `<style>` blocks (one inline `style="..."` for a color tint on an
  icon chip is fine, matching the patterns shown).
- Inline SVG only for graphics (self-contained, no external images).

---

## PAGE SKELETON (copy verbatim; fill the 5 placeholders)

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{{TITLE}} · Molecular Properties Calculator Docs</title>
<meta name="description" content="{{DESCRIPTION}}" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/styles.css">
</head>
<body data-page="{{PAGE_ID}}">
<div class="progress" id="progress"></div>
<!-- ====== NAVBAR (paste from BUILD-SPEC §NAVBAR) ====== -->
<div class="scrim" id="scrim"></div>
<div class="layout">
  <!-- ====== SIDEBAR (paste from BUILD-SPEC §SIDEBAR) ====== -->
  <div class="main-wrap">
    <main class="content">
      {{CONTENT}}
      <!-- ====== PAGER (paste from BUILD-SPEC §PAGER, with your prev/next) ====== -->
      <!-- ====== FOOTER (paste from BUILD-SPEC §FOOTER) ====== -->
    </main>
    <nav class="toc" id="toc"></nav>
  </div>
</div>
<script src="assets/app.js"></script>
</body>
</html>
```

`{{CONTENT}}` MUST start with a page header:
```html
<div class="page-head">
  <div class="breadcrumb"><a href="index.html">Docs</a><span class="sep">/</span><span>{{Group}}</span><span class="sep">/</span><span>{{Page}}</span></div>
  <div class="eyebrow">{{SHORT EYEBROW}}</div>
  <h1>{{Page H1}}</h1>
  <p class="lead">{{1–2 sentence plain-language summary of the page}}</p>
</div>
```
Then use `<section>` blocks with `<h2>` headings (the on-page "On this page" rail is
auto-built from your `<h2>`/`<h3>` — so write clear, well-structured headings).

---

## §NAVBAR (paste verbatim)
```html
<nav class="navbar">
  <button class="icon-btn menu-btn" id="menuBtn" aria-label="Menu"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
  <a href="index.html" class="brand">
    <svg class="logo" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="11" r="5" fill="#e0564a"/><circle cx="10" cy="28" r="5" fill="#0e9384"/><circle cx="30" cy="28" r="5" fill="#3b6fb0"/><line x1="20" y1="11" x2="10" y2="28" stroke="#9aa3ad" stroke-width="2.2"/><line x1="20" y1="11" x2="30" y2="28" stroke="#9aa3ad" stroke-width="2.2"/><line x1="10" y1="28" x2="30" y2="28" stroke="#9aa3ad" stroke-width="2.2"/></svg>
    <span class="full">Molecular Properties Calculator</span><span class="tag">Docs</span>
  </a>
  <div class="nav-spacer"></div>
  <a href="faq.html" class="nav-link hide-sm">FAQ</a>
  <a href="glossary.html" class="nav-link hide-sm">Glossary</a>
  <a href="https://molecular-properties-calculator-2.streamlit.app/" target="_blank" rel="noopener" class="nav-cta">Open the App ↗</a>
  <button class="icon-btn" id="themeBtn" aria-label="Toggle theme">
    <svg id="sunIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
    <svg id="moonIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
  </button>
</nav>
```

## §SIDEBAR (paste verbatim — identical on every page; active state is automatic)
```html
<aside class="sidebar" id="sidebar">
  <div class="side-group"><h4>Start Here</h4>
    <a class="side-link" data-page="home" href="index.html">Introduction</a>
    <a class="side-link" data-page="getting-started" href="getting-started.html">Getting started</a>
    <a class="side-link" data-page="input-formats" href="input-formats.html">Input formats</a>
  </div>
  <div class="side-group"><h4>The Numbers</h4>
    <a class="side-link" data-page="properties" href="properties.html">Molecular properties</a>
    <a class="side-link" data-page="rules" href="rules.html">Drug-likeness rules</a>
    <a class="side-link" data-page="interference" href="interference.html">Interference flags</a>
    <a class="side-link" data-page="ligand-efficiency" href="ligand-efficiency.html">Ligand efficiency</a>
  </div>
  <div class="side-group"><h4>The Analyses</h4>
    <a class="side-link" data-page="regression" href="regression.html">3D regression</a>
    <a class="side-link" data-page="gmm" href="gmm.html">Grouping (GMM)</a>
    <a class="side-link" data-page="visualization" href="visualization.html">Visualization gallery</a>
    <a class="side-link" data-page="batch" href="batch.html">Batch processing</a>
  </div>
  <div class="side-group"><h4>Reference</h4>
    <a class="side-link" data-page="faq" href="faq.html">FAQ</a>
    <a class="side-link" data-page="glossary" href="glossary.html">Glossary</a>
  </div>
</aside>
```

## §PAGER (prev/next; replace hrefs/labels; use `<span class="empty"></span>` where there is no prev/next)
```html
<div class="pager">
  <a href="{{PREV}}.html"><span class="pl">← Previous</span><span class="pt">{{Prev title}}</span></a>
  <a class="next" href="{{NEXT}}.html"><span class="pl">Next →</span><span class="pt">{{Next title}}</span></a>
</div>
```

## §FOOTER (paste verbatim)
```html
<div class="footer">
  <p><strong>Molecular Properties Calculator</strong> — Researcher's Documentation. Built for Dr. Guido Pauli's Research Group, ITR-UIC.</p>
  <p style="margin-top:6px">This guide explains <em>meaning</em>, not implementation. · <a href="https://molecular-properties-calculator-2.streamlit.app/" target="_blank" rel="noopener">Open the live app ↗</a></p>
</div>
```

---

## COMPONENT CHEAT-SHEET (use these; they're all styled)

**Admonitions** (variants: `adm-note`,`adm-tip`,`adm-info`,`adm-warn`,`adm-danger`). Use a relevant inline SVG for `.ai`:
```html
<div class="adm adm-tip"><svg class="ai" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z"/></svg><div><div class="at">Tip</div><p>…</p></div></div>
```

**Cards grid** (`grid cols-2` / `cols-3`). Icon chip uses a tint var + matching stroke color:
```html
<div class="grid cols-3"><div class="card"><div class="ci" style="background:var(--brand-tint)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0564a" stroke-width="2">…</svg></div><h4>Title</h4><p>Body.</p></div></div>
```
Tint/stroke pairs: brand `var(--brand-tint)`/`#e0564a`, teal `var(--teal-tint)`/`#0e9384`, blue `var(--blue-tint)`/`#3b6fb0`, amber `var(--amber-tint)`/`#b87514`, violet `var(--violet-tint)`/`#7c5cbf`. A big number: `<div class="num">R²</div>`.

**Table** (wrap in `.table-wrap`). Use `.pill` (`pill-red/amber/teal/blue/violet`) for tags.

**Formula + plain words** (always together):
```html
<div class="formula">BIC <span class="op">=</span> (misfit) <span class="op">+</span> (penalty) <span class="op">×</span> log(n)</div>
<div class="plain"><span class="pi">💡</span><div><b>In plain words:</b> …</div></div>
```

**Numbered steps:** `<div class="steps"><div class="step"><h4>…</h4><p>…</p></div>…</div>`

**FAQ accordion:**
```html
<div class="faq"><details><summary>Question?<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></summary><div class="faq-body"><p>Answer.</p></div></details></div>
```

**Chips row:** `<div class="badge-row"><span class="chip"><span class="dot" style="background:var(--brand)"></span>Label</span></div>`

**Visualization gallery card** (visualization page): `.viz-grid` of `.viz-card` → `.viz-thumb` (inline SVG chart sketch) + `.viz-body` (`<h4>`, `<p>`, `.viz-when` with "**Use when:** …").

**Inline structure strings:** wrap SMILES in `<span class="smiles">…</span>`. Keystrokes: `<span class="kbd">Ctrl</span>`. Multi-line code: `<pre class="codeblock">…</pre>`.

**SVG diagrams:** hand-draw simple, labelled inline SVGs (axes, curves, flows) using the
theme palette (`#e0564a` brand, `#0e9384` teal, `#3b6fb0` blue) and `var(--surface)`/
`var(--muted)` for chrome. Keep them clean and explanatory, not decorative noise.

---

## FACTUAL REFERENCE (the app's real features — be accurate)

**App:** Streamlit web app. Five workspaces (modes): Single Molecule, Batch Processing,
Data Visualization, 3D Regression Analysis, GMM Analysis. Entry point `app.py`.

**Input formats:** SMILES (text recipe), InChI (standard barcode), InChI Key (short
fingerprint, needs online lookup via NIH CIR resolver → PubChem fallback). One file at a
time per workspace; uploads replace the previous file. CSV + XLSX; auto-detects the SMILES
column (names like SMILES, smiles, SMI, canonical_smiles).

**28 properties in 7 groups:**
- Basic: Molecular Weight, Exact Mass, LogP, TPSA, Atom Count, Bond Count, Molecular Formula
- Lipinski: H-bond Donors, H-bond Acceptors, MW, LogP
- Drug-likeness: Lipinski violations, Veber criteria, QED, Synthetic Accessibility (SA)
- Rules: Ghose filter, Egan filter, Muegge filter
- Rings: Ring count, Aromatic ring count, Ring-system count
- Complexity: Fraction sp3 carbons (Fsp3), Rotatable bonds, Stereocenters
- Additional: Formal charge, Molar refractivity, Heavy-atom count
Plain meanings: LogP = grease vs water-loving; TPSA = polar surface, predicts membrane/gut/brain
crossing; HBD/HBA = hydrogen-bond handshake points; rotatable bonds = flexibility; Fsp3 = 3D
character (more = less flat); QED = single 0–1 drug-likeness score (closer to 1 = more drug-like);
SA = how hard to synthesize (1 easy → 10 hard).

**Drug-likeness rules:**
- Lipinski Rule of Five: MW ≤ 500, LogP ≤ 5, H-bond donors ≤ 5, H-bond acceptors ≤ 10. Each
  broken = 1 violation; 0–1 fine, ≥2 = flag. Built for ORAL drugs.
- Veber: TPSA ≤ 140 Å², rotatable bonds ≤ 10 (oral bioavailability).
- Ghose, Egan, Muegge: other published filters with their own ranges.
- Rules are GUIDES not gates — many real drugs (antibiotics, injectables) break them.

**Assay interference — 5 categories:**
- PAINS (Pan-Assay Interference Substructures): ~480 published patterns via RDKit's FilterCatalog
  (Baell & Holloway, 2010). "Frequent hitters" — shapes that score as hits across unrelated targets.
- Aggregator: greasy compounds that clump into colloidal particles and sequester protein → fake
  inhibition that vanishes with detergent. Shoichet-lab heuristics (cLogP, MW, aromatic rings).
- Thiol-reactive: ~15 SMARTS for electrophiles (Michael acceptors, acylating agents, alkyl halides)
  that covalently grab cysteine residues (Dahlin et al. 2015).
- Redox-active: ~10 SMARTS (quinones, catechols, nitro groups) that cycle electrons and generate
  reactive species, interfering with assay chemistry (Proj et al. 2022).
- Fluorescent: ~13 SMARTS (coumarins, xanthenes/fluoresceins, anthracenes, stilbenes) that glow under
  assay light and drown the signal (Su et al. 2015).
- A flag is a HEADS-UP for human review, not a verdict. Each flag reports the matched pattern + a
  severity level. Suggested follow-up: orthogonal assay, dose–response, detergent control.

**Ligand Efficiency Indices (8):** NSEI, NBEI, BEI, SEI, nBEI, mBEI, LEH, LEP — AtlasCBS methodology
(Abad-Zapatero & Cortés-Cabrera, 2013). Core idea: divide binding strength by molecular size so
small efficient binders aren't unfairly beaten by big tight binders ("power per litre"). Each index
uses a different size measure (heavy atoms, MW, polar surface area). Needs an ACTIVITY value (pKi or
pIC50). Auto-detects existing MW/TPSA/heavy-atom columns to avoid recomputing.

**3D OLS Regression:** fits a flat plane through three numeric properties (pick X, Y, Z), interactive
Three.js view. Reports full OLS statistics: R² (how much variation explained, 0–100%), adjusted R²,
F-statistic, p-values (chance the pattern is luck; <0.05 = probably real), coefficients/slopes (β0
intercept, β1, β2 — the "levers"), standard errors, confidence intervals. Use for structure–activity
relationships (SAR) and property-optimization studies. Careful index tracking handles missing values.

**GMM Analysis (Gaussian Mixture Model):** discovers natural groups/sub-populations in a dataset
automatically — the user does NOT define the groups in advance. (The gmm.html page must explain EVERY
control below with what/why/impact, in plain words, assuming no stats background.)

- **What a "group/cluster" is, plainly:** a sub-population of molecules that resemble each other on the
  chosen properties — e.g. "small & polar" vs "large & greasy." GMM models the data as a blend of
  bell-curves (one per group) and assigns each molecule to the bell-curve it most likely came from.

- **Single-property mode vs Multiple-property mode (explain BOTH thoroughly):**
  - *Single property* = you pick ONE column (say molecular weight). The tool shows a density curve and
    reveals whether that one property splits into humps (e.g. a cluster of light compounds and a cluster
    of heavy ones). Use it to see how one trait distributes.
  - *Multiple properties ("multiple")* = you pick TWO OR MORE columns (say weight AND greasiness AND
    polar surface) and the tool finds groups using **all of them at once**. WHY this matters: real
    chemical series differ along several axes simultaneously; a compound isn't just "heavy," it's
    "heavy, greasy, and low-polarity." Multi-property grouping captures those combined patterns that
    single-property can't. HOW it works for the user: pick the columns, the tool measures each molecule's
    position in that multi-trait space and groups the ones that sit close together. Output includes a
    scatter (you choose which two properties form the X/Y axes just for viewing) colored by group.
    Explain that more properties = richer grouping but needs enough data and benefits from "standardize."

- **Number-of-groups slider (2–6) + "Auto (BIC)" button:** the slider lets you force a specific number
  of groups; "Auto (BIC)" picks the best number for you automatically (see BIC below). WHAT CHANGES IF
  YOU MOVE IT: fewer groups = broader, coarser buckets; more groups = finer splits (but risk inventing
  groups that aren't really there). Encourage starting with Auto, then nudging to compare.

- **Random seed (explain very plainly — chemists won't know this term):** GMM fits its bell-curves using
  a search that STARTS from a random guess and refines it. The "seed" is just a number that fixes that
  starting guess. WHY IT EXISTS: because of the randomness, two runs could land on slightly different
  groupings; fixing the seed makes results **reproducible** — you (and a colleague) get the exact same
  answer every time. WHAT CHANGES IF YOU CHANGE IT ("Refit / new seed"): a different starting guess, which
  *usually* gives the same groups but can shift borderline molecules. PRACTICAL USE: click "Refit" a few
  times — if the groups barely move, your grouping is **robust/trustworthy**; if they jump around a lot,
  the structure is weak and you should be cautious. "Reset seed" returns to the default reproducible value.

- **Standardize columns (toggle):** WHAT: rescales every property to a common scale before grouping.
  WHY: properties have wildly different ranges (MW in the hundreds, LogP around 0–5); without rescaling,
  the big-number property dominates and the grouping basically ignores the others. IMPACT: ON = every
  property gets a fair say (recommended for multi-property); OFF = large-range properties dominate (fine
  for single-property where you want real units on the chart).

- **Log-transform columns (toggle):** WHAT: compresses a skewed column (a few very large values squashed
  closer to the rest). WHY: some properties have a long tail (a handful of huge values) that distorts the
  bell-curve fit. IMPACT: ON for a skewed column = more balanced, sensible groups; leave OFF for already-
  even properties. (Negative-valued columns are skipped automatically.)

- **Optional "calculate molecular properties first":** if your file has a SMILES column but few numeric
  columns, the tool can compute properties (MW, LogP, TPSA, QED…) from the structures first, then cluster
  on those. Explain when you'd want this.

- **Outputs:** per-group summary table in REAL units (so "Group 1" is readable); each molecule's assigned
  group + a **confidence score** (how sure the tool is it belongs there — low = sits between groups);
  **outlier flags** (molecules fitting no group well — often the most interesting or most suspect);
  a plain-language interpretation; and a labelled CSV download (adds `GMM_Group`, `GMM_Confidence_%`).

- **Choosing how many groups — BIC & AIC (define from scratch; do NOT assume the reader knows these):**
  You can't choose by "best fit" alone, because adding more groups ALWAYS fits better (give it enough and
  every molecule becomes its own group — that's overfitting, not insight). So the tool uses scorecards
  that reward good fit but **subtract a penalty for every extra group**. BIC and AIC are two such
  scorecards (lower score = better). Compute the score for each candidate number of groups and pick the
  number with the **lowest** score — on the chart the line dips to a minimum then rises again; the bottom
  of the dip is the answer. They are NOT divided into a ratio. Difference: **BIC** penalizes extra groups
  more harshly (its penalty grows with how much data you have) → prefers FEWER, well-supported groups;
  **AIC** uses a gentler fixed penalty → tends to suggest MORE groups. THIS APP CHOOSES USING BIC
  (parsimony — avoid inventing groups out of noise, which matters in drug discovery), and shows AIC
  alongside so you can SEE when they disagree (a big gap = the extra structure is weak/uncertain).
  Formula framing to include (then translate in a `.plain` box):
  BIC = (how badly it fits) + (penalty per group) × log(number of molecules);
  AIC = (how badly it fits) + 2 × (number of settings the model had to learn).

**Visualization (Data Visualization mode):** interactive Plotly charts. Chart types: scatter (with
trendlines + R²/equation), line, bar, histogram (with mean/median lines), box plot, violin plot,
correlation heatmap, 3D scatter (with fitted regression plane), and pair/grid comparisons. Features:
size-by / shape-by / color-by encodings, color-scale selection with reverse, hover details, zoom,
export charts as images, and CLICK ANY POINT to pop up that molecule's 2D structure (rendered client-
side with SmilesDrawer.js). Distribution analysis panel for quick overviews.

**Batch processing:** upload CSV/XLSX (thousands of molecules), auto-detect structure column, pick
properties/LEIs, parallel processing with a progress bar, per-molecule error reporting (one bad row
doesn't crash the batch), download enriched file. Output is clean numeric columns compatible with
Excel, KNIME, Pipeline Pilot, StarDrop.

**Security/robustness niceties (mention lightly where relevant):** input validation, rate-limited &
cached online lookups, handles invalid SMILES gracefully.
