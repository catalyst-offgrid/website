# Fidelity-Pass Brief (Phase 2a redux)

## The ask

Our current Astro rebuild (`src/pages/*.astro`) drifted too far from the Wix site it's supposed to mirror. We need to **rebuild all 7 pages to visually match the Wix site closely** — same layout, same imagery, same accent colors, same section rhythm. This is a mirror job, not a redesign.

The current site is live at `https://website-dxt.pages.dev/` but looks too "clean/modern" vs the Wix site. You are fixing that.

## Reference material (READ EVERY ITEM)

### Screenshots of the Wix site (absolute source of truth for layout)

All in `C:\Code\Catalyst website\Full Page Screenshots\`:
- `Index.png` — Home
- `Team.png` — Team
- `Experience.png` — Experience
- `Experience Example.png` — shows the hover-reveal project tile interaction (orange overlay with white text appears when you hover)
- `Innovations.png` — Innovations
- `Contact.png` — Contact
- `Join Our Team.png` — Join Our Team
- `Privacy Policy.png` — Privacy Policy

**Read these with the Read tool at the start. They are the brief.**

### Saved Wix HTML (for copy extraction and image references)

On the `main` branch of this repo. Access via `git show main:<filename>`:
- `index.html`, `team.html`, `experience.html`, `innovations.html`, `contact.html`, `joinourteam.html`, `privacy-policy.html`

### Source images (all already staged)

`src/assets/images/raw/` contains Phase 1's full image folders, one folder per page (`index_files/`, `team_files/`, etc.). Original filenames preserved. You will:
1. Identify which image is which (hero backgrounds, partner logos, team headshots, project tiles, innovation logos)
2. Copy/rename the ones you use into clean named files in `src/assets/images/logos/`, `/heroes/`, `/partners/`, `/team/`, `/expertise/`, `/innovations/`, `/experience/`, `/icons/`
3. Update the pages to import from the clean paths

Heuristics for identifying Wix images:
- Wix encodes images with content-based hashes like `a33124_*~mv2.png` — size and context disambiguate them
- Biggest files in `index_files/` are almost always hero backgrounds and large photos
- Medium PNGs appearing on multiple pages are partner logos
- Files appearing on every page (like `8efda6...png`, `11062b_ddd...png`) are icons (social, logo)
- Team headshots are in `team_files/` with descriptive names (`Dan_edited.png`, `Ian-new-pic-updated_edited.png`, `GPE_Kaluba Musakanya-1_edited.png`, etc.)

### Team headshot mapping (I already worked this out)

Team page lists members in this order, with headshots following in the same order in the HTML. Map accordingly:

Core team (in page order):
1. Andrew Loebus → `IMG_20250925_091936323_AE (1)_edited.png`
2. Christine Eibs Singer → `Christine_edited.png`
3. Dan Murphy → `Dan_edited.png`
4. Henry Stanislaw → `IMG_0268_edited.png`
5. Ian Muir → `Ian-new-pic-updated_edited.png`
6. Itoro Atakpa → `image (1)_edited_edited.png`
7. Jennifer Ortiz → `JENIFER-241_no bckgrnd.png`
8. Kaluba Musakanya → `GPE_Kaluba Musakanya-1_edited.png`
9. Kat Harrison → (likely `Untitled (Blog Banner) (400 x 400 px) (1).png` — confirm via dimensions/appearance)
10. Rachel McManus → `RMM+headshot+(1) (1)_edited.png`
11. Russell Lyseight → `20250510_170049.jpg`
12. Shazia Khan → (likely `20 year (9).png`)
13. Wangui Maina → (identify from remaining)
14. Xan Garcia Ehrhardt → `Xan 2_edited_edited_edited.png`

If any mapping looks wrong on the rendered site vs the screenshot, swap until correct. The screenshot is authoritative. If you truly cannot match a headshot, use `getInitials(name)` placeholder for that one person and note it in your summary.

## Design tokens (already in `src/styles/global.css` — UPDATE as needed)

Current tokens:
```css
--color-brand-blue: #002F54;      /* primary navy — header/footer bg, headings */
--color-brand-blue-dark: #192854;
--color-brand-blue-alt: #002E5D;
--color-brand-cyan: #00AEEF;      /* DE-EMPHASIZE — barely used in Wix */
--color-brand-gold: #FBB228;      /* PRIMARY ACCENT — section headings, CTAs */
--font-sans: "Open Sans", ...;
--font-display: "Montserrat", ...;
```

**IMPORTANT design corrections from initial build:**
- Primary accent is **GOLD (`#FBB228`)**, not cyan. All section headings (`Our Values`, `Our Expertise`, `Our Team`, etc.) should be gold on white/light backgrounds
- Section headings in Wix are **centered**, **light weight**, **Montserrat**
- Active nav link is the **gold** color, not cyan
- There is NO cyan in the Wix site visually — treat it as unused

