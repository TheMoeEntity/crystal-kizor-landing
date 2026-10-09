Crystal's work spans seven brands, so I designed the page as a router, not a directory. Every brand sits under one of four visitor paths: build with her, learn from her, book her, or support her mission. The page leads with proof, Nigeria's first off-grid hospital and its measured results, and each path ends in one enquiry form that adapts to the visitor's intent.

The visual direction comes from her own architecture: a breeze-block screen with drifting sunlight, her wordmark as the main heading, a palette sampled from her logo, and renders clearly labelled as visualisations.

I chose Next.js because Studio COKA's site already runs on it. The page is statically rendered with minimal client JavaScript, assets are optimised (84 MB down to 6.5 MB), and the form uses a Zod-validated Server Action with Resend email delivery. Structured data supports SEO, while a noindex guard keeps this demo out of search results for her name.

I prioritise standardised, DRY code: types live in a types folder, never inline; content sits behind a repository layer, ready for a CMS; any helper used in more than one place becomes a shared utility. Trade-offs are documented in docs/decisions.md.
