"use client";

import CategoryChart from "@/components/CategoryChart";
import Chart from "@/components/Chart";
import TotalExpenses from "@/components/TotalExpenses";
import TransactionList from "@/components/TransactionList";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [transactions, setTransactions] = useState();
  const [summary, setSummary] = useState({ total: 0, transactions: [] });
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    setLoading(true);
    await axios.get(`/api/transactions`).then((res) => {
      setTransactions(res.data);

      const total = res.data.reduce((sum, tx) => sum + tx.amount, 0);
      setSummary({ total, transactions: res.data });

      // console.log({ data: res.data });
      setLoading(false);
    });
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div className="w-full h-full p-10">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="loader text-xl font-semibold">Loading...</div>
        </div>
      )}
      <TotalExpenses totalExpense={summary.total} />
      <TransactionList transactions={transactions} />
      <Chart transactions={transactions} />
      <CategoryChart transactions={transactions} />
    </div>
  );
}

export default Dashboard;
