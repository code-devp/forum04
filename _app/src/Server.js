import bodyParser from "body-parser";
import express from "express";
import winston from "winston";

/**
 * Start the API server
 *
 * @param {Controller} controller The controller that implements the API
 * @param {string} httpPort HTTP port where the API is served
 * @param {string} httpBasePath HTTP base path where the API is served
 */
export default function apiServer(controller, { httpPort, httpBasePath }) {
  const app = express()
    // handle body parsing
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    // enable CORS
    .use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

  // health check
  app.get("/health", (req, res) => res.status(200).send());

  // services
  app.get(`${httpBasePath}/developers`, (req, res) =>
    res.send(
      controller.getDevelopers(
        req.query.name,
        req.query.team,
        req.query.skills,
        req.query.page,
        req.query.pageSize,
        req.query.sort
      )
    )
  );
  app.get(`${httpBasePath}/developers/:developerId`, (req, res) => {
    const developer = controller.getDeveloper(req.params["developerId"]);
    if (developer) {
      res.send(developer);
    } else {
      res.status(404).send({
        errorCode: "NotFound",
        errorDescription: "Developer not found"
      });
    }
  });

  // no handlers matched
  app.use((req, res, next) =>
    res
      .status(404)
      .send({ errorCode: "NotFound", errorDescription: "Resource not found" })
  );

  // start server
  app.listen(httpPort, () =>
    winston.info(`API is listening on ${httpPort} and path ${httpBasePath}...`)
  );
}
