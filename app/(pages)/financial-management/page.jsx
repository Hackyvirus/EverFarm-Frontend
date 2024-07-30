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
      <section className='w-[85dvw] my-10 h-[400px] mx-auto flex flex-col text-white justify-around'>

        <h2 className='mx-auto text-5xl font-semibold'>Finacial Management Dashboard</h2>
        <main className='w-full mx-auto h-[260px] flex justify-center gap-20 items-center'>
          <div className='left  w-[450px] h-full flex flex-col justify-between'>
            <div className='h-[60px] border border-white w-full  flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black text-xl  text-center  font-semibold'>Current Balance</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white  '>$12,000</div>
            </div>
            <div className='h-[60px]  border border-white w-full flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black text-xl  text-center  font-semibold'>Cash Flow</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
            <div className='h-[60px] border border-white w-full flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black text-xl  text-center  font-semibold'>Total Expense</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
          </div>
          <div className='left    w-[450px] h-full flex flex-col justify-between'>
            <div className='h-[60px] border border-white w-full  flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black text-xl  text-center  font-semibold'>Financial Health</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>Normal</div>
            </div>
            <div className=' border border-white h-[60px] w-full flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black  text-xl  text-center font-semibold'>Savings & Investments</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
            <div className='border border-white h-[60px] w-full flex justify-around items-center'>
              <div className='h-[60px] w-1/2 flex justify-center items-center bg-white text-black text-xl  text-center  font-semibold'>Total Income</div>
              <div className='h-[60px] w-1/2 flex justify-center items-center  font-semibold text-white '>$12,000</div>
            </div>
          </div>
        </main>
      </section>
      <section className='w-[85dvw] my-10 h-[550px] mx-auto flex flex-col text-white justify-evenly'>
        <h2 className='mx-auto text-5xl font-semibold '>Expense BreakDown</h2>
        <table className='w-full h-[350px]'>
          <thead>
            <tr className='bg-black text-white font-semibold'>
              <td className='text-center border text-2xl'>Features</td>
              <td className='text-center border text-2xl'>Farm No</td>
              <td className='text-center border text-2xl'>Farm No</td>
              <td className='text-center border text-2xl'>Farm No</td>
              <td className='text-center border text-2xl'>Farm No</td>
              <td className='text-center border text-2xl'>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-center border bg-white text-black font-semibold '>Seeds</td>
              <td className='text-center border bg-white text-black font-semibold '>$50,000</td>
              <td className='text-center border bg-white text-black font-semibold '>$50,000</td>
              <td className='text-center border bg-white text-black font-semibold '>$50,000</td>
              <td className='text-center border bg-white text-black font-semibold '>$50,000</td>
              <td className='text-center border bg-white text-black font-semibold '>Total</td>
            </tr>
            <tr>
              <td className='text-center border bg-black text-white font-semibold '>Fertilizers</td>
              <td className='text-center border bg-black text-white font-semibold '>$50,000</td>
              <td className='text-center border bg-black text-white font-semibold '>$50,000</td>
              <td className='text-center border bg-black text-white font-semibold '>$50,000</td>
              <td className='text-center border bg-black text-white font-semibold '>$50,000</td>
              <td className='text-center border bg-black text-white font-semibold '>Total</td>
            </tr>
            <tr>
              <td className='text-center border bg-white text-black font-semibold '>Labour</td>
              <td className='text-center border bg-white text-black font-semibold '>$50,000</td>
              <td className='text-center border bg-white text-black font-semibold '>$50,000</td>
              <td className='text-center border bg-white text-black font-semibold '>$50,000</td>
              <td className='text-center border bg-white text-black font-semibold '>$50,000</td>
              <td className='text-center border bg-white text-black font-semibold '>Total</td>
            </tr>
            <tr>
              <td className='text-center border bg-black text-white font-semibold '>Equipment</td>
              <td className='text-center border bg-black text-white font-semibold '>$50,000</td>
              <td className='text-center border bg-black text-white font-semibold '>$50,000</td>
              <td className='text-center border bg-black text-white font-semibold '>$50,000</td>
              <td className='text-center border bg-black text-white font-semibold '>$50,000</td>
              <td className='text-center border bg-black text-white font-semibold '>Total</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='h-[700px] w-[85dvw] mx-auto flex flex-col justify-around items-center '>
        <div className='w-full h-[46%] flex flex-col justify-around items-center'>
          <h2 className='text-start w-max text-2xl text-white font-semibold '>Expense BreakDown</h2>
          <table className='w-full h-max'>
            <thead>
              <tr className='h-7'>
                <td className='bg-white font-semibold text-black text-2xl text-center border'>Loans From</td>
                <td className='bg-white text-black text-2xl font-semibold text-center border'>Amount</td>
                <td className='bg-white text-black text-2xl font-semibold text-center border'>Interest</td>
                <td className='bg-white text-black text-2xl font-semibold text-center border'>Time?</td>
              </tr>
            </thead>
            <tbody>
              <tr className='h-10'>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>Banks</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>$50,000</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>15%</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>5 Years</td>
              </tr>
              <tr className='h-10'>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>Sarpanch</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>$500</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>12%</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>2 Years</td>
              </tr>
              <tr className='h-10'>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>Sushant</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>$10,000</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>10%</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>7 Years</td>
              </tr>
              <tr className='h-10'>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>Sanket</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>$2000</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>11%</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>3 Years</td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className='w-full h-[46%] flex flex-col justify-around items-center'>
          <h2 className='text-start w-max text-2xl text-white font-semibold '>Debt Repayment Tracker</h2>
          <table className='w-full h-max'>
            <thead>
              <tr className='h-7'>
                <td className='bg-white font-semibold text-black text-2xl text-center border'>Debtor</td>
                <td className='bg-white text-black text-2xl font-semibold text-center border'>Amount</td>
                <td className='bg-white text-black text-2xl font-semibold text-center border'>When</td>
              </tr>
            </thead>
            <tbody>
              <tr className='h-10'>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>Banks</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>$50,000</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>15 Months Later</td>

              </tr>
              <tr className='h-10'>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>Sarpanch</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>$500</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>2 Years Later</td>
              </tr>
              <tr className='h-10'>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>Sushant</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>$10,000</td>
                <td className='bg-black text-white text-xl py-3 font-semibold text-center border'>7 Days Later</td>
              </tr>
              <tr className='h-10'>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>Sanket</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>$2000</td>
                <td className='bg-white text-black text-xl py-3 font-semibold text-center border'>3 Years Later</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      <section className='h-[700px] w-[85dvw]  mx-auto flex flex-col justify-center gap-10 items-center '>
        <h2 className='text-2xl font-semibold mx-auto text-white'>Investment Analysis</h2>
        <div className='h-[500px] w-full flex justify-between items-center'>
          <div className='w-[46%] h-full'>
            <DoughnutChart data={doughnutData} options={options} />
          </div>
          <div className='w-[46%] h-full'>
            <DoughnutChart data={doughnutData} options={options} />
          </div>
        </div>
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