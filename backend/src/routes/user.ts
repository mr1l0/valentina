
import { Router } from "express";

import { checkJwt } from "../middlewares/checkJwt";

import { UserController } from "../controllers/UserController";

  const router = Router();

  
  router.get("/", [checkJwt], UserController.all);

  router.get(
    "/:id",
    [checkJwt],
    UserController.one
  );

  router.post("/", UserController.save);

  router.delete(
    "/:id",
    [checkJwt],
    UserController.remove
  );

  export default router;