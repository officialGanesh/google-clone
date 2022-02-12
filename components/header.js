import React from 'react'
import {  DotsVerticalIcon } from "@heroicons/react/outline"

function Header() {
  return (
    <header className='flex w-full justify-end p-4 text-sm text-gray-900 space-x-5 '>
        <div className='flex  items-center space-x-4'>
            <p className='link'>Gmail</p>
            <p className='link'>Images</p>
        </div>
        <DotsVerticalIcon className='w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-200 '/>
        <button className='bg-blue-600 px-7 text-white text-md text-center rounded hover:bg-blue-500 font-semibold '>Sign in</button>
    </header>
  )
}

export default Header