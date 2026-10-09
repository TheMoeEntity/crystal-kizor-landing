# Part 3: Analytics & Improvement

**What I'd track.** Where visitors come from, how far they scroll, which of the four paths they choose, and the enquiry funnel: form viewed, form started, submission attempted, validation errors, enquiry sent. Each step is split by path, source and device, alongside Core Web Vitals.

**Tools.** Vercel Analytics or Plausible (privacy-friendly, cookie-free) for traffic and custom events; Google Search Console for search; Vercel Speed Insights for real-user performance; Microsoft Clarity for heatmaps and session recordings.

**Using the data.** Review the funnel weekly, fix the biggest drop first, and change one thing at a time so each result is attributable.

**Scenario: 5,000 visitors, 5 enquiries (0.1%).**

1. **Is it broken?** Submit the form on mobile and Safari, check server logs for failed sends, and confirm enquiries aren't landing in spam. A silent failure looks exactly like low interest.
2. **Is the traffic right?** If most visits come from bots, irrelevant keywords or another country, the problem is acquisition, not the page.
3. **Where do people drop?** If 500 start the form and 5 finish, the form is the problem: too many fields or confusing errors. If only 10 reach it, the calls to action are.
4. **Does the offer match intent?** Many visitors may want to learn or follow, not commission.

Then I'd fix technical issues first, simplify the form, make the primary call to action visible earlier, and add lighter conversions (newsletter, WhatsApp) for visitors not ready to enquire. Re-measure after four weeks.
