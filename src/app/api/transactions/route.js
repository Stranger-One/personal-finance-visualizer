import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

export async function GET() {
  await connectDB();
  const transactions = await Transaction.find().sort({ date: -1 });
  return NextResponse.json(transactions);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const transaction = await new Transaction(data).save();
  return NextResponse.json(transaction);
}

export async function PUT(req) {
  await connectDB();
  const { id, ...data } = await req.json();
  const updatedTransaction = await Transaction.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updatedTransaction);
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Transaction.findByIdAndDelete(id);
  return NextResponse.json({ message: "Transaction deleted successfully" });
}