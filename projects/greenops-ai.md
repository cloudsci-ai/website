---
layout: project
title: GreenOps AI
description: Early Azure infrastructure work connecting platform governance, delivery, and FinOps design.
permalink: /projects/greenops-ai/
status: Early implementation · Architecture study
repository: https://github.com/cloudsci-ai/greenops-ai
---
<div class="detail-summary"><p><strong>Objective:</strong> Develop an Azure platform project with cost governance and operational concerns included in its design.</p><p><strong>Evidence:</strong> Remote-state bootstrap code, a networking module, a development environment, and an Azure DevOps Terraform pipeline.</p><p><strong>Deployment:</strong> Unverified. No production deployment, measured savings, or working AI cost recommendations are claimed.</p></div>

## What exists in code

The public repository is at an early stage. Its infrastructure structure separates bootstrap, environment configuration, and a networking module.

- [Bootstrap](https://github.com/cloudsci-ai/greenops-ai/tree/main/infrastructure/bootstrap) defines a resource group and Terraform state storage with shared keys disabled, versioning, and retention settings. Public network access remains enabled in the source.
- [Networking module](https://github.com/cloudsci-ai/greenops-ai/tree/main/infrastructure/modules/networking) defines a virtual network, an agent subnet and NSG association, and a private-endpoint subnet. A subnet alone does not establish private connectivity to services.
- [Development environment](https://github.com/cloudsci-ai/greenops-ai/tree/main/infrastructure/environments/dev) contains the environment-level Terraform configuration.
- [Pipeline definition](https://github.com/cloudsci-ai/greenops-ai/blob/main/.azuredevops/pipelines/terraform-bootstrap.yml) includes format checking, validation, and planning. Successful execution has not been verified here.

## Enterprise blueprint as design evidence

My GreenOps architecture material considers governance, identity, networking, workloads, security, delivery, observability, backup, and disaster recovery. That material is an architecture study. The public code currently covers a smaller scope.

The blueprint is not presented here as a deployed enterprise platform. The repository links above are the inspectable implementation evidence available with this case study.

## Decisions and open questions

**Separate state bootstrap from workloads.** State storage has a different lifecycle from the resources it tracks. Recovery, access, and retention need explicit decisions.

**Match networking to actual consumers.** Agent and private-endpoint subnets need service connections, routing, DNS, and access controls before private delivery can be demonstrated end to end.

**Require cost evidence.** FinOps reporting needs a defined data source, resource ownership, a baseline, and a repeatable way to measure change. Savings figures and AI recommendations remain future work.

## Next implementation evidence

A useful next milestone is a reproducible development deployment with Terraform validation and plan results tied to a commit. After that, publish the network and identity tests, operational checks, cost baseline, and teardown procedure.

The architecture study does not currently establish tested recovery objectives, verified policy enforcement, deployed AI functionality, or production readiness.
