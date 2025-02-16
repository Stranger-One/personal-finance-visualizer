import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";
import { useEffect, useState } from "react";

export default function CategoryChart({ transactions }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const categories = {};
    transactions?.forEach(({ category, amount }) => {
      categories[category] = (categories[category] || 0) + amount;
    });
    console.log({ categories });

    setData(
      Object.entries(categories).map(([name, value]) => ({ name, value }))
    );
  }, [transactions]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD"];

  const renderLabel = ({ name }) => name;

  return (
    <div className="w-full mt-10 bg-gray-100 p-6 rounded-lg shadow-md ">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Monthly expenses chart
      </h2>
      <div className="w-full flex justify-center">
        {transactions && (
          <PieChart width={600} height={500}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={200}
              fill="#8884d8"
              label={renderLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </div>
    </div>
  );
}
