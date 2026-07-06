# Astro Conversion Rules — Sagar Barot Website

This file captures the plan and constraints for converting the existing static HTML/dc-runtime site to Astro.
Read this before generating any Astro code, components, or layouts.

---

## 1. Project structure (target)

```
src/
  layouts/
    BaseLayout.astro       # HTML shell, fonts, global CSS, header, footer
  pages/
    index.astro            # Home
    about.astro            # About
    ventures.astro         # Ventures
    blog.astro             # Blog
    contact.astro          # Contact
  components/
    Header.astro           # Sticky nav bar (shared)
    Footer.astro           # Footer (shared)
    HeroSection.astro      # Reusable section wrapper
    StatBlock.astro        # Stats grid
    PullQuote.astro        # Centered quote
    ProjectCard.astro      # Project card for ventures grid
    PostCard.astro         # Blog post card
    ContactForm.astro      # Contact form with client-state
    Newsletter.astro       # Email signup
    PressStrip.astro       # Featured logos
    ValueCard.astro        # Values grid card
    TimelineItem.astro     # Timeline entry
    VerticalCard.astro     # Vertical card
  data/
    site.js                # All content data extracted from renderVals()
  styles/
    global.css             # CSS custom properties, reset, base styles
public/
  support.js               # Keep only if needed; eventually remove
```

## 2. Conversion process

### Phase 1 — Scaffold
- `npm create astro@latest` in project root (empty, no template)
- Move existing files: `index.html`, `about.html`, `ventures.html`, `blog.html`, `contact.html` → `src/pages/` as `.astro`
- Create `src/layouts/BaseLayout.astro` with shared HTML shell
- Create `src/styles/global.css` with the CSS custom properties and reset

### Phase 2 — Extract shared shell
- Pull header and footer into `Header.astro` and `Footer.astro`
- Header nav uses `<a href="/about/">` for navigation, not `location.href`
- Active nav state uses `Astro.url.pathname`
- Extract `src/data/site.js` with all data arrays (stats, values, timeline, verticals, projects, posts, press)
- Ensure data files are plain JS/TS exports, not tied to any framework runtime

### Phase 3 — Extract components
- Move each major section into its own `src/components/*.astro`
- Inline styles from the original HTML should be extracted into CSS classes in `global.css` or scoped `<style>` blocks
- Use the **exact** color/tipography values from DESIGN.md (captured in `design.md` rules)
- Preserve the three-voice cadence: Space Mono eyebrow → Newsreader heading → Hanken body

### Phase 4 — Convert dc-runtime patterns
- `<sc-for list="{{ stats }}" as="s">` → Astro `{stats.map(s => ...)}`
- `<sc-if value="{{ isHome }}">` → Astro conditionals or separate pages (already done at file level)
- `{{ s.n }}` → `{s.n}` (Astro expression syntax)
- `{{ rootStyle }}` → replace with CSS custom properties on `<html>` or `<body>`
- `style-hover="..."` attribute → CSS `:hover` pseudo-class
- `style-focus="..."` attribute → CSS `:focus` pseudo-class
- `onClick="{{ handler }}"` → standard `onclick` or addEventListener in `<script>`

### Phase 5 — Client interactivity
- Contact form `sent` state → client island (`client:load`) with vanilla JS or a tiny framework
- Blog "Subscribe" newsletter → client island
- No heavy JS frameworks in islands. Use vanilla `<script>` in `.astro` components where possible.
- Navigation highlighting via `Astro.url.pathname` (server-rendered, no JS needed)

## 3. Critical rules

### Must preserve
- Exact hex color values from `design.md`
- Exact font families and weights
- All content text verbatim from the existing HTML files
- The ivory/bronze visual identity and layout proportions

### Must NOT carry forward from dc-runtime
- `<x-dc>` custom element
- `DCLogic` class
- `sc-if`, `sc-for` custom tags
- `data-dc-*` attributes
- `{{ }}` template syntax (convert to `{ }`)
- `style-hover`, `style-focus` attributes
- `support.js` runtime (remove after conversion is verified)

### CSS strategy
- Convert all inline styles from the existing HTML into scoped `<style>` blocks in Astro components
- Group common patterns into `global.css`:
  - CSS custom properties on `:root`
  - Button base styles
  - Typography utilities
  - Layout utilities (max-width, padding)
- Keep component-specific styles co-located in the `.astro` file

### Navigation
- Replace `window.location.href` navigation with `<a>` tags
- Use `Astro.url.pathname` for active nav state
- No client-side routing — Astro does MPA by default

### Contact form
- Client island with `client:load`
- Vanilla JS: form submit handler prevents default, shows "Thank you" state
- No backend needed yet — current behavior is just client-side state toggle

## 4. Data flow

All content data lives in `src/data/site.js`:
```js
export const stats = [...]
export const values = [...]
export const timeline = [...]
export const verticals = [...]
export const projects = [...]
export const posts = [...]
export const press = [...]
export const navItems = [...]
```

Each page imports only what it needs. No prop drilling — Astro pages pass data directly to components as props.

## 5. Verification

After each phase, the site must:
1. Render all pages without runtime errors
2. Match the original visual output (compare side-by-side)
3. Navigation between pages works
4. Contact form client-state toggle works
5. No dc-runtime artifacts remain in the final output
6. `npm run build` succeeds with no errors
7. `npm run preview` shows all pages correctly
