# Adding & editing Experience cards

This is the playbook for the tiles on **`/experience`** (the "Our Experience" page).
Follow it top-to-bottom and the logo/layout back-and-forth that used to plague this
page goes away. **The single biggest source of rework is logos — read the
[Logo rules](#logo-rules-read-this) section carefully and do the asset prep _before_
you touch the data file.**

## Where everything lives

| Thing | Path |
|---|---|
| Card **data** (the list of projects) | `src/data/experience.ts` |
| Card **rendering** (layout, hover overlay, logo sizing) | `src/pages/experience.astro` |
| **Photos & raster logos** (`.png`, `.jpg`) | `src/assets/images/experience/` |
| **Vector logos** (`.svg`) | `public/logos/` |

A card is one object in the `projects` array in `experience.ts`. The page splits them
by the `section` field into **Enterprise Development**, **Strategy & Insights**, and
**Impact Studio**. Order on the page = order in the array (within a section).

## The two tile styles

1. **Enterprise tiles** — square (`aspect-square`). A background photo with a small
   partner-logo "badge" in a top corner. No hover write-up overlay of note.
2. **Strategy & Insights tiles** (the report covers) — portrait (`aspect-[4/5]`). The
   card shows the **report cover**; on hover/tap a navy overlay fades in with a
   write-up and the contributor logos. This is the style that needs the most care.

---

## Quick start: add a Strategy report card

1. **Prep the cover image** → 4:5, no internal cropping (see [Cover images](#cover-images)).
2. **Prep every logo** → correct colour + cropping + format (see [Logo rules](#logo-rules-read-this)).
3. **Drop assets** into `src/assets/images/experience/` (rasters) or `public/logos/` (SVGs).
4. **Add the object** to `projects` in `experience.ts` at the position you want it to appear.
5. **Build & verify** (see [Verify before you ship](#verify-before-you-ship)).

Minimal report card:

```ts
{
  slug: "unique-kebab-case-id",
  title: "Report Title",
  image: "report-cover.jpg",            // file in src/assets/images/experience/
  body: `In 2026, Catalyst ... <a href="https://link-to-report.pdf" target="_blank" rel="noopener">Report Title</a> ...`,
  section: "strategy",
  noBadge: true,                        // the cover already shows the logo? hide the non-hover badge
  cornerLogos: { topLeft: "partner-logo-white.png" },
},
```

---

## The `Project` fields

| Field | Required | What it does |
|---|---|---|
| `slug` | ✅ | Unique id (kebab-case). Not shown; used as a key. |
| `title` | ✅ | Tile title / image alt text. |
| `image` | ✅ | Background/cover filename in `src/assets/images/experience/`. |
| `body` | ✅ | The write-up, as **HTML** (links use `target="_blank" rel="noopener"`). |
| `section` | ✅ | `"enterprise"` \| `"strategy"` \| `"innovation"`. |
| `logo` | – | Single badge logo (the small logo on the **non-hover** tile). |
| `logos` | – | Several badge logos side-by-side. Overrides `logo`. |
| `logoLarge` | – | Render the badge bigger (e.g. Acumen, SEforALL). |
| `display` | – | `"contain"` fits the image inside with padding instead of filling. Avoid for reports — prep the cover to 4:5 instead. |
| `noBadge` | – | **Hide the non-hover corner badge.** Does **not** affect the hover overlay. Use when the cover photo already carries the logo. |
| `cornerLogos` | – | Pin contributor logos to the **hover overlay** corners (`topLeft`, `topRight`, `bottomLeft`, `bottomRight`). Body text reserves space to fall between them. |

`logo`/`logos`/`logoLarge` = the **non-hover badge**.
`cornerLogos` = the **hover overlay**. They are independent — set both if you want a
badge on the resting tile *and* contributor logos on hover.

---

## Logo rules (READ THIS)

Logos cause ~all of the rework. The rules:

### 1. Right colour
The hover overlay is **dark navy**. Logos on it must be **white / reversed** versions.
A dark or full-colour logo disappears against navy. If you only have a colour logo,
make a white version first (alpha-mask the artwork to solid white) and save it as a
**new file** named `*-white.png` — don't reuse the colour one on the overlay.

The non-hover badge sits on a photo, so it usually also wants the **white** version
(photos are dark enough). Check contrast against the actual cover.

### 2. Right format & location
- **Corner logos (`cornerLogos`) must be raster `.png`** living in
  `src/assets/images/experience/`. They are loaded through the image pipeline; a raw
  `.svg` here renders **0×0** (this bit us — that's why `geapp-logo-white.png` exists).
- Badge logos may be `.svg` (put them in `public/logos/`, reference by bare filename)
  or `.png` (in `src/assets/images/experience/`).

### 3. Right cropping / padding of the source file
Export each logo **tightly trimmed** — no big transparent margins baked into the PNG.
Extra whitespace inside the file makes the *visible* logo render smaller than its
neighbours even when the CSS sizes match. Trim to the ink, then let the CSS size it.

### 4. Consistent sizing is automatic — keep it that way
`experience.astro` sizes overlay logos **by type**, so the same logo always reads the
same size everywhere:

```ts
const WIDE_WORDMARK_LOGOS = new Set(["geapp-logo-white.png", "lightrock-logo.png"]);
```

- **Wide, single-line wordmarks** (GEAPP, Lightrock) → in this set → render shorter
  (capped by width) so they don't dwarf everything.
- **Compact / stacked lockups** (Rockefeller's globe + 2-line text) → *not* in the set
  → render taller.

**When you introduce a new contributor logo, decide which bucket it's in:**
if it's a long horizontal wordmark, **add its filename to `WIDE_WORDMARK_LOGOS`**.
If it's a square-ish / stacked mark, leave it out. Get this right once and every future
appearance is sized correctly — no per-card tweaking.

### 5. Two logos on the same top edge must not collide
On a card like *Structuring for the Last Mile* (GEAPP top-left **and** Lightrock
top-right), the width cap on wide logos is what keeps them apart. If you widen that cap
or add a too-wide logo, they overlap on mobile first. After any logo change, **check
the narrow viewport** (see verify step). Current safe clearance: ~36px desktop / ~20px
mobile.

### 6. Top vs bottom placement
Top corner logos are **pinned** (absolute). Bottom corner logos **flow after the body
text** and use an explicit height (not `max-h`) so flexbox can't squish them. Don't try
to pin a bottom logo — long copy will collide with it.

---

## Cover images

Report covers use `object-cover`, which **fills and crops** to the 4:5 tile. So:

- **Prepare the file at exactly 4:5** (e.g. 1080×1350) with the logos/hero already
  positioned where you want them. Then `object-cover` does **no** cropping.
- If the source cover isn't 4:5, **add a frame** (pad with a matching brand colour) to
  reach 4:5 rather than letting CSS crop off the top/bottom logos.
- **Never** hardcode both `width` and `height` on the `<Image>` — that forces a square
  crop before `object-cover` runs and the image "spills over". The template uses
  `width={1080}` only, so Astro derives the true aspect ratio. Leave it that way.
- Avoid `display: "contain"` for reports; it leaves an "artificial border". Fill the
  card by prepping the cover to 4:5 instead.

Tooling note: this machine has **PyMuPDF** (`fitz`) and **sharp** for extracting a PDF
page and padding to 4:5; `pdftoppm`/poppler is **not** installed.

---

## Ordering

Cards render in array order within their section. To place a card "after BRILHO" or
"top-left", move the object to that position in the array. The Strategy grid is 2-up on
desktop, so position N's column alternates left/right — if a card's badge needs to be in
a specific corner, remember the badge auto-flips to the outer corner by column.

---

## Verify before you ship

1. `npm run build` — must pass.
2. On `/experience`, open the report tiles (hover, or tap on mobile) and check the
   **hover overlay**:
   - Every contributor logo is **visible** (white on navy), crisp, and **sized
     consistently** with the same logo on other cards.
   - On multi-logo tops, the two logos **don't overlap** — check at a **narrow
     viewport (~390px)**, which is where overlap appears first.
   - Body text isn't crammed against a logo (there's a top reserve for pinned logos).
3. The **non-hover** tile: badge in the right corner, or absent if `noBadge`.

If logos render 0×0, you used an `.svg` in `cornerLogos` — convert to a trimmed white
`.png`. If a logo looks too big/small versus its peers, fix its
`WIDE_WORDMARK_LOGOS` membership (don't add one-off CSS).

---

## Common mistakes (all previously hit)

- ❌ SVG in `cornerLogos` → renders 0×0. ✅ Use a trimmed white PNG.
- ❌ Colour logo on the navy overlay → invisible. ✅ White/reversed version.
- ❌ `width` **and** `height` on `<Image>` → cover distorts/spills. ✅ `width` only.
- ❌ Cover not 4:5 → `object-cover` crops off top/bottom logos. ✅ Pad to 4:5.
- ❌ New wide wordmark not added to `WIDE_WORDMARK_LOGOS` → it dwarfs the others.
- ❌ Logo PNG with baked-in transparent margins → looks smaller than its neighbours.
- ❌ Widening the logo cap without checking mobile → top logos overlap at ~390px.
