import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function BudgetComparisonChart({ transactions, budgets, selectedMonth, setSelectedMonth }) {

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const filteredTransactions = transactions?.filter(txn => new Date(txn.date).toLocaleString('default', { month: 'long' }) === selectedMonth);

    const data = budgets?.map(budget => {
        const spent = filteredTransactions.filter(txn => txn.category === budget.category).reduce((sum, txn) => sum + txn.amount, 0);
        return { category: budget.category, spent, budgeted: budget.amount };
    });

    const months = [
        { label: 'January' },
        { label: 'February' },
        { label: 'March' },
        { label: 'April' },
        { label: 'May' },
        { label: 'June' },
        { label: 'July' },
        { label: 'August' },
        { label: 'September' },
        { label: 'October' },
        { label: 'November' },
        { label: 'December' },
    ];

    console.log({transactions, budgets, selectedMonth})

    return (
        <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 capitalize"> Budget vs actual comparison chart</h2>

            <div className="mb-4">
                <label htmlFor="month-selector">Select Month: </label>
                <select
                    id="month-selector"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {months.map(month => (
                        <option key={month.label} value={month.label}>
                            {month.label}
                        </option>
                    ))}
                </select>
            </div>
            { budgets.length ? <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="spent" fill="#ff4444" />
                    <Bar dataKey="budgeted" fill="#44ff44" />
                </BarChart>
            </ResponsiveContainer> : (
                <div className="text-center text-lg">No budgets found</div>
            )}
        </div>
    );
}

export default BudgetComparisonChart;