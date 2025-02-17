"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ transactions }) {
  if (!transactions || transactions?.length === 0) {
    return <div className="w-full bg-gray-100  flex justify-center items-center min-h-[200px] ">No data available</div>;
  }

  const data = transactions.reduce((acc, txn) => {
    const month = new Date(txn.date).toLocaleString("default", {
      month: "short",
    });
    acc[month] = (acc[month] || 0) + txn.amount;
    return acc;
  }, {});

  const chartData = Object.entries(data).map(([key, value]) => ({
    month: key,
    amount: value,
  }));

  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  chartData.sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));

  return (
    <div className="w-full mt-10 bg-gray-100 p-6 rounded-lg shadow-md ">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly expenses chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
