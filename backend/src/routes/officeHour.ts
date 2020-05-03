
import { Router } from "express";

import { checkJwt } from "../middlewares/checkJwt";

import { OfficeHourController } from "../controllers/OfficeHourController";

  const router = Router();

  router.get("/", [checkJwt], OfficeHourController.all);

  router.get(
    "/:id",
    [checkJwt],
    OfficeHourController.one
  );

  router.post("/", [checkJwt], OfficeHourController.save);

  router.delete(
    "/:id",
    [checkJwt],
    OfficeHourController.remove
  );

  export default router;