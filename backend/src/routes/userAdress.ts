
import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { UserAdressController } from "../controllers/UserAdressController";

  const router = Router();

  //router.get("/", [checkJwt], UserAdressController.all);

  router.get(
    "/user/:user_id",
    [checkJwt],
    UserAdressController.allOfUser
  );

  router.post("/", [checkJwt], UserAdressController.save);

  router.delete(
    "/:id",
    [checkJwt],
    UserAdressController.remove
  );

  export default router;