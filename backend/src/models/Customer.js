export default class customerRepository {
  constructor({ db }) {
    this.db = db;
  }

  async create(customer) {
    const createdCustomer = await this.db.Customer.create(customer);
    return createdCustomer;
  }

  async findAll() {
    const customers = await this.db.Customer.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await this.db.Customer.findOne({ where: { id } });
    return customer;
  }

  async update(id, customer) {
    const updatedCustomer = await this.db.Customer.update(customer, {
      where: { id },
      returning: true,
    });
    return updatedCustomer;
  }

  async delete(id) {
    const deletedCustomer = await this.db.Customer.destroy({ where: { id } });
    return deletedCustomer;
  }
}