## Specific page requirements

### Shared: Header
- Dark navy (`brand-blue`) full-width bar
- Left: gold-circle Catalyst logo icon (file: `11062b_dddc4f38b4d0473c98be1489c5a83f30~mv2.png` in raw/index_files — gold "C" circle) + white "CATALYST" wordmark next to it, small "ENERGY ADVISORS" subtitle underneath
- Right: horizontal nav, white text, small caps or regular case, active link in gold
- Nav items: Home, Team, Experience, Innovations, Contact (5 items, NOT including Join/Privacy — those live only in the footer)

### Shared: Footer
- Dark navy background, white/semi-transparent text
- 3 columns on desktop:
  - **Left**: map-pin icon + "Catalyst is headquartered in Berkeley, California. Our team's decentralized, global presence includes New York, Nairobi, Paris, Maputo, Lusaka, Lagos and Washington DC."
  - **Middle**: "Join our team" heading in gold + envelope icon + `info@catalyst-advisors.com` in gold (link). Link text to `/joinourteam`.
  - **Right**: "About Catalyst" heading in gold + "Catalyst is a specialized consulting firm that focuses exclusively on the energy access deficit in emerging markets."
- Social icons (X/Twitter + LinkedIn) in small gold-bordered circles, right-aligned middle area. Icons: `8efda6398c724b5ea342287bfe3f5ed0.png` appears to be LinkedIn; `11062b_...` appears to be the Catalyst logo. For the X icon use a simple inline SVG. Leave the `href` attributes empty (`href="#"`) for now — the boss hasn't given links.
- Bottom bar: "Home   Team   Experience   More" horizontal nav + "© {year} Catalyst Energy Advisors. All rights reserved. Catalyst Privacy Policy can be found [here](/privacy-policy)."

### Home page
Match `Index.png` section by section:
1. **Full-bleed hero**: the large `a33124_e393a8cffa8f4d7db810413adabad5a2~mv2.png` (800KB) or `a33124_226a4b1df01d473082527da89411102ff000.jpg` (384KB) is almost certainly the hero village/solar photo. Dark overlay (`bg-brand-blue/70`). White heading text (the long tagline) + two CTA buttons (gold filled + navy outlined).
2. **Definition panel**: darker navy section with the `/ˈkæt̬.əl.ɪst/` definition copy, gold pronunciation accent, "Through its work..." text. May have a decorative image element on the side.
3. **"Our Values"** — gold heading centered, 4-card grid of values
4. **"Our Expertise"** — gold heading centered, 6-tile grid of alternating gold-bg and navy-bg cards with white text
5. **"Where We've Worked"** — gold heading, short paragraph + the world map image (`NASA map nightlights 2016.jpg` is the wrong one — Wix uses a map with country dots in gold/navy; look for the right asset; if unclear use `map legend 2.png` or check other _files folders)
6. **"Some of Our Partners And Clients"** — large logo grid (many logos; pull every partner-logo-looking PNG from `index_files/` and render them all at consistent height)

### Team page
Match `Team.png`:
- Hero strip with navy bg + gold "Our Core Team" centered heading
- 3-column grid of team cards: circular headshot (~140px), name in navy below in Montserrat, role in gold, LinkedIn icon
- "Affiliated Advisors" section with shorter cards, dark navy bg
- Use `Affiliated` in white + `Advisors` in gold, as in the screenshot

### Experience page (hardest — hover interaction required)
Match `Experience.png` + `Experience Example.png`:
- Gold "Our Experience" heading + short intro
- Two toggle buttons: "Enterprise Development" | "Strategy & Insights" — clicking one shows that grid. Use Astro islands OR inline JS toggling class names. Both grids visible by default is OK if time-constrained; the toggle is the ideal.
- Grid of 6-8 project tiles per section. Each tile is a rectangular image. On **hover**, an orange (`bg-brand-gold`) or colored overlay appears with white body copy describing the project (see `Experience Example.png` for the GET.invest card).
- Project images are in `experience_files/` raw folder — pull them all, see which look like project photos vs decoration.
- For each project tile, you will need dummy descriptive copy (the Wix HTML has it; extract via `grep -oE 'wixui-rich-text__text[^>]*>[^<]{50,600}<' /tmp/wix-experience.html` or similar).
- Implement hover as: image has filter, absolutely-positioned overlay div with `opacity-0 hover:opacity-100 transition`. Mobile fallback: show text below tile instead.

