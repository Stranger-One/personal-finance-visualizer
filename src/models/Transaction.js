import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  category: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", TransactionSchema);
