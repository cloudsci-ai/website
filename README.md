# cloudsci.ai

The personal engineering portfolio of **Gowrisha C. Vishwa Kumar**, published at [cloudsci.ai](https://cloudsci.ai).

cloudsci.ai is the umbrella technical brand for my Azure, Terraform, Kubernetes, platform engineering, FinOps, and AI work.

## Information architecture

- **Home:** personal introduction, portrait, résumé, and direct profile links.
- **About:** engineering approach and background.
- **Projects:** evidence and status, with detailed pages for Azure AI Agent and GreenOps AI. Planned repositories are labelled separately.
- **Architecture / Engineering Notes:** articles at `/blog/`; existing article URLs and RSS remain available.
- **Skills / Tech Stack:** engineering focus areas, without proficiency scores.
- **Certifications:** official public badge images and personal verification links for matched résumé credentials; Credly expiry dates and pending verification are visible.
- **Contact:** direct email, LinkedIn, and GitHub links.

## Structure

```text
.github/workflows/pages.yml   Existing Jekyll build and GitHub Pages deployment
_config.yml                  Site metadata, author, URLs, and post defaults
_includes/                   Shared header and footer
_layouts/                    Default, post, and project layouts
_posts/                      Existing Markdown articles
projects/                    Evidence-based project case studies
blog/index.html              Engineering notes index
index.html                   Portfolio homepage
styles.css                   Responsive portfolio and article styles
resume.html / resume.css     Existing résumé content and isolated styles
theme.js                     Persistent theme toggle and mobile menu behavior
assets/                      Portrait and official certification badge images
_data/certifications.json    Shared résumé/homepage credentials and provenance
_includes/skill-icon.html    Six consistent decorative SVG skill icons
CNAME                        cloudsci.ai custom domain
feed.xml / sitemap.xml       Discovery and RSS
PORTFOLIO.md                  Inspection, decisions, evidence, and validation notes
```

## Preview and deployment

The site remains buildable with the existing GitHub Pages Jekyll action. No JavaScript framework, package install, external font, or new hosting service is required.

With Jekyll available locally:

```sh
jekyll serve
```

Every pull request targeting `main` runs the existing Jekyll build without deployment. Merging to `main` builds and deploys to GitHub Pages. Keep Pages configured to use GitHub Actions. `CNAME` and DNS are unchanged.

Make changes on a branch and open a PR. Existing articles use `_posts/YYYY-MM-DD-title.md` and the front matter in `_drafts/post-template.md`. Keep published URLs stable.

## Content evidence

Describe source code, documented designs, test results, and verified deployments separately. Project status is an editorial snapshot, not a live health indicator. Do not turn blueprint material into production claims or publish savings without measurements. Certification images and personal verification links are recorded in `_data/certifications.json`. Keep the checked date, issuer expiry dates, source image URLs, and pending status accurate. See `CREDENTIALS.md` for evidence boundaries.

The existing résumé and historical articles are retained as source content. Their historical employment metrics and deployment narratives were not independently audited by this redesign.

## Review checks

Check the generated homepage, project pages, notes index, both existing articles, résumé, RSS, and sitemap. Review mobile navigation, theme persistence, keyboard focus, portrait sizing, 200% zoom, article code/table overflow, and the résumé print view.

## License

[MIT](LICENSE)
