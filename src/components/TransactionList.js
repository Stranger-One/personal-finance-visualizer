"use client";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function TransactionList({ transactions }) {
  return (
    <div className="w-full p-4 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Transaction List</h2>
      {transactions?.length ? (
        <Table className="w-full  border border-gray-200 rounded-lg">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="p-2 text-left">Description</TableHead>
              <TableHead className="p-2 text-right">Amount ($)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn._id} className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="p-2">{txn.description}</TableCell>
                <TableCell className="p-2 text-right font-medium">${txn.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-gray-500 text-center">No transactions found.</p>
      )}
    </div>
  );
}
  