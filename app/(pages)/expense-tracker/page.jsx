'use client'
import BarChart from '@components/bar/page';
import DoughnutChart from '@components/dChar/page';
import LineChart from '@components/lineChart/page';
import PieChart from '@components/pieChar/page';


import React from 'react'


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
    labels: ['Savings', 'Investments', 'Expenses'],
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
      <section className='w-[85dvw] h-[400px] mx-auto flex flex-col text-white justify-around'>
        <h2 className='font-semibold text-2xl mx-auto '>Expense Tracker Dashboard</h2>
        <main className='w-full mx-auto h-[260px] flex justify-center gap-20 items-center'>
          <div className='left  w-[450px] h-full flex flex-col justify-between'>
            <div className='h-[60px] border border-white w-full  flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black font-semibold'>Total Expense</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white  '>$12,000</div>
            </div>
            <div className='h-[60px]  border border-white w-full flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black font-semibold'>Total Expense</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
            <div className='h-[60px] border border-white w-full flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black font-semibold'>Total Expense</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
          </div>
          <div className='left    w-[450px] h-full flex flex-col justify-between'>
            <div className='h-[60px] border border-white w-full  flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black font-semibold'>Total Expense</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
            <div className=' border border-white h-[60px] w-full flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black font-semibold'>Total Expense</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
            <div className='border border-white h-[60px] w-full flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black font-semibold'>Total Expense</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
          </div>
        </main>
      </section>
      <section className='w-[85dvw] h-[500px] mx-auto flex flex-col text-white mt-20 gap-14 justify-start'>
        <h2 className='font-semibold text-2xl mx-auto '>Total Expense</h2>
        <table className='w-full mx-auto h-auto gap-20 bg-slate-600 border  border-red-500' >
          <thead className='bg-white text-black font-semibold text-2xl h-16 '>
            <tr>
              <th className='border'>Date</th>
              <th className='border'>Category</th>
              <th className='border'>Discription</th>
              <th className='border'>Amount</th>
              <th className='border'>Payment Method</th>
              <th className='border'>Receit</th>
            </tr>
          </thead>
          <tbody>
            <tr className='h-16 text-xl '>
              <td className='border-2 border-white text-center'>12/07/2024</td>
              <td className='border-2 border-white text-center'>Seeds</td>
              <td className='border-2 border-white text-center'>Weats Seeds</td>
              <td className='border-2 border-white text-center'>5,000</td>
              <td className='border-2 border-white text-center'>Cash</td>
              <td className='border-2 border-white text-center'>Link</td>
            </tr>
            <tr className='h-16 text-xl '>
              <td className='border-2 border-white text-center'>12/07/2024</td>
              <td className='border-2 border-white text-center'>Seeds</td>
              <td className='border-2 border-white text-center'>Weats Seeds</td>
              <td className='border-2 border-white text-center'>5,000</td>
              <td className='border-2 border-white text-center'>Cash</td>
              <td className='border-2 border-white text-center'>Link</td>
            </tr>
            <tr className='h-16 text-xl '>
              <td className='border-2 border-white text-center'>12/07/2024</td>
              <td className='border-2 border-white text-center'>Seeds</td>
              <td className='border-2 border-white text-center'>Weats Seeds</td>
              <td className='border-2 border-white text-center'>5,000</td>
              <td className='border-2 border-white text-center'>Cash</td>
              <td className='border-2 border-white text-center'>Link</td>
            </tr>
            <tr className='h-16 text-xl '>
              <td className='border-2 border-white text-center'>12/07/2024</td>
              <td className='border-2 border-white text-center'>Seeds</td>
              <td className='border-2 border-white text-center'>Weats Seeds</td>
              <td className='border-2 border-white text-center'>5,000</td>
              <td className='border-2 border-white text-center'>Cash</td>
              <td className='border-2 border-white text-center'>Link</td>
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
    </>
  )
}

export default page