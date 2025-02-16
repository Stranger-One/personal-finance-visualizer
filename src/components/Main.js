"use client";
import React, { useEffect, useState } from "react";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";
import Chart from "./Chart";
import axios from "axios";
import CategoryChart from "./CategoryChart";

function Main() {
  const [transactions, settransactions] = useState();
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    setLoading(true);
    await axios.get(`/api/transactions`).then((res) => {
      settransactions(res.data);
      console.log({ data: res.data });
    });
    setLoading(false);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div className="w-full h-full p-10 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="loader text-xl font-semibold">Loading...</div>
        </div>
      )}
      <AddTransaction refreshData={refreshData} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Main;
