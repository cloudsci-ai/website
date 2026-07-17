# CloudSci AI website

The source for [cloudsci.ai](https://cloudsci.ai), the public home of CloudSci AI.

CloudSci AI shares practical, production-minded work across cloud platforms, Kubernetes, infrastructure as code, and AI engineering.

## Local preview

The site is static and has no package or framework dependencies.

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080>.

## Deployment

Every push to `main` runs [`.github/workflows/pages.yml`](.github/workflows/pages.yml). The workflow uploads the repository as a static Pages artifact and deploys it to GitHub Pages. It can also be started manually from the Actions tab.

The `CNAME` file configures the custom domain as `cloudsci.ai`. DNS records are managed separately and are intentionally not changed by this repository.

Repository administrators must select **GitHub Actions** as the Pages source in **Settings → Pages**. After DNS points to GitHub Pages and the certificate is available, enable **Enforce HTTPS**.

## Structure

```text
.
├── .github/workflows/pages.yml  # Pages deployment
├── CNAME                        # Custom domain
├── index.html                   # Semantic page content and SEO
├── styles.css                   # Responsive visual design
├── favicon.svg                  # Brand favicon
└── robots.txt                   # Search crawler guidance
```

## Accessibility and quality

The site uses semantic landmarks, a skip link, visible keyboard focus, accessible link names, responsive layouts, and reduced-motion support. Before merging visual changes, check keyboard navigation, 200% zoom, color contrast, and both light and dark system themes.

## License

[MIT](LICENSE)
