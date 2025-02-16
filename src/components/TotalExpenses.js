import React from 'react'

function TotalExpenses({totalExpense}) {
  return (
    <div className='bg-gray-100 p-6 rounded-lg shadow-md mb-10 flex justify-between items-center'>
        <h1 className='text-xl font-semibold'> Total Expenses: </h1>
        <h1 className='text-xl font-semibold'>Rs.{totalExpense}</h1>
    </div>
  )
}

export default TotalExpenses