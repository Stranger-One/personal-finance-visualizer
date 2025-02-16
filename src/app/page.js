'use server';

import TransactionList from "@/components/TransactionList";
import AddTransaction from "@/components/AddTransaction";
import Chart from "@/components/Chart";
import axios from "axios";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default async function Home() {

 

  return (
    <div className="w-full min-h-screen bg-gray-400">
      <Header />
      <Main/>
      {/* <div className="w-full h-full px-10">
        <AddTransaction refreshData={refreshData()} />
      </div> */}
      {/* <TransactionList transactions={transactions} />
      <Chart transactions={transactions} /> */}
    </div>
  );
}
