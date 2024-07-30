import Details from '@components/Details/page'
import React from 'react'


const page = () => {
  return (
    <>
    <section className='Hero h-[600px] m-auto w-[87dvw] text-white flex flex-col md:justify-center justify-start   md:items-center items-start'>
      <section className='Hero h-[100%] md:m-auto mx-auto  w-[87dvw] flex justify-center md:items-center items-start'>
        <div className="main-box w-[85%] md:m-auto mx-auto h-[100%] flex flex-col justify-around  items-center">
          <h2 className='md:text-[55px] text-[45px] font-semibold text-center w-11/12 leading-tight'>Track Your Farming Expenses with Eversity</h2>
          <p className='text-center md:w-[70%] sm:w-[100%] md:text-[20px]'>FarmExpense Tracker is a web-based platform designed to simplify financial management for farmers. With its intuitive interface and powerful features, you can easily track your farming expenses and incomes, making informed decisions to optimize your farm's profitability.</p>
          <div className="btns w-[320px] flex ">
            <button className='w-[160px] mr-5 bg-black px-6 py-2 text-base border hover:text-black hover:bg-white'>Sign Up</button>
            <button className='w-[160px] ml-5 bg-white text-black px-6 py-2 text-base border hover:bg-black hover:text-white'>Learn More</button>
          </div>
        </div>
      </section>
    </section>
      <Details component={1} />
      <Details component={2} />
      </>
  )
}

export default page