# CloudSci AI editorial system

CloudSci AI publishes one practical engineering article each week. The goal is not to summarize AI news; it is to document durable patterns at the boundary between AI applications and production cloud platforms.

## Editorial pillars

1. **AI engineering** — evaluations, agents, retrieval, model operations, safety boundaries, and human review.
2. **Cloud platforms** — landing zones, identity, private networking, governance, FinOps, and resilience.
3. **Kubernetes and infrastructure as code** — AKS, workload identity, Terraform, GitHub Actions, GitOps, and policy.
4. **Production practice** — observability, security, failure modes, architecture decisions, and incident learning.

## Weekly cadence

- Monday: choose one engineering question and write the claim.
- Tuesday: build or validate the example.
- Wednesday: write the first draft.
- Thursday: technical and security review.
- Friday: publish, share, and record follow-up questions.

## Eight-post starting sequence

1. Why CloudSci AI exists.
2. The platform beneath an AI application: identity, network, data, and telemetry.
3. Minimum viable evaluations for an internal AI assistant.
4. Workload identity for AI services on AKS without stored secrets.
5. Terraform module boundaries for an Azure AI platform foundation.
6. Production RAG: the retrieval checks that matter before model quality.
7. Observability for LLM applications: traces, costs, errors, and user feedback.
8. Human approval patterns for infrastructure and operations agents.

## Article quality gate

- The problem and audience are explicit.
- Assumptions and non-goals are visible.
- The mechanism is explained, not merely named.
- Failure modes and security boundaries are included.
- Claims are supported by code, evidence, primary documentation, or clearly labelled experience.
- The conclusion gives the reader a practical next step.
- Secrets, employer-confidential information, personal data, and proprietary architecture details are absent.

## Writers worth studying

- Chip Huyen — broad AI engineering systems thinking and clear conceptual frameworks.
- Simon Willison — frequent, transparent field notes with strong primary-source links.
- Eugene Yan — applied ML articles structured around implementation and validation.
- Hamel Husain — opinionated practitioner writing grounded in experiments and evaluation practice.

Study their clarity, evidence, and publishing habits. Do not imitate their voice or visual identity.

## Publishing a post

Create a Markdown file in `_posts` named `YYYY-MM-DD-short-title.md`. Copy `_drafts/post-template.md`, complete its front matter, write the article, and push to `main`. GitHub Pages builds and publishes it automatically.

