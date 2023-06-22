import express from "express";
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
      this.customerController.post(this.customerController.createCustomer())
    );
    this.router.get(
      "/customers",
      this.customerController.get(this.customerController.getCustomers())
    );
    this.router.get(
      "/customers/:id",
      this.customerController.get(this.customerController.getCustomer())
    );
    this.router.put(
      "/customers/:id",
      this.customerController.put(this.customerController.updateCustomer())
    );
    this.router.delete(
      "/customers/:id",
      this.customerController.delete(this.customerController.deleteCustomer())
    );
  }

  getRoutes() {
    return this.router;
  }
}
