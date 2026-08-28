# Design QA

## Comparison setup

- Source visual truth: `/Users/shashankpabitwar/.codex/generated_images/01a044ea-6899-72f0-9c77-a12699635e35/exec-70552b2c-c09a-4b9b-bac2-91221dbe607b.png`
- Source pixels: 864 × 1821 at 1× density.
- Implementation URL: `http://127.0.0.1:4173/`
- Desktop viewport: 1440 × 1000 CSS pixels at 1× density.
- Mobile viewports: 578 × 814 CSS pixels (matching the annotation viewport) and 390 × 844 CSS pixels.
- Desktop implementation screenshot: `/Users/shashankpabitwar/Documents/Codex/2026-08-27/now/work/portfolio-redesign/qa/qa-desktop-hero-final.png`
- Project implementation screenshot: `/Users/shashankpabitwar/Documents/Codex/2026-08-27/now/work/portfolio-redesign/qa/qa-desktop-projects-final.png`
- Mobile implementation screenshots: `/Users/shashankpabitwar/Documents/Codex/2026-08-27/now/work/portfolio-redesign/qa/qa-mobile-hero-1.png` and `/Users/shashankpabitwar/Documents/Codex/2026-08-27/now/work/portfolio-redesign/qa/qa-mobile-prep-images-1.png`
- Combined comparison evidence: `/Users/shashankpabitwar/Documents/Codex/2026-08-27/now/work/portfolio-redesign/qa/qa-comparison-final.png`
- State: loaded portfolio with no modal or hover state active.
- Normalization: the ImageGen result is a long-page 864-pixel-wide schematic, not a literal browser capture. For comparison, its top and project regions and the matching 1440-pixel implementation screenshots were placed in equal 1.44-aspect-ratio frames in one browser-rendered comparison page.

## Findings

- No actionable P0, P1, or P2 issues remain.
- Fonts and typography: the implementation keeps the selected direction's editorial serif display type, neutral sans-serif body type, small monospace labels, strong hierarchy, and readable body size. The hero wording is intentionally simpler than the mock because the user requested `Data Analyst` instead of an abstract headline.
- Spacing and layout rhythm: the implementation preserves the wide shell, generous whitespace, thin rules, left text/right proof layout, and restrained section spacing. Education and Experience were intentionally moved before Projects after the user changed the content order.
- Colors and visual tokens: warm off-white, soft neutral sections, near-black type, and cobalt links match the selected direction. Text and link contrast remain clear on both light backgrounds.
- Image quality and asset fidelity: all six supplied screenshots load at their real dimensions. PrepInterview AI's product and Tableau screenshots are separate, stacked, equal-size panels in the same section on desktop and mobile. No project image is replaced by a placeholder, drawing, or fabricated asset.
- Copy and content: headings are direct and simple. `Data portfolio` and `Other projects` were removed, and all graduation wording now says `Graduated May 2026`. The PrepInterview Tableau disclosure clearly states that the data is synthetic and does not represent real users or business results. Project metrics, experience dates, education, credentials, and links follow the supplied data résumé and verified project sources.
- Responsiveness: the 578 × 814 and 390 × 844 mobile views have no horizontal overflow. `Arizona State University` stays on one line at both widths, the project layout collapses to one column, both PrepInterview images remain equal width, and the navigation menu opens, closes, and moves to the selected section.
- Accessibility and interaction: heading order is valid, images have useful alternative text, keyboard focus styles are visible, external links use `noopener`, the skip link is present, reduced motion is respected, and there are no duplicate IDs.

## Interaction checks

- Desktop navigation: Education, Experience, and Projects links moved to the correct sections.
- Main CTA: View projects moved to `#projects`.
- Mobile navigation: Menu opened, changed to Close, closed after selection, and updated `aria-expanded` correctly.
- Media: six of six supplied project images loaded successfully after lazy-loading their sections.
- Resume: the only visible résumé link points to `resume.pdf`, which matches `RESUME DATA.pdf` byte-for-byte.
- Browser console: no warnings or errors.
- Credentials: seven linked credentials and certifications are visible; all seven item URLs and the full wallet URL returned HTTP 200.
- Annotation layout: the `More work on GitHub` heading is centered exactly within its section at mobile and desktop widths.
- Section-title alignment: `Arizona State University`, `Experience`, and `Selected projects` are centered against the full content shell. Their blue field labels remain left-aligned and sit 8 pixels above the title on desktop; mobile places each label clearly above its centered title.
- Credential placement: the standalone Credentials section follows the complete Projects section and precedes Contact. It uses two compact rows at 1440 pixels, two columns at 578 pixels, and one readable column at 390 pixels; all seven links remain present.

## Comparison history

- Pass 1: the combined comparison found no actionable P0, P1, or P2 mismatch. The implementation keeps the selected visual system while applying the user's later content changes: simple hero wording, Education first, Experience second, Projects third, and two equal PrepInterview images. No visual fix loop was required after this comparison.

## Open questions

- None.

## Implementation checklist

- [x] Remove the portrait and dual-role positioning.
- [x] Use one data résumé.
- [x] Put Education before Experience and Projects.
- [x] Keep headings and descriptions simple.
- [x] Put PrepInterview AI first with two separate, equal linked images.
- [x] Add PixelPlanes, CFPB, Airline, and NYC Taxi in the requested order.
- [x] Add OrgPath, Global Career, OrgInsights, and credential links.
- [x] Add smaller GitHub projects without giving them the same weight as the main work.
- [x] Apply all six browser annotations, including the one-line university heading, complete credential list, updated graduation copy, and centered GitHub heading.
- [x] Center all main field titles and raise their blue section labels consistently on desktop and mobile.
- [x] Move Credentials after Projects and reduce it to a compact, simple linked list.
- [x] Verify desktop, mobile, navigation, images, resume, and console.

## Follow-up polish

- No blocking polish remains. Hero scale can be tightened later if the user prefers an even denser first screen.

final result: passed
