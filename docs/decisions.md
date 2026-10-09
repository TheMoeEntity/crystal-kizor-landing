# Decisions

Why this project is built the way it is. Each entry records the decision, the reason, and the trade-off accepted.

---

## Engineering standards

I prioritise standardised, DRY code. These rules apply to every file in the repository:

- **No inline types.** Every type and interface lives in `src/types/`. Component props, API shapes and domain models are all importable and reusable.
- **Shared helpers are extracted immediately.** Any function needed by more than one component moves to `src/utils/` (or `src/lib/` for clients and singletons) so it can be reused, not copied. Examples: `cn`, `formatList`, `formatIsoDate`, `groupBrandsByIntent`, `getBrandHref`, `buttonStyles`, `toneStyles`, `fieldA11y`, `escapeHtml`.
- **One source of truth for vocabulary.** Runtime values such as `VISITOR_INTENTS` live in `src/constants/`, and types are derived from them (`(typeof VISITOR_INTENTS)[number]`), so the radio buttons, Zod schema and TypeScript types cannot drift apart.
- **Content is separate from code.** Every word on the page comes from `src/content/` through async getter functions. Components never hardcode copy, and the content can move to a CMS by changing only the getters.
- **One layer, one job.** Read path: page → section components → content repository. Write path: form → Server Action (validation) → service (business logic) → email client. The same layering I use in production backends.
- **Exhaustive handling.** Every `switch` over a union ends in `assertNever`, so adding a new variant (a new intent or link type) fails to compile until every place handles it.
- **Design tokens, not values.** Colours, type sizes and motion are defined once in `@theme` (`globals.css`). Components use tokens; raw hex values appear only in the email theme, where CSS variables are unsupported.

---

## Product and information architecture

**1. A router, not a directory.** The seven brands are grouped under four visitor intents (build, learn, book, support) instead of being listed side by side. *Why:* a first-time visitor knows what they want, not which brand provides it. *Trade-off:* smaller brands get less individual prominence.

**2. Proof before pitch.** The Work section opens with the off-grid hospital and its measured outcomes. The project is attributed to Crystal, not the studio, because Studio COKA's own site says she designed it before founding the studio.

**3. Route to Studio COKA rather than duplicate it.** Three projects are featured in depth; the full portfolio links to studiocoka.com. Projects without supplied imagery were left out rather than shown as text-only cards.

**4. Renders are labelled "Visualisation".** Two of the three supplied projects are computer-generated renders. Presenting them as completed buildings would misrepresent the work.

**5. No invented facts or links.** Brands with no public presence show "Website coming soon". "Alive & Free" (stayaliveandfree.org) is an unrelated US organisation and is deliberately not linked. All copy traces to the brief or to `docs/research.md`.

---

## Design

**6. Palette from the subject: shade and sunlight.** Concrete, limewash and canopy green, with ochre used only where sunlight would fall. The text colour (`ink`, `#241207`) is sampled from Crystal's logo so the wordmark and the page match. The common cream-and-terracotta "African architecture" palette was rejected as a default rather than a choice.

**7. Her wordmark is the main heading.** The `<h1>` is the supplied logo with `alt="Crystal Kizor"`, so screen readers and search engines read her name while visitors see her real identity. Her serif appears only in the logo; Archivo (one variable font file, normal and expanded widths) carries the rest.

**8. One bold element.** A breeze-block screen, a common feature of West African tropical modernism and of the supplied Community Centre renders, with sunlight drifting behind it. `mask-repeat: round` ensures only whole blocks are shown. Motion respects `prefers-reduced-motion`.

---

## Engineering

**9. Next.js, App Router, almost no client JavaScript.** Studio COKA's site already runs on Next.js. Every section is a Server Component; the only client component is the enquiry form. There is no hamburger menu: on a one-page site, scrolling is the navigation, and a menu would need client state.

**10. Deliberately small.** One app, no monorepo, no database, no CMS. These would add setup and explanation without benefit at this scope. The content layer is ready for a CMS when needed.

**11. Assets processed before entering the repo.** 83.9 MB of supplied originals became 6.5 MB of WebP (max 2400px, never upscaled). Metadata, including potential GPS coordinates of a client's home, is stripped. `next/image` serves AVIF or WebP at the size each device needs, with dimensions recorded to prevent layout shift.

**12. SEO without competing with her real name.** Full metadata, Open Graph, a sitemap and schema.org `Person` structured data are in place. Indexing is controlled by `SITE_INDEXABLE` (off for this demo) via a `noindex` meta tag. Crawling stays allowed, because blocking it in `robots.txt` would stop search engines from ever reading the `noindex` instruction.

**13. Configuration fails fast.** Environment variables are validated with Zod in `next.config.ts`, so an invalid value stops `next dev` and fails the deploy instead of breaking a visitor's request. Secrets live in `env.server.ts`, guarded by `server-only`, so importing them into client code is a build error.

**14. Breeze-screen mask applied inline.** A data-URI `mask-image` defined with `@utility` in `globals.css` was dropped by Next's CSS pipeline (the Tailwind CLI emits it correctly). The mask is applied as an inline style instead. Revisit after upgrading Next or Tailwind.

**15. The enquiry form.**
- A Server Action is a public endpoint, so all validation runs on the server with Zod, whatever the browser does.
- Intent is validated first; if it is missing, shared fields are still validated, so visitors see every error in one round trip.
- Intent-specific fields are shown with CSS `:has()`, not React state, so the form works before JavaScript loads and with JavaScript disabled.
- A honeypot field filters bots, which receive a fake success.
- Submitted values are returned with errors, because React 19 resets forms after an action.
- Logs record why a send failed, never the visitor's personal details.

**16. The enquiry email.** HTML and plain-text versions are rendered from one model, so they never disagree. Every visitor-supplied value is HTML-escaped. Subjects are tagged by intent (`[Project]`, `[Speaking]`) so one inbox can be filtered today.

---

## Deferred, with reasons

| Item | Why not yet |
|---|---|
| Rate limiting | Needs a shared store such as Upstash Redis; in-memory counters don't survive serverless instances. Next step if spam appears. |
| Acknowledgement email to visitors | Resend only sends to the account owner until a domain is verified. For this demo, enquiries go to the candidate's inbox; in production they would go to Studio COKA's. |
| Intent pre-selected from call-to-action links | Needs query parameters and soft navigation; one click on the form achieves the same. |
| Vector logo files | Only a raster logo sheet was supplied. SVG versions would be sharper at every size. |
| CMS | Not needed for one page. The content layer is designed for it. |
