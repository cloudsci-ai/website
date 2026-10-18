# Personal portfolio rebuild

## Objective and inspection

Make cloudsci.ai clearly the personal technical portfolio of Gowrisha C. Vishwa Kumar.

Inspected `index.html`, `resume.html`, `styles.css`, `theme.js`, the existing portrait, favicon, both posts, blog index, shared layouts/includes, Jekyll configuration, feed/sitemap/robots, editorial material, Git history, and Pages workflow. The base is commit `008d9f6`.

The site is static HTML/CSS/JavaScript with Jekyll/Liquid for posts and shared pages. There is no application package manifest or framework runtime. GitHub Pages uses the Actions workflow and the `cloudsci.ai` CNAME. PR builds do not deploy. Preserve this architecture.

The old homepage used Organization schema, collective language, an invented module example, and capability/project claims stronger than the linked repositories support.

## Architecture decisions

- Keep Jekyll and GitHub Pages. A framework migration adds maintenance without serving the portfolio.
- Use a personal, portrait-led home with six numbered sections. Project details and longer notes have dedicated URLs.
- Keep cloudsci.ai as the technical brand; use first-person copy, Person schema, and personal profile links.
- Use restrained blue, a pale canvas, large personal typography, and an explicit light/dark switch. Default to light; persist visitor choice. No external fonts or animation dependency.
- Review inspiration: Bedimcode's `portfolio-responsive-complete`, `responsive-portfolio-website-rian`, and `responsive-portfolio-website-chris`, from the user-provided responsive portfolio topic. Use personal hero, sectional navigation, responsive layouts, and theme support as general patterns. No template code or assets were copied.
- Keep existing article URLs, résumé, feed, portrait, and domain. Isolate résumé styles so portfolio changes do not remove its print layout.
- Prefer two evidence-backed case studies over a catalogue of empty starter repositories. Keep landing-zone/AKS plans visibly separate.

## Evidence review

Repository contents inspected on 2026-10-18:

- `gowrishacv/azure-ai-agent-poc`: substantial app, infrastructure, tests, delivery and documentation. Its README explicitly calls it a POC and warns that default ingress is public/unauthenticated. Link security and cost notes. No live deployment verification performed.
- `cloudsci-ai/greenops-ai`: bootstrap storage, networking module, development environment, validation/plan pipeline. The README is empty. Do not imply a deployed FinOps product or savings.
- `cloudsci-ai/azure-landing-zone` and `aks-platform`: LICENSE and starter README only. Label as planned.
- Existing `resume.html`: source for role, contact links, and listed certifications. Renewal dates/credential URLs were unavailable; do not claim verified active status.
- GreenOps enterprise blueprint context is architecture/design evidence only; no private vault content is copied into this repository.

## Status and implementation

Implemented the home, shared navigation/footer, note index, project detail layout and case studies, responsive styles, theme behavior, personal search metadata, README, and sitemap additions. Existing historical articles and résumé professional claims remain editorial source material rather than independently audited facts.

## Security, observability, and cost

Static delivery requires no new backend, secrets, forms, analytics, or Azure resources. Direct contact links avoid a form service. Existing GitHub Actions build/deploy visibility is retained. No new hosting spend is introduced.

## Next work and portfolio readiness

Add credential verification URLs and renewal dates. Publish project build/test evidence tied to commit SHAs and a recorded demo. Treat current project pages as evidence summaries; production deployment and GreenOps cost outcomes remain unverified. Starter AKS and landing-zone projects need implementation before promotion to selected work.

Deployment remains PR-only until merge. Existing production domain and main branch are not overwritten by this branch.

## Validation

- Existing GitHub Pages Jekyll PR build passed. Deployment job skipped as intended.
- Generated output: 7 HTML pages and 177 internal links/assets checked; no missing local targets or fragments. RSS and sitemap parsed as XML.
- JavaScript syntax and Git whitespace checks passed.
- Browser review: desktop at 1440px and mobile at 390px; no document horizontal overflow at those sizes. Reviewed light and dark themes, mobile menu open/close, project and article layouts, loaded article imagery, theme persistence across reload, résumé mobile layout, keyboard skip-link focus, and emulated print styles.
- Adjusted heading tracking and mobile line-break whitespace after visual review.
- Full accessibility audit, browser 200% zoom, and physical print pagination were not completed. Project deployments, project test suites, employment metrics, and certification validity remain outside this website validation.

The existing Jekyll workflow is the authoritative build check. No production deployment was triggered.
