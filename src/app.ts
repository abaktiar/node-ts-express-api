// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { logger } from "./policies/init_app";
import { Express as Server, json, urlencoded} from "express";
import * as express from "express";
import cors = require("cors");
import routeDefinition from "./routes";


logger.debug("✔ Logger initialized");

const server: Server = express();
server.use(json());
server.use(urlencoded());

const corsOptions = {
  origins: ["*"],
  allowedHeaders: ["at", "Content-Type"],
  exposedHeaders: [],
  // preflightContinue: false,
  // optionsSuccessStatus: 204,
};
server.use(cors(corsOptions));

server.use((req, _, next) => {
  logger.debug(req.method, req.url, " => ", req.headers["host"]);
  next();
});


routeDefinition(server);
server.get("/", (_, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
  res.write("<h1 style='font-family:monospace;text-align:center;font-size:72px'><br/><br/><br/>🚀<br/>API is Ready! </h1>");
  return res.end();
});
server.listen(process.env.PORT, function () {
  logger.info("=---------------------------------------------------=");
  logger.info("env -> ", process.env.NODE_CONFIG_ENV);
  logger.info("=---------------------------------------------------=");
  logger.info("API HOSTED ON => http://localhost:%s", process.env.PORT);
  logger.info("=---------------------------------------------------=");
});
