export default class CustomerController {
  constructor({ customerService }) {
    this.customerService = customerService;
  }

  async createCustomer(req, res) {
    const { body } = req;
    const customer = await this.customerService.createCustomer(body);
    res.status(201).send(customer);
  }

  async getCustomers(req, res) {
    const customers = await this.customerService.getCustomers();
    res.status(200).send(customers);
  }

  async getCustomer(req, res) {
    const { id } = req.params;
    const customer = await this.customerService.getCustomer(id);
    res.status(200).send(customer);
  }

  async updateCustomer(req, res) {
    const { id } = req.params;
    const { body } = req;
    const customer = await this.customerService.updateCustomer(id, body);
    res.status(200).send(customer);
  }

  async deleteCustomer(req, res) {
    const { id } = req.params;
    await this.customerService.deleteCustomer(id);
    res.status(200).send({ message: "Customer deleted successfully" });
  }
}
