Dev Jam Setup
===

This guide describes the steps to setup the required environment for the forum.

**This is already done prior to the forum and no actions are required from the Dev Jammers. This is just here for posterity.**

Enable APIs
---

```
gcloud services enable container.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

Create GKE Cluster
---

```
gcloud container --project "dpedevs" clusters create "forum4" \
  --zone "australia-southeast1-a" \
  --username "admin" \
  --cluster-version "1.11.2-gke.18" \
  --num-nodes "2" \
  --machine-type "g1-small" \
  --image-type "COS" \
  --disk-type "pd-standard" \
  --disk-size "100" \
  --scopes "https://www.googleapis.com/auth/devstorage.read_only","https://www.googleapis.com/auth/logging.write","https://www.googleapis.com/auth/monitoring","https://www.googleapis.com/auth/servicecontrol","https://www.googleapis.com/auth/service.management.readonly","https://www.googleapis.com/auth/trace.append" \
  --enable-cloud-logging \
  --enable-cloud-monitoring \
  --no-enable-ip-alias \
  --network "projects/dpedevs/global/networks/default" \
  --subnetwork "projects/dpedevs/regions/australia-southeast1/subnetworks/default" \
  --addons HorizontalPodAutoscaling,HttpLoadBalancing \
  --enable-autoupgrade \
  --enable-autorepair
```

Create Service Accounts
---

For each team number:

```
./create-service-account.sh team<team number>
```

Setup Namespace
---

For each team number:

```
kubectl create namespace team<team number>
```