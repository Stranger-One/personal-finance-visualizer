"use client";
import React, { useEffect, useState } from "react";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";
import Chart from "./Chart";
import axios from "axios";

function Main() {
  const [transactions, settransactions] = useState();

  const refreshData = async () => {
    await axios
      .get(`/api/transactions`)
      .then((res) => {
        settransactions(res.data);
        console.log({data: res.data});
      });
  };

  useEffect(() => {
    refreshData();
  }, []);

  return <div className="w-full h-full px-10">
    <AddTransaction refreshData={refreshData} />
    <TransactionList transactions={transactions} />
    <Chart transactions={transactions} />
  </div>;
}

export default Main;
