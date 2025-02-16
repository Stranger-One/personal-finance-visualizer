"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sortMonths = (a, b) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months.indexOf(a.month) - months.indexOf(b.month);
};

export default function Chart({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return <div>No data available</div>;
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
  })).sort(sortMonths);

  return (
    <div className="w-full mt-10">
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
