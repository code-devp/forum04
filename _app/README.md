Developer API
===

NodeJS application that implements the Developer API.

NPM Command
---

Command | Description 
--------|------------
`npm start` | Runs application with hot-reload for local development
`npm run lint` | Runs linter to check for error
`npm run lint-fix` | Runs linter to fix the errors _(Warning: It will change your source code!)_
`npm test` | Runs the unit tests
`npm run coverage` | Checks code coverage of unit tests
`npm run coverage-show` | Runs the code coverage of unit tests and print the results
`npm run check` | Runs all checks performed during the build
`npm run build` | Transpiles the source code to Node-compliant code
`npm run serve` | Runs the transpiled code

Verify
---

```
npm install
npm run check
```

_Ideal for pre-build and pull request verifications._

Build
---

```
docker build - t <image name> .
docker push <image name>
```

Deploy
---

```
sed 's/team0/team<team number>/g' k8s-deploy.yml | kubectl apply -f - -n <namespace>
kubectl set image deployment/api-developers-v1 api-developers-v1=gcr.io/dpedevs/api-developers-v1:<build number>-team<team number> -n team<team number>
```