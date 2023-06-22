import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController.js";

export default class CustomerRoutes {
  router = express.Router();
  customerController = new CustomerController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      "/customers",
      this.customerController.createCustomer.bind(this.customerController)
    );
    this.router.get(
      "/customers",
      this.customerController.getCustomers.bind(this.customerController)
    );
    this.router.get(
      "/customers/:id",
      this.customerController.getCustomer.bind(this.customerController)
    );
    this.router.put(
      "/customers/:id",
      this.customerController.updateCustomer.bind(this.customerController)
    );
    this.router.delete(
      "/customers/:id",
      this.customerController.deleteCustomer.bind(this.customerController)
    );
  }

  getRoutes() {
    return this.router;
  }
}
