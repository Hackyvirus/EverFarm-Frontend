import Image from 'next/image'
import React from 'react'
import Farmer from '@public/assets/images/farmer1.jpg'
import Farmer2 from '@public/assets/images/farmer2.jpg'

const Details = (props) => {
  return (
      <div className={`flex md:mt-24 mt-14 flex-col h-max justify-between ${props.component === 1 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center text-white w-[87dvw] m-auto gap-10`}>

      <div className="md:w-1/2 w-[85%] h-[500px]  flex flex-col gap-5 justify-evenly items-start">
      <h2 className={`text-4xl font-bold w-[97%] ${props.component == 1?'md:text-left':'md:text-right'} text-center` }>Track Your Farming Expenses and Incomes with Ease</h2>
      <p className={`md:text-[20px] ${props.component == 1?'md:text-left':'md:text-right'} text-center`}>FarmExpense Tracker is a user-friendly web-based platform that simplifies financial management for farmers. It provides an intuitive solution to track and analyze farming expenses and incomes.</p>
      <div className='flex w-full h-auto justify-center items-center'>
      <div className={`flex h-full w-1/2 flex-col justify-center ${props.component == 1?'items-start':'items-end'} gap-6`}>
        <h3 className='text-lg font-semibold text-center'>Simplify Management</h3>
        <p className={`md:text-[16px] md:w-[95%] w-[100%] font-light ${props.component == 1?'md:text-left':'md:text-right'} text-center`}>Effortlessly record and categorize your expenses and incomes to gain valuable insights.</p>
      </div>
      <div className={`flex h-full flex-col w-1/2 justify-center ${props.component == 1?'items-start':'items-end'} gap-6`}>
        <h3 className='text-lg font-semibold text-center'>Make Informed Decisions</h3>
        <p className={`md:text-[16px] md:w-[95%] w-[100%] font-light ${props.component == 1?'md:text-left':'md:text-right'} text-center`}>Effortlessly record and categorize your expenses and incomes to gain valuable insights.</p>
      </div>
      </div>
      </div>
      <div className='md:w-[50%] w-[85%] h-full flex justify-center items-center'>
        <Image className='w-full m-auto rounded-md' src={props.component == 1?Farmer:Farmer2} alt='Farmer Logo'/>
      </div>
    </div>
  )
}

export default Details