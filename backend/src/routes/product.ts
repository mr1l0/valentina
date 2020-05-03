import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { ProductController } from "../controllers/ProductController";

  const router = Router();

  router.get("/", [checkJwt], ProductController.all);

  router.get(
    "/:id",
    [checkJwt],
    ProductController.one
  );

  router.post("/", [checkJwt], ProductController.save);

  router.delete(
    "/:id",
    [checkJwt],
    ProductController.remove
  );

  export default router;