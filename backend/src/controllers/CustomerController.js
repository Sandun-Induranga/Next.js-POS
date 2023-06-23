import Customer from "../models/Customer";

export default class CustomerController {
  async createCustomer(req, res) {
    const customer = new Customer(req.body);
    let newCustomer = await customer.save();
    res.status(201).send(newCustomer);
  }
}
