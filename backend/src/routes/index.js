import express, { Router } from "express";
import CustomerRoutes from "./CustomerRoutes";

const router = Router();
const url_prefix = "/api/v1";

router.use(`${url_prefix}/customers`, new CustomerRoutes().getRoutes());

export default router;
