import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import officeHour from "./officeHour";
import price from "./price";
import product from "./product";
import userAdress from "./userAdress";
import order from "./order";

const routes = Router();

routes.use("/auth", auth);
routes.use("/users", user);
routes.use("/officehour", officeHour);
routes.use("/prices", price);
routes.use("/products", product);
routes.use("/useradress", userAdress);
routes.use("/orders", order);


export default routes;