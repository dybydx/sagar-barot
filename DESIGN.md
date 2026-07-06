# Sagar Barot — Personal Website · Design Guide

Personal brand site for **Sagar Barot**, Founder & Managing Director of **SNB Group of Companies**, a second-generation Mumbai real-estate developer.

**Primary objective:** generate *credibility* — establish Sagar as a serious, trustworthy, established builder. Every design decision should serve proof over decoration.

File: `Sagar Barot.dc.html` (single Design Component, client-side routed across Home / About / Ventures / Blog / Contact).

---

## 1. Voice & positioning

- **Second-generation builder** — heritage + discipline. Warmth of a family business, rigour of a modern practice.
- Tone: measured, honest, understated. No hype, no superlatives beyond what can be proven.
- Tagline: *Experience the Best · Expect the Next*
- Recurring themes: **intent, transparency, longevity, integrity.**

---

## 2. Color

Warm, ivory-toned neutrals with a single earthy bronze accent. Low saturation throughout — nothing brighter than the bronze.

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F4EFE6` | Page background (ivory) |
| `--panel` | `#FBF8F2` | Raised sections, cards, footer |
| `--accent` | `#97703F` | Bronze — accents, active states, tags |
| `--accent-deep` | `#6E4F2A` | Deep bronze — labels, hovers, links |
| `--ink` | `#1B1916` | Primary text, dark CTA sections |
| `--ink2` | `#5C564C` | Body / secondary text |
| `--ink3` | `#8A8478` | Meta, captions, muted labels |
| `--rule` | `rgba(27,25,22,.14)` | Hairline dividers & borders |

**Alternate themes** (via `theme` prop): `Ivory` (default), `Stone` (cooler grey), `Warm` (deeper cream). Accent is tweakable via the `accent` prop — curated to bronze / deep-bronze / forest / ink.

Selection color: bronze on white. Keep all whites/creams under ~0.02 chroma.

---

## 3. Typography

Three families, each with a fixed job:

- **Newsreader** (serif) — display & editorial. Headlines, pull-quotes, stats, project names. Weights 300 (large quotes), 400 (headings), 500 (wordmark). Italic for attributions.
- **Hanken Grotesk** (sans) — UI & body. Nav, buttons, paragraphs, form fields. Weights 400–700.
- **Space Mono** (monospace) — eyebrows, labels, meta, stat captions, kickers. Always UPPERCASE with wide letter-spacing (`.14em`–`.32em`), small (9–12px).

**Rhythm:** every section opens with a Space Mono eyebrow → Newsreader heading → Hanken body. This three-voice cadence is the core of the identity — keep it consistent.

Headline sizing uses `clamp()` and `text-wrap:balance`. Body ~16–19px, line-height 1.6–1.72.

---

## 4. Layout & spacing

- Content max-width **1200px**, 32px side padding. Narrow reading columns (`760px`) for long prose.
- Generous vertical rhythm — sections at `96–104px` padding. Let the page breathe; whitespace signals confidence.
- **Hairline grids:** stats, verticals and value cards use `--rule` borders (left-border columns, 1px-gap grids) rather than heavy cards or shadows. Editorial, not app-like.
- Sticky translucent header (blur + saturate), 72px tall.
- Corner radius kept tiny (2–3px) — architectural, not soft. Shadows used sparingly (only the floating "25+ yrs" stat card).

---

## 5. Components & patterns

- **Buttons:** dark ink fill (primary) or hairline outline (secondary); uppercase Hanken, `.12em` tracking, 2px radius. Hover → deep bronze.
- **Eyebrow label:** Space Mono, bronze-deep, uppercase, wide tracking — precedes most headings.
- **Stat block:** big Newsreader number + Space Mono caption.
- **Pull-quote:** centered Newsreader 300, balanced, with italic attribution.
- **Project card:** image → status tag (Ongoing = bronze, Completed = ink) → name → location → area.
- **Image placeholders:** diagonal-striped cream boxes with a Space Mono caption naming the intended asset. These are stand-ins — see §7.

---

## 6. Imagery

- **Real photography is the highest-priority credibility asset.** Placeholders must be replaced with real project, portrait, and editorial photos.
- Prefer warm, natural-light architectural photography that matches the ivory/bronze palette.
- Never hand-draw SVG illustrations. Until real assets arrive, use the striped-placeholder pattern with a clear monospace label.

---

## 7. Credibility backlog (design → proof)

The look is credible; the *content* must earn it. Priority order:

1. **Replace all placeholders** with real project & portrait photography.
2. **Add RERA / MahaRERA registration numbers** on every project card; CREDAI / NAREDCO membership badges in the footer.
3. **Named testimonials** (family + project) to back the "1,000+ families" stat.
4. **Possession / handover dates** on completed projects so "40+ / 3M+ sq.ft" is verifiable.
5. **Press strip:** use real logos linking to real coverage — or remove it. No unverifiable claims.
6. **Blog:** publish real notes or hide the section until content exists. No fictional dated posts.

Rule of thumb: *every claim on the page should be checkable.* Prefer fewer, provable facts over impressive-but-unbacked numbers.

---

## 8. Technical notes

- Single Design Component; page state held in `this.state.page`, sections toggled with `<sc-if>`.
- All styling inline (per DC conventions); CSS custom properties set on `body` and overridden per-instance via `rootStyle`.
- Tweakable props: `accent` (color) and `theme` (Ivory / Stone / Warm).
- Fonts loaded via Google Fonts in `<helmet>`.
