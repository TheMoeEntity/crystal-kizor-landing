# Crystal Kizor — Research Notes

> Source material for the Stage 1 landing page. Lives in `docs/research.md` in the repo.
> Rule: every fact on the page must trace back to this file or the official brief. Nothing invented.

---

## 1. Crystal Kizor (the person)

| Field | Detail | Source |
|---|---|---|
| Role | Design Director, Studio COKA; leads creative direction across architecture and interiors | studiocoka.com/studio |
| Education | B.Sc Architecture, University of Nigeria; Master's in Interior Architecture, Coventry University (England) | studiocoka.com/studio |
| Further training | Sustainable Real Estate, University of Cambridge | studiocoka.com/studio |
| Recognition | Described as an award-winning entrepreneur and educator | studiocoka.com/studio |
| Signature work | Designer behind Nigeria's first off-grid hospital (completed 2019), before founding Studio COKA | studiocoka.com/studio |
| Core interest | Climate-responsive architecture; combining modern practice with contextual design to raise living standards | studiocoka.com/studio |
| Philosophy (studio) | Starts from the question of how humans were originally meant to live | studiocoka.com/studio |
| Portrait | `studiocoka.com/journal/crystal.jpeg` exists publicly (use only provided assets on final build) | studiocoka.com/studio |

**Not found publicly:** personal website, personal LinkedIn, list of awards, speaking history, publications.
→ Use the brief's wording for speaking/writing. Mark anything else as placeholder.

---

## 2. Studio COKA (anchor brand)

- **What:** Design-build studio — architecture, interior design, urban design.
- **Where:** Enugu, Nigeria; works across Africa and globally.
- **Positioning:** Climate-responsive, high-performance buildings that cut energy demand and improve comfort. Tagline on homepage: "Built for this climate. Designed for people."
- **Services:** Design & Build (one team, one contract) · Architecture Design only · Interior Design.
- **Process:** 7 stages — Briefing → Concept → Design Development → Technical Design → BoQ & Tendering → Construction Admin → Handover.
- **Headline claims (theirs):** up to 70% less energy demand, up to 90% less cooling, designed for off-grid performance.
- **Selectivity:** they take a limited number of projects per year.
- **Primary CTA on their site:** Hire Us → `https://studiocoka.com/hire`

### Projects (public)

| Project | Type | Location | Notes |
|---|---|---|---|
| International Event Center | Civic / Cultural | Enugu, NG | 2024; deep overhangs + layered facades to cut heat gain |
| Garden Home | Residential | Kigali, Rwanda | Featured in their journal on tropical homes |
| Pine Towers | Mixed-use | Enugu, NG | — |
| Nature Home 2 | Private residential | Enugu, NG | Linked from their "see how it works" performance section |
| TESH Nsukka | Healthcare / Renovation | Nsukka, NG | Derelict building → first eye hospital in Nsukka |

### TESH Nsukka — strongest proof point
- Fully solar, off national grid.
- Patient visits up 400%; diesel use down 95%.
- About ₦8M saved per year on energy; ~32 tonnes CO₂ avoided per year.
- Raised atrium + perimeter openings for natural ventilation (cool waiting area without AC dependence).
- Design aim: a hospital that feels like care, not a clinic.

⚠️ **Careful with wording:** Studio page credits Crystal with the off-grid hospital *before* Studio COKA existed; homepage presents TESH as a studio case study. On our page, attribute "Nigeria's first off-grid hospital" to **Crystal**, and link to the case study — don't claim it for the studio.

### Channels
- Instagram: https://www.instagram.com/studio.coka/
- LinkedIn: https://www.linkedin.com/company/studio-coka/
- YouTube: https://www.youtube.com/channel/UC21NBowgir5hC8ZStfBCXIg
- Pinterest: https://pin.it/7FuxETsDC
- X: https://x.com/studiocoka

### Tech note
Their site is built with **Next.js** (`/_next/image` URLs). Our stack choice matches theirs — mention in the note.

---

## 3. Other brands — no public footprint found

| Brand | What we know (from brief only) | Link |
|---|---|---|
| AKO Alliance | Expanding access to education and opportunity for children and young people | placeholder |
| ELEvated | Contemporary furniture & products rooted in African context, materials, ideas | placeholder |
| The Effective Architect (TEA) | Education + media platform for architects' learning and careers | placeholder |
| Speaking | Architecture, climate-responsive design, African cities, entrepreneurship, built environment | → enquiry form |
| Alive and Free | Christian youth movement: truth, healing, freedom, identity, purpose in Christ | placeholder |
| Personal (research, writing, media) | Sits directly under the Crystal Kizor name | Studio COKA journal as interim |

⚠️ **Name collision:** "Alive & Free" (stayaliveandfree.org) is an unrelated US violence-prevention program. **Do not link it.**

---

## 4. Implications for the build

1. **Thesis line** should grow out of her own philosophy (how people were meant to live) and the studio's climate + people framing, extended beyond buildings to objects, ideas and communities.
2. **Hero proof:** the hospital metrics. Hard numbers beat adjectives for a high-trust audience.
3. **Don't rebuild Studio COKA's site.** It already exists and is good. Our page *routes* "Build with her" visitors to `studiocoka.com/hire` and the project case studies.
4. **Four brands with no public presence** get brief-sourced copy and clearly marked placeholder links, stored in `content/brands.ts` so real URLs drop in later.
5. **Never fabricate** awards, quotes, talk titles or project facts on a real person's brand.
