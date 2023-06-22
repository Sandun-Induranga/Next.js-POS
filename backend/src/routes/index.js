import { Router } from "express";
import CustomerRoutes from "./CustomerRoutes";

const router = Router();
const url_prefix = "/api/v1";

router.use(`${url_prefix}/customers`, new CustomerRoutes().getRoutes());

module.exports = router;
