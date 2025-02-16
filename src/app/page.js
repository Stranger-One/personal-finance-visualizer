'use server';

import TransactionList from "@/components/TransactionList";
import AddTransaction from "@/components/AddTransaction";
import Chart from "@/components/Chart";
import axios from "axios";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default async function Home() {
  return (
    <div>
      <Main/>
    </div>
  );
}
