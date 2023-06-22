import { Router } from "express";
import CustomerRoutes from "./CustomerRoutes";

export default class Routes {
  router = Router();
  url_prefix = "/api/v1";

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    router.use(`${url_prefix}/customers`, new CustomerRoutes().getRoutes());
  }

  getRoutes() {
    return this.router;
  }
}
