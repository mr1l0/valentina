
import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { PriceController } from "../controllers/PriceController";

  const router = Router();

  router.get("/", [checkJwt], PriceController.all);

  router.get(
    "/:id",
    [checkJwt],
    PriceController.one
  );

  router.post("/", [checkJwt], PriceController.save);

  router.delete(
    "/:id",
    [checkJwt],
    PriceController.remove
  );

  export default router;