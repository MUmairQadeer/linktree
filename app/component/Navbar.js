import React from 'react'

const Navbar = () => {
  return (

    <nav className=' w-[95vw] fixed bg-white py-2 px-8  flex justify-between  top-10 right-[2vw] rounded-full'>
      <div className="logo flex flex-row justify-center items-center gap-2">
        <svg className="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z" />
        </svg>
        <ul className='flex flex-row gap-1 text-gray-500 font-semibold justify-center items-center'>
          <span className='px-4 py-2 cursor-pointer rounded-md transition-all hover:bg-gray-200'>Templates</span>
          <span className='px-4 py-2 cursor-pointer rounded-md transition-all hover:bg-gray-200'>Marketplace</span>
          <span className='px-4 py-2 cursor-pointer rounded-md transition-all hover:bg-gray-200'>Discover</span>
          <span className='px-4 py-2 cursor-pointer rounded-md transition-all hover:bg-gray-200'>Pricing</span>
          <span className='px-4 py-2 cursor-pointer rounded-md transition-all hover:bg-gray-200'>Learn</span>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className='bg-gray-200 rounded-lg py-6 px-8'>Log in </button>
        <button className='bg-black text-white font-semibold rounded-full py-2 px-8'>Sign up free</button>
      </div>

    </nav>
  )
}

export default Navbar