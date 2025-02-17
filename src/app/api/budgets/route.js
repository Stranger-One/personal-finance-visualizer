import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Budget from "@/models/Budget";


export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const month = searchParams.get('month');
  // console.log({ month });
  
  const query = month ? { month } : {};
  const budgets = await Budget.find(query).sort({ createdAt: -1 });
  // console.log({ budgets });
  return NextResponse.json(budgets);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  // console.log({data})
  const budget = await new Budget(data).save();
  return NextResponse.json(budget);
}

export async function PUT(req) {
  await connectDB();
  const { id, ...data } = await req.json();
  const updatedBudget = await Budget.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updatedBudget);
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Budget.findByIdAndDelete(id);
  return NextResponse.json({ message: "Budget deleted successfully" });
}