---
layout: project
title: Azure AI Agent
description: A reference RAG application exploring identity, infrastructure delivery, and operational controls on Azure.
permalink: /projects/azure-ai-agent/
status: Reference POC · Code available
repository: https://github.com/gowrishacv/azure-ai-agent-poc
---
<div class="detail-summary"><p><strong>Objective:</strong> Build an inspectable Azure AI application with infrastructure and delivery controls alongside the application code.</p><p><strong>Evidence:</strong> Public application code, Terraform, tests, pipeline definitions, and architecture documentation.</p><p><strong>Deployment:</strong> A live deployment and production readiness have not been independently verified for this portfolio.</p></div>

## The engineering problem

An AI application needs more than a model endpoint. This project explores how retrieval, runtime identity, infrastructure state, deployment approval, and telemetry fit into a bounded Azure proof of concept.

## Architecture and implementation

The repository combines a FastAPI application on Azure Container Apps with Azure AI Search and Microsoft Foundry / Azure OpenAI. Terraform defines the platform, and an Azure DevOps pipeline defines validation, planning, approval, and deployment stages.

- [Application and connector contracts](https://github.com/gowrishacv/azure-ai-agent-poc/tree/main/app)
- [Terraform infrastructure](https://github.com/gowrishacv/azure-ai-agent-poc/tree/main/infra)
- [Tests](https://github.com/gowrishacv/azure-ai-agent-poc/tree/main/tests)
- [Architecture and trust boundaries](https://github.com/gowrishacv/azure-ai-agent-poc/blob/main/docs/architecture.md)

## Decisions worth examining

**Separate deployment and runtime identities.** The platform uses managed identity for application access and workload identity federation for pipeline authentication. These have different permission requirements.

**Keep the platform small.** Container Apps hosts the workload. Kubernetes is not required for this application. Optional private networking adds a different cost and operational profile.

**Make retrieval authority explicit.** Retrieved content is untrusted input. The repository documents authorization-aware retrieval and connector contracts; those still require tenant-specific configuration and validation before use with real data.

Read the [platform-shape ADR](https://github.com/gowrishacv/azure-ai-agent-poc/blob/main/docs/decisions/adr-001-platform-shape.md).

## Security, observability, and cost

The repository's default demo API is publicly reachable and unauthenticated. Entra authentication, access restrictions, and the documented hardening work must be reviewed before real users or private data are introduced.

The project includes Application Insights / Log Analytics configuration, bounded scaling, lifecycle cleanup, and cost-guard material. Their presence in source is evidence of implementation intent, not confirmation of a currently running control.

- [Security controls and gaps](https://github.com/gowrishacv/azure-ai-agent-poc/blob/main/docs/security.md)
- [Cost controls and cleanup](https://github.com/gowrishacv/azure-ai-agent-poc/blob/main/docs/cost.md)
- [Deployment runbook](https://github.com/gowrishacv/azure-ai-agent-poc/blob/main/docs/deployment.md)

## Validation and next work

Tests are available in the source repository. This portfolio rebuild did not execute those tests or deploy the application. A reproducible deployment record, test results tied to a commit, and a recorded demo would strengthen the case study.

[Read my accompanying engineering note]({{ '/blog/production-style-ai-agent-on-azure/' | relative_url }}).
