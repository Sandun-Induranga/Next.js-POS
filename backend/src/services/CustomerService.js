export default class CustomerService {
  constructor({ customerRepository }) {
    this.customerRepository = customerRepository;
  }

  async createCustomer(customer) {
    const createdCustomer = await this.customerRepository.create(customer);
    return createdCustomer;
  }

  async getCustomers() {
    const customers = await this.customerRepository.findAll();
    return customers;
  }

  async getCustomer(id) {
    const customer = await this.customerRepository.findOne(id);
    return customer;
  }

  async updateCustomer(id, customer) {
    const updatedCustomer = await this.customerRepository.update(id, customer);
    return updatedCustomer;
  }

  async deleteCustomer(id) {
    await this.customerRepository.delete(id);
    return true;
  }
}
