# Design Rules — Sagar Barot Website

This file encodes the DESIGN.md into enforceable rules for any AI agent working on this project.
Read it before generating any UI code, color value, type style, or layout decision.

---

## 1. Voice & positioning

- Position Sagar as a **second-generation builder** — heritage + discipline. Warmth of a family business, rigour of a modern practice.
- Tone: measured, honest, understated. No hype, no superlatives beyond what can be proven.
- Tagline: *Experience the Best · Expect the Next*
- Recurring themes: **intent, transparency, longevity, integrity.**
- Every claim on the page must be checkable. Prefer fewer, provable facts over impressive-but-unbacked numbers.

## 2. Color palette — must match exact hex values

- `--bg`: `#F4EFE6` — page background (ivory)
- `--panel`: `#FBF8F2` — raised sections, cards, footer
- `--accent`: `#97703F` — bronze, accents, active states, tags
- `--accent-deep`: `#6E4F2A` — deep bronze, labels, hovers, links
- `--ink`: `#1B1916` — primary text, dark CTA sections
- `--ink2`: `#5C564C` — body / secondary text
- `--ink3`: `#8A8478` — meta, captions, muted labels
- `--rule`: `rgba(27,25,22,.14)` — hairline dividers & borders
- No color brighter than bronze (`#97703F`). Low saturation throughout.
- Alternate themes: `Ivory` (default), `Stone` (cooler grey), `Warm` (deeper cream). Accent tweakable via prop — curated to bronze / deep-bronze / forest / ink.

## 3. Typography — three fixed families

| Family | Role | Weights | Style |
|--------|------|---------|-------|
| **Newsreader** (serif) | Display & editorial — headlines, pull-quotes, stats, project names | 300 (quotes), 400 (headings), 500 (wordmark) | Italic for attributions |
| **Hanken Grotesk** (sans) | UI & body — nav, buttons, paragraphs, form fields | 400–700 | — |
| **Space Mono** (monospace) | Eyebrows, labels, meta, stat captions, kickers | always UPPERCASE | `.14em`–`.32em` letter-spacing, 9–12px |

- Every section must follow the **three-voice cadence**: Space Mono eyebrow → Newsreader heading → Hanken body.
- Headline sizing: use `clamp()` and `text-wrap:balance`.
- Body: ~16–19px, line-height 1.6–1.72.

## 4. Layout & spacing

- Content max-width: **1200px**, 32px side padding.
- Narrow reading columns: **760px** for long prose.
- Vertical rhythm: sections at **96–104px** padding. Generous whitespace signals confidence.
- Use **hairline grids** (`--rule` borders, 1px-gap grids) for stats, verticals, value cards. No heavy cards or shadows.
- Sticky translucent header: blur + saturate, 72px tall.
- Corner radius: 2–3px (architectural, not soft). Shadows used sparingly (only the floating "25+ yrs" stat card).

## 5. Components & patterns

- **Buttons:** dark ink fill (primary) or hairline outline (secondary); uppercase Hanken, `.12em` tracking, 2px radius. Hover → deep bronze.
- **Eyebrow label:** Space Mono, `--accent-deep`, uppercase, wide tracking — precedes most headings.
- **Stat block:** big Newsreader number + Space Mono caption.
- **Pull-quote:** centered Newsreader 300, balanced, with italic attribution.
- **Project card:** image → status tag (Ongoing = bronze, Completed = ink) → name → location → area.
- **Image placeholders:** diagonal-striped cream boxes with a Space Mono caption naming the intended asset.

## 6. Imagery

- Real photography is the highest-priority credibility asset. Placeholders must be replaced eventually.
- Prefer warm, natural-light architectural photography matching the ivory/bronze palette.
- Never hand-draw SVG illustrations. Use the striped-placeholder pattern with a clear monospace label until real assets arrive.

## 7. Credibility backlog (priority order)

1. Replace all placeholders with real project & portrait photography.
2. Add RERA / MahaRERA registration numbers on every project card; CREDAI / NAREDCO badges in footer.
3. Named testimonials (family + project) to back the "1,000+ families" stat.
4. Possession / handover dates on completed projects.
5. Press strip: use real logos linking to real coverage — or remove it. No unverifiable claims.
6. Blog: publish real notes or hide until content exists.

## 8. Technical constraints

- Single Design Component; page state in `this.state.page`, sections toggled with `<sc-if>`.
- All styling inline (per DC conventions); CSS custom properties on `body`, overridden per-instance via `rootStyle`.
- Tweakable props: `accent` (color) and `theme` (Ivory / Stone / Warm).
- Fonts loaded via Google Fonts in `<helmet>`.
