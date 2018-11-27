Forum 4 CI/CD Dev Jam
===

In this Dev Jam, we will build and deploy a simple NodeJS application to a GKE cluster.

Each team will use a different CI/CD tool to achieve this.

See `TIPS.md` if you get stuck.

Quick Reference
---

* GCP Project: `dpedevs`
* GKE Cluster: `forum4`
* GKE Zone: `australia-southeast1-a`
* GKE Version: `1.11.2-gke.18`
* GKE Namespace: `team<team number>`
* GCR Image Coordinate Format: `gcr.io/dpedevs/api-developers-v1:<build number>-team<team number>`

What You Have
---

At the start of the Dev Jam, you are provided with the following files:

* `id_rsa`: Private SSH key to access this repo
* `forum4-team<team number>.json`: GCP Service Account JSON Key that gives you access to push Docker images to GCR and interact with the GKE cluster

The Cluster
---

A GKE cluster, `forum4` has been setup with one namespace per team. The app should be deployed to the team's corresponding namespace.

The App
---

See `_app` directory for the application that you will be deploying. Its corresponding README provides steps, to verify, build and deploy it.

The build results in a Docker image that should be pushed to Google Container Registry (GCR) in the following coordinate:

```
gcr.io/dpedevs/api-developers-v1:<build number>-team<team number>
```

_Be careful not to override other teams' images!_

Each team deploys the app into their own namespace, `team<team number>`. 

What You Need to Do
---

Implement a CI/CD process that:

* On an incoming commit to this repo,
  1. Clones the repository
  1. Verifies the app
  1. Builds the Docker image
  1. Pushes the Docker image to GCR

* On a manual trigger,
  1. Deploys the previously built image to GKE

If this was too easy, here are some bonus tasks:

* Support environment-specific configuration
  1. Modify the Deployment object in your namespace to allow overriding where `developers.json` is read from and mount a Secret in that location
  1. During the deployment, push the content of `_env-config/dev/developers.json` to the Secret
* Trigger verification builds upon a Pull Request creation and update
* Deploy and rollback a build from a `release` branch

Showcase
---

The showcase will demonstrate how you configured your chosen tool to achieve the above.

Also investigate and comment on the following as relevant to your tool of choice:

* Installation model, e.g. SaaS, On-prem, Server/Agent, containerised,  etc.
* Pricing model
* First-class support for "deployments"
* Pipeline-as-Code
* Tracability of commits to deployments
* Out-of-the-box task catalogue
* Pull Request builds
* Environment promotions
* Rollback support
* Environment-specific configuraiton
* Integration with other tools, e.g. Jira, Bitbucket, Github, etc.
* Viewing logs
* Viewing test results
* etc.

Showcase Gallery
---

For posterity, we like to record your findings.

Create a directory in this repo, named after your tool (lower-case and dash-separated) and place a `README.md` file in it.

You can either:

* Record your observations directly in the README file, or
* Record a short video, upload it in [Google Drive](https://drive.google.com/open?id=1oyM7ZFmCG5Q_YALSTY6kz-eWi9qwO3As) and reference it in the README file

Also any supporting artifacts, such as Pipeline-as-Code files that you created during the forum, should be placed in this directory. 

See `bitbucket-pipelines` as an example. Feel free to add more sections and information as you see fit per your tool of choice.