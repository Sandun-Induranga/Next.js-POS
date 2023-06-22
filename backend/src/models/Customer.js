import { Schema, model } from "mongoose";
const CustomerSchema = new Schema({
  customerId: {
    type: String,
    reruired: true,
  },
  name: {
    type: String,
    reruired: true,
  },
  address: {
    type: String,
    reruired: true,
  },
  salary: {
    type: Number,
    reruired: true,
  },
});

export default model("Customer", CustomerSchema);
