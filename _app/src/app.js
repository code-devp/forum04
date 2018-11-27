import moment from "moment-timezone";
import winston from "winston";

import apiServer from "./Server";
import Controller from "./Controller";

// app confing
const LOG_LEVEL = process.env["LOG_LEVEL"] || "info";
const TZ = process.env["TZ"] || "Australia/Sydney";

const HTTP_PORT = process.env["HTTP_PORT"] || "8085";
const HTTP_BASE_PATH = process.env["HTTP_BASE_PATH"] || "/team0";

const DEVELOPERS_FILE_PATH =
  process.env["DEVELOPERS_FILE_PATH"] || "src/developers.json";

// logging
winston.configure({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format(x => {
      x.timestamp = moment()
        .tz(TZ)
        .format();
      return x;
    })(),
    winston.format.printf(
      x => `${x.timestamp} [${x.level.toUpperCase()}] ${x.message}`
    )
  ),
  transports: [new winston.transports.Console()]
});

// start server
apiServer(new Controller(DEVELOPERS_FILE_PATH), {
  httpPort: HTTP_PORT,
  httpBasePath: HTTP_BASE_PATH
});
