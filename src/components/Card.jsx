import React, { useState } from 'react'

function Card({ data }) {
  console.log(data);
  return (
    <>
      <div className=' w-screen flex items-center justify-center mt-5'>
        <div className=' border-2 md:flex border-slate-500 min-h-[250px]  p-5 rounded-lg bg-orange-300' >
          <div className='sm:w-[100%]  h-[150px] w-[130px] p-2 bg-contain'>
            <div className='flex justify-center '>
              <img src={data.img} className='rounded-lg' alt="" />
            </div>
          </div>
          <div className=' md:mx-2  p-5' >
            <div className=' md:flex'> <p> firstName:{data.firstName}</p>
              <p className='md:mx-2'>lastName:{data.lastName}</p>
            </div>
            <div className='mt-3'>
              <p>Gender:{data.gender}</p>
            </div>
            <div className='mt-3'>
              <p>Phone Number:{data.phn}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
