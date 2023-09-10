import React from 'react'

function ImagesTable() {
  return (
    <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
                <th scope="col" className="px-6 py-3">REPOSITORY</th>
                <th scope="col" className="px-6 py-3">TAG</th>
                <th scope="col" className="px-6 py-3">SIZE</th>
                <th scope="col" className="px-6 py-3">IMAGE ID</th>
            </tr>
            </thead>
            <tbody>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ImagesTable