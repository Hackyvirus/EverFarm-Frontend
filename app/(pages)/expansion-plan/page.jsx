'use client'
import React from 'react'
import BarChart from '@components/bar/page';
import DoughnutChart from '@components/dChar/page';
import LineChart from '@components/lineChart/page';
import PieChart from '@components/pieChar/page';
const page = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Expenses',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Income',
        data: [50, 40, 70, 90, 40, 50],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }
    ]
  };

  const pieData = {
    labels: ['Rent', 'Utilities', 'Groceries', 'Transportation', 'Entertainment'],
    datasets: [
      {
        data: [300, 50, 100, 80, 120],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const doughnutData = {
    labels: ['Land Purchase', 'Equipments', 'Given Money'],
    datasets: [
      {
        data: [200, 150, 250],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  return (
    <>
      <section className='w-[85dvw] h-[550px] mx-auto mt-10 flex-col flex justify-around items-center'>
        <h2 className='text-3xl font-semibold text-white'>Top Crops By Revenue</h2>
        <div className='h-[450px] w-full flex justify-center items-center'>
          <BarChart data={barData} options={options} />
        </div>
      </section>
      <section className='w-[85dvw] h-[550px] mx-auto my-10 flex-col flex justify-start gap-10 items-center'>
        <h2 className='text-3xl font-semibold text-white'>Crops Overview</h2>
        <table className='w-full h-max'>
          <thead>
            <tr className='h-12 text-center w-full bg-white text-black font-semibold text-2xl'>
              <td className='border border-black'>Crop Name</td>
              <td className='border border-black'>Crop Duration</td>
              <td className='border border-black'>Investment</td>
              <td className='border border-black'>Revenue</td>
              <td className='border border-black'>Risk</td>
            </tr>
          </thead>
          <tbody>
            <tr className='h-12 text-center bg-black text-white text-xl'>
              <td className='border'>Cotton</td>
              <td className='border'>7 Months</td>
              <td className='border'>2,00,000</td>
              <td className='border'>5,00,000</td>
              <td className='border'>Mid Level</td>
            </tr>
            <tr className='h-12 text-center bg-white text-black text-xl'>
              <td className='border'>Sugar Cane</td>
              <td className='border'>7 Months</td>
              <td className='border'>2,00,000</td>
              <td className='border'>5,00,000</td>
              <td className='border'>Mid Level</td>
            </tr>
            <tr className='h-12 text-center bg-black text-white text-xl'>
              <td className='border'>Cotton</td>
              <td className='border'>7 Months</td>
              <td className='border'>2,00,000</td>
              <td className='border'>5,00,000</td>
              <td className='border'>Mid Level</td>
            </tr>
            <tr className='h-12 text-center bg-white text-black text-xl'>
              <td className='border'>Sugar Cane</td>
              <td className='border'>7 Months</td>
              <td className='border'>2,00,000</td>
              <td className='border'>5,00,000</td>
              <td className='border'>Mid Level</td>
            </tr>
            <tr className='h-12 text-center bg-black text-white text-xl'>
              <td className='border'>Cotton</td>
              <td className='border'>7 Months</td>
              <td className='border'>2,00,000</td>
              <td className='border'>5,00,000</td>
              <td className='border'>Mid Level</td>
            </tr>
            <tr className='h-12 text-center bg-white text-black text-xl'>
              <td className='border'>Sugar Cane</td>
              <td className='border'>7 Months</td>
              <td className='border'>2,00,000</td>
              <td className='border'>5,00,000</td>
              <td className='border'>Mid Level</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='w-[85dvw] my-10 mx-auto flex justify-between items-center'>
        <section className='text-white flex justify-center items-center w-[50%] h-[400px]'>
          <BarChart data={barData} options={options} />
        </section>
        <section className='text-white flex justify-center items-center w-[50%] h-[400px]'>
          <LineChart data={lineData} options={options} />
        </section>
      </section>
      <section className='w-[85dvw] my-10 mx-auto  flex justify-between items-center'>
        <section className='text-white flex justify-center items-center  w-[50%] h-[400px]'>
          <PieChart data={pieData} options={options} />
        </section>
        <section className='text-white flex justify-center items-center w-[50%] h-[400px]'>
          <DoughnutChart data={doughnutData} options={options} />
        </section>
      </section>
      <section className='w-[85dvw] h-[500px] my-10 mx-auto  flex justify-between items-center'>
        <div className='w-[46%] h-full flex flex-col justify-between items-center'>
        <div className='h-[46%] w-full border rounded-lg bg-white flex justify-center items-center'>
            <div className='p-10 bg-black text-white font-semibold text-3xl text-center rounded-md cursor-pointer'>Case Study</div>
          </div>
          <div className='h-1/2 w-full border rounded-lg bg-white flex justify-center items-center'>
            <div className='p-10 bg-black text-white font-semibold text-3xl text-center rounded-md cursor-pointer'>Case Study</div>
          </div>
        </div>
        <div className='w-[46%] h-full flex flex-col justify-between items-center'>
          <div className='h-[46%] w-full border rounded-lg bg-white flex justify-center items-center'>
            <div className='p-10 bg-black text-white font-semibold text-3xl text-center rounded-md cursor-pointer'>Case Study</div>
          </div>
          <div className='h-[46%] w-full border rounded-lg bg-white flex justify-center items-center'>
            <div className='p-10 bg-black text-white font-semibold text-3xl text-center rounded-md cursor-pointer'>Case Study</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page