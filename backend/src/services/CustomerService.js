import Customer from "../models/Customer";

export default class CustomerService {
  async createCustomer(customer) {
    const createdCustomer = await new Customer().save(customer);
    return createdCustomer;
  }

  async getCustomers() {
    const customers = await new Customer().findAll();
    return customers;
  }

  async getCustomer(id) {
    const customer = await new Customer().findOne(id);
    return customer;
  }

  async updateCustomer(id, customer) {
    const updatedCustomer = await new Customer().update(id, customer);
    return updatedCustomer;
  }

  async deleteCustomer(id) {
    await new Customer().delete(id);
    return true;
  }
}
