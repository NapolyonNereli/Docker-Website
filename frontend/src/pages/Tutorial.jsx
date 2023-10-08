import React from 'react'
import { Link } from 'react-router-dom'

function Tutorial() {
  return (
    <>
    <aside
        className="fixed top-0 left-0 z-40 w-52 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 "
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <ul className="space-y-2 ">
        <li className=' hover:underline'>
          <a href=''>Main</a>
        </li>
        <li className=' hover:underline'>
          <a href="">How to use app</a>
        </li>
        <li className=' hover:underline'>
          <a href=''>Create Dockerfile</a>
        </li>
        <li className=' hover:underline'>
          <a href='' className='text-sm'>Search & download image</a>
        </li>
        <li className=' hover:underline'></li>
        </ul>
        </div>
      </aside>
      <div className=" p-4 sm:ml-64">
        <div>
          <h1 className='text-center'>Main</h1>
        </div>
      </div>
    </>
  )
}

export default Tutorial