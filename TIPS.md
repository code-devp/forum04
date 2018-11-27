Tips
===

Google SDK
---

See [https://cloud.google.com/sdk/]() for instructions how to install Google SDK. It is also available as Docker image on Docker Hub: `google/cloud-sdk:latest`.

Authenticate using a Service Account JSON key file:

```
gcloud auth activate-service-account --key-file <file path>
```

_It is a good idea to encode the file as base-64 if storing it in a CI/CD property field._

Set the default GCP project:

```
gcloud config set project <project name>
```

Log into GCR:

```
gcloud auth configure-docker --quiet
```

Log into GKE:

```
gcloud container clusters get-credentials <cluster name> --zone=<zone id>
```

Kubernetes
---

Get IP of the Service:

```
kubectl get service/api-developers-v1 -n team<team number>
```

Create a GKE Secret:

```
kubectl create secret generic <secret name> --from-file=<file path> -n team<team number>
```