#!/bin/sh

if [ $# -ne 1 ]; then
    echo "Usage: create-service-account.sh team<team number>"
    exit 1
fi

TEAM=$1

gcloud iam service-accounts create forum4-${TEAM}
gcloud iam service-accounts keys create \
  --iam-account forum4-${TEAM}@dpedevs.iam.gserviceaccount.com \
  forum4-${TEAM}.json
gcloud projects add-iam-policy-binding dpedevs \
  --member serviceAccount:forum4-${TEAM}@dpedevs.iam.gserviceaccount.com \
  --role roles/container.developer
gcloud projects add-iam-policy-binding dpedevs \
  --member serviceAccount:forum4-${TEAM}@dpedevs.iam.gserviceaccount.com \
  --role roles/storage.admin