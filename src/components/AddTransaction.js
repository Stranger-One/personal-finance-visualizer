"use client";
import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

export default function AddTransaction({ refreshData }) {
  const [form, setForm] = useState({
    amount: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const predefinedCategories = [
    "Food",
    "Transport",
    "Entertainment",
    "Utilities",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios.post("/api/transactions", form);
    refreshData();
    setForm({ amount: "", description: "", category: "" });
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Transaction</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 "
      >
        <input
          type="number"
          placeholder="Amount"
          required
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          required
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          required
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center"
          disabled={loading}
        >
          {loading ? <Loader className="mr-2" /> : "Add"}
        </button>
      </form>
    </div>
  );
}
