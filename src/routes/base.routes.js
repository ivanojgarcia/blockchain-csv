import { Router } from "express";

const router = Router();

export const baseRoutes = (controller) => {
  router.get("/", controller);

  return router;
};
