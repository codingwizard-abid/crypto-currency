import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Contact = () => {
  let nevigation = useNavigate();
  const clickBD = ()=>{
    let path = 'bd-address';
    nevigation(path);
  }
  const clickUS = ()=>{
    let path = 'us-address';
    nevigation(path);
  }
  return (
    <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' font-mono text-xl text-center md:text-3xl '>
          Contact Us, Our Office Address Down Below
        </h1>

        <div className='flex justify-center items-center'>
          <button onClick={clickBD} className='py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
            BD Address
          </button>
          <button onClick={clickUS} className='py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>
            US Address
          </button>
        </div>
        <div className='flex justify-center items-center w-full py-44'>
            <Outlet></Outlet>
        </div>
      </div>
    </section>
  )
}

export default Contact
