# CloudSci AI website

The source for [cloudsci.ai](https://cloudsci.ai), the public home of CloudSci AI.

CloudSci AI is a weekly engineering publication about cloud platforms, Kubernetes, infrastructure as code, and production AI systems.

## Publishing a weekly article

Articles are plain Markdown files. Start from `_drafts/post-template.md`, then save the finished article as:

```text
_posts/YYYY-MM-DD-short-title.md
```

Each post begins with a small metadata block:

```yaml
---
title: "A clear, specific title"
subtitle: "One sentence explaining the practical value."
description: "A concise search and social description."
category: "AI Engineering"
tags: [ai-engineering, evaluation, production]
author: "Gowrisha C. Vishwa Kumar"
reading_time: "8 min"
---
```

Write the article below that block, preview it, then push it to `main`. The homepage, blog index, RSS feed, and sitemap update automatically. The editorial schedule and quality checklist are in [`EDITORIAL.md`](EDITORIAL.md).

## Local preview

The site is generated with Jekyll, the publishing engine supported by GitHub Pages.

```bash
jekyll serve
```

Open <http://localhost:4000>.

## Deployment

Every push to `main` runs [`.github/workflows/pages.yml`](.github/workflows/pages.yml). The workflow builds the Jekyll publication, uploads the generated site, and deploys it to GitHub Pages. Pull requests run the build without publishing. The workflow can also be started manually from the Actions tab.

The `CNAME` file configures the custom domain as `cloudsci.ai`. DNS records are managed separately and are intentionally not changed by this repository.

Repository administrators must select **GitHub Actions** as the Pages source in **Settings → Pages**. After DNS points to GitHub Pages and the certificate is available, enable **Enforce HTTPS**.

## Structure

```text
.
├── .github/workflows/pages.yml  # Pages deployment
├── _drafts/                     # Reusable writing template
├── _includes/                   # Shared publication header and footer
├── _layouts/                    # Page and article layouts
├── _posts/                      # Weekly Markdown articles
├── blog/index.html              # Publication index
├── CNAME                        # Custom domain
├── EDITORIAL.md                 # Schedule, standards, and topic plan
├── feed.xml                     # RSS feed
├── index.html                   # Homepage and latest writing
├── styles.css                   # Responsive visual design
├── theme.js                     # Persistent light/dark theme control
├── favicon.svg                  # Brand favicon
└── sitemap.xml                  # Search discovery for pages and posts
```

## Accessibility and quality

The site uses semantic landmarks, a skip link, visible keyboard focus, accessible link names, responsive layouts, and reduced-motion support. Before merging visual changes, check keyboard navigation, 200% zoom, color contrast, and both light and dark system themes.

## License

[MIT](LICENSE)
