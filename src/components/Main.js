"use client";
import React, { useEffect, useState } from "react";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";
import Chart from "./Chart";
import axios from "axios";
import CategoryChart from "./CategoryChart";
import BudgetForm from "./BudgetForm";
import BudgetComparisonChart from "./BudgetChart";

function Main() {
  const [transactions, setTransactions] = useState();
  const [budgets, setBudgets] = useState();
  const [selectedMonth, setSelectedMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    setLoading(true);
    try {
      await axios.get(`/api/transactions`).then((res) => {
        setTransactions(res.data);
        // console.log({ data: res.data });
      });
  
      await axios.get(`/api/budgets?month=${selectedMonth}`).then((res) => {
        setBudgets(res.data);
        // console.log({ data: res.data });
      });
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    refreshData();
  }, [selectedMonth]);

  return (
    <div className="w-full h-full p-10 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="loader text-xl font-semibold">Loading...</div>
        </div>
      )}
      <div className="flex flex-col h-full mb-10">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Transactions</h2>
        <AddTransaction refreshData={refreshData} />
        <TransactionList transactions={transactions} />
      </div>
      <div className="flex flex-col gap-10 h-full mb-10">
        <h2 className="text-3xl font-semibold text-gray-700">Budget</h2>
        <BudgetForm setBudgets={setBudgets} />
        <BudgetComparisonChart transactions={transactions} budgets={budgets} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
      </div>
    </div>
  );
}

export default Main;