### Innovations page
Match `Innovations.png`:
- Gold centered heading "Transforming Markets Through Innovation"
- Subheading "We originate, incubate, and scale breakthrough ideas to accelerate universal access to power."
- Three logo+paragraph sections, each centered:
  1. **Micro Asset Financing Lab** — formerly PAYGo Lab (`innovations_files/` has an MAF Lab logo)
  2. **VentureBuilder** — `VB-Logos-FNL-22_edited.png` in raw/innovations_files
  3. **Access Insights Platform (AIP)** — `AIP_logo_edited_edited_edited.png` in raw/innovations_files
- Each section: centered logo, paragraph below, "Learn more:" with link to the live site
- Thin horizontal rule between sections

### Contact page
Match `Contact.png`:
- Navy hero band (thin) with "Contact Us" in gold, centered
- "We'd love to hear from you" subheading in navy, centered
- Two paragraphs of copy (extract from Wix HTML):
  - Para 1: "If you're interested in learning more about the work that we do at Catalyst, please send us an email at [info@catalyst-advisors.com](mailto:...)." — email in gold
  - Para 2: "We are always looking for passionate and talented people to join our team. If you are interested in being considered, send your CV to [jobs@catalyst-advisors.com](mailto:...)." — email in gold
- Social icons (X + LinkedIn) in gold-circle buttons, centered
- NO CONTACT FORM on the Wix site. Mirror that — drop the Formspree form from this page (keep `src/components/ContactForm.astro` in the repo for future use, just don't render it).

### Join Our Team page
Match `Join Our Team.png`:
- Navy hero band with "Join" in navy + "Our Team" in gold, centered, as a combined H1
- Three paragraphs of body copy (extract from `joinourteam.html`):
  - Intro: "Catalyst is always looking for highly motivated individuals..."
  - DNA: "Catalyst's DNA is practitioners. As such, we are interested in working with people with prior experience in energy access enterprises..."
  - Diversity: "Catalyst values a diverse team and strives to increase..."
- All body text centered, max-width ~700px

### Privacy Policy page
Match `Privacy Policy.png`:
- Navy hero band with "Catalyst Privacy policy" (note capitalization) in gold
- Full policy text in normal left-aligned paragraphs, max-width ~750px
- H2 subheadings in navy (uppercased? check screenshot), body text in slate-700
- Extract the current (2026) copy from `git show main:privacy-policy.html`

## Implementation approach

1. **Read all 7 screenshots first.** Seriously. They are the brief.
2. **Copy needed images** from `src/assets/images/raw/*` to the clean named folders. Delete `src/assets/images/raw/` at the end so the deployed build is lean.
3. **Update `src/styles/global.css`** if you need additional tokens (e.g., overlay colors, specific hover behaviors).
4. **Rewrite `Header.astro` and `Footer.astro`** to match Wix.
5. **Rewrite each of the 7 pages** against its screenshot.
6. **Run `npm run build`** and fix any errors. Target build output `dist/` under 10 MB including images.
7. **Commit in logical chunks** as you go. Branch is `rebuild`.
8. **Push to origin/rebuild** at the end. Cloudflare Pages will auto-deploy.

## Guardrails

- **Do NOT redesign.** If the Wix site looks a certain way, replicate it. You may clean up spacing/padding where Wix was clearly broken, but layout/colors/imagery must match.
- **Gold is primary accent, cyan is basically unused.**
- **Don't add new features.** No dark mode, no fancy animations, no newsletter signup, no blog. Scope is explicitly Phase 2a.
- **Keep the Astro `<Image>` component** for all `src/assets/images/*` imports so optimization still happens.
- **No Wix / thunderbolt / parastorage references** in final output.
- **If you get blocked** (image you can't identify, copy you can't extract), leave a TODO comment and continue — note it in your final summary.

## Deliverable

When done: 
- All 7 pages rebuilt and matching screenshots
- Header + Footer match Wix
- Clean image assets, no `raw/` folder remaining in the committed tree
- `npm run build` passes cleanly
- Changes pushed to `origin/rebuild`
- Summary of what was rebuilt, what images were used, anything marked TODO
