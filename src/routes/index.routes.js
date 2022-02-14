import { baseRoutes } from "./base.routes";

import { getHealthCheck } from "../controller/base.controller";

export const initRoutes = (app) => {
  app.use("/", baseRoutes(getHealthCheck));
};
