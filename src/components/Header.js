import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='w-full h-10 flex items-center justify-between px-10 py-8 bg-gray-500 '>
        <div className='text-2xl font-bold text-white'>Personal Finance Tracker</div>
        <div className='text-xl font-bold text-white flex gap-4'>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Header