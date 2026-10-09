# Part 2: AI Product Thinking

## Studio COKA Climate Brief

**What it does.** A visitor answers five questions about a planned building (city, plot orientation, building type, budget range, and what bothers them most: heat, power cuts, flooding). In under a minute they receive a one-page climate brief: the passive design strategies that suit their site (shading, cross-ventilation, materials, solar), what Studio COKA would explore first, and the questions to settle before design starts.

**Who it is for.** Homeowners, developers and organisations in Nigeria considering a new build or renovation, especially those who have never worked with an architect.

**The problem.** Most prospective clients don't know what climate-responsive design means for their site, so they arrive with vague briefs and the studio spends its first meetings explaining basics. The tool educates before the first call and produces better-qualified enquiries.

**How someone uses it.** From the "Build with her" path: answer the questions, read the brief, then send it to Studio COKA in one click. The enquiry form is pre-filled with the brief attached.

**Technology.** A frontier language model (such as Claude) through its API, for clear, well-structured writing, combined with deterministic data the model must not invent: local climate figures from NASA POWER (temperature, humidity, solar radiation) and the studio's own design principles and case studies, retrieved and supplied as context.

**First version.** One Next.js page and Server Action. Inputs validated with Zod, climate data fetched by city, the model asked for structured output (validated against a schema), rendered as a printable page. No accounts, no database.

**Risks and safeguards.** Clearly labelled as guidance, not engineering or cost advice. Numbers come from data, never from the model. Studio architects review twenty sample briefs before launch. Rate limiting and a monthly spending cap. No addresses stored without consent.
