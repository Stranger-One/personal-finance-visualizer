"use client";
import axios from "axios";
import { useState } from "react";

function BudgetForm({ setBudgets }) {
  const [budget, setBudget] = useState({ category: "", amount: "", month: "" });

  const predefinedCategories = [
    "Food",
    "Transport",
    "Entertainment",
    "Utilities",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/budgets", budget);
    console.log({data: res.data});
    setBudgets((prev) => [res.data, ...prev]);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Set Budget</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <select
          required
          value={budget.category}
          onChange={(e) => setBudget({ ...budget, category: e.target.value })}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select Category
          </option>
          {predefinedCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Amount"
          required
          onChange={(e) => setBudget({ ...budget, amount: e.target.value })}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          required
          onChange={(e) => setBudget({ ...budget, month: e.target.value })}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
          Set
        </button>
      </form>
    </div>
  );
}

export default BudgetForm;
