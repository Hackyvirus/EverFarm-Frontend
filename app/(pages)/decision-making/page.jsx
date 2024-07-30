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
      <section className='text-white flex h-[550px] flex-col gap-8 justify-center items-center'>
        <h2 className='text-5xl font-semibold'>Decision Making Dashboard</h2>

        <div className='h-16 w-[600px] flex justify-center items-center'>
          <h2 className='bg-black h-16 text-white flex items-center justify-center  font-semibold text-xl px-4 border w-[300px] text-center'>Current Health Status</h2>
          <h2 className='bg-white h-16 flex items-center justify-center text-black font-semibold text-2xl border w-1/2 text-center'>Healthy</h2>
        </div>

        <div className='flex justify-between h-[300px] items-center w-[85dvw]'>
          <div className='flex justify-start gap-5 h-full  items-center flex-col w-[46%]'>
            <div className='w-[60%] mx-auto flex justify-center items-center mt-10'>
              <h2 className='text-2xl font-semibold h-14 bg-white text-black px-8 flex items-center'>Key Matrics</h2>
            </div>
            <table className='border w-full'>
              <tbody>
              <tr className='flex w-full h-14 justify-between'>
                <td className='bg-white border-black border flex w-1/2 justify-center items-center text-black text-2xl font-semibold'>Yeald</td>
                <td className='text-xl w-1/2 border flex justify-center items-center font-semibold'>4 Tons/Hector</td>
              </tr>
              <tr className='flex w-full h-14 justify-between'>
                <td className='bg-white border-black border flex w-1/2 justify-center items-center text-black text-2xl font-semibold'>Profitibility</td>
                <td className='text-xl w-1/2 border flex justify-center items-center font-semibold'>50,000/Month</td>
              </tr>
              <tr className='flex w-full h-14 justify-between'>
                <td className='bg-white border-black border flex w-1/2 justify-center items-center text-black text-2xl font-semibold'>Water Usage</td>
                <td className='text-xl w-1/2 border flex justify-center items-center font-semibold'>2500 Litres/day</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className='flex justify-start gap-5 h-full  items-center flex-col w-[46%]'>
            <div className='w-[60%] mx-auto flex justify-center items-center mt-10'>
              <h2 className='text-2xl font-semibold h-14 bg-white text-black px-8 flex items-center'>Action Items</h2>
            </div>
            <table className='border w-full'>
             <tbody>
             <tr className='flex w-full h-14 justify-between'>
                <td className='bg-white border-black border flex w-1/2 justify-center items-center text-black text-2xl font-semibold'>Apply Fertilizer</td>
                <td className='text-xl w-1/2 border flex justify-center items-center font-semibold'>Farm 1</td>
              </tr>
              <tr className='flex w-full h-14 justify-between'>
                <td className='bg-white border-black border flex w-1/2 justify-center items-center text-black text-2xl font-semibold'>Monitor Pest Activity</td>
                <td className='text-xl w-1/2 border flex justify-center items-center font-semibold'>Farm 2</td>
              </tr>
              <tr className='flex w-full h-14 justify-between'>
                <td className='bg-white border-black border flex w-1/2 justify-center items-center text-black text-2xl font-semibold'>Give Water</td>
                <td className='text-xl w-1/2 border flex justify-center items-center font-semibold'>Farm 3</td>
              </tr>
             </tbody>

            </table>
          </div>
        </div>
      </section>
      <section className='w-[85dvw] h-max m-auto'>
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

     </section>
      <section className='h-[600px] relative mb-20 border w-[85dvw] m-auto flex justify-center items-center'>
        <div className='w-48 h-28 flex flex-col justify-center gap-4 items-center rounded-md absolute text-lg font-semibold text-white top-7 right-7 bg-slate-600 '>
          <h2>Today</h2>
          <h2>Tempreture</h2>
        </div>
        <h2 className='text-2xl font-semibold text-white '>Tempreture Map</h2>
      </section>
      <section className='text-white flex w-[85dvw] m-auto h-[550px] border flex-col gap-8 justify-center items-center'>
        <h2 className='text-5xl font-semibold'>Crop Management Data</h2>
        <div className='w-full h-max flex justify-between items-center'>
          <div className='w-full flex justify-around h-[400px] items-center '>
            <div className='w-[96%] border h-full  flex flex-col justify-start gap-10'>
              <div className='border w-full h-16 flex justify-between items-center'>
                <h2 className='w-1/2 h-full bg-white text-black text-2xl flex justify-center items-center font-semibold'>Crop Health</h2>
                <h2 className='w-1/2 h-full bg-black text-white text-2xl flex justify-center items-center font-semibold'>Healthy</h2>
              </div>
              <div className='h-[250px] '>
                <div className='border w-full h-16 flex justify-between bg-white text-black  items-center'>
                  <h2 className='w-full h-full flex justify-center text-2xl font-semibold items-center'>Pest and Disease Alerts</h2>
                </div>
                <div className='w-[80%] flex m-auto mt-5 justify-center items-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque consequatur molestias aliquam molestiae sed quidem? Deserunt tenetur modi animi quisquam eaque! Possimus maiores vel necessitatibus odio recusandae fugiat officia.
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-around h-[400px] items-center '>
            <div className='w-[96%] border h-full  flex flex-col justify-start gap-10'>
              <div className='h-[250px] '>
                <div className='border w-full h-16 flex justify-between bg-white text-black  items-center'>
                  <h2 className='w-full h-full flex justify-center text-2xl font-semibold items-center'>Pest and Disease Alerts</h2>
                </div>
                <div className='w-[80%] flex m-auto mt-5 justify-center items-center'>
                 <ul className='flex flex-col h-full w-full gap-4'>
                  <li className=' text-base'>1) Lorem ipsum dolor sit amet conng elit. Amet, officiis!</li>
                  <li className=' text-base'>2) Lorem ipsum dolor sit amet consectetur . As!</li>
                  <li className=' text-base'>3) Lorem ipsum dolor sit amet consectetur adipisicing  Amet, officiis!</li>
                  <li className=' text-base'>4) Lorem ipsum dolor sit  adipisicing elit. Amet, officiis!</li>
                  <li className=' text-base'>5) Lorem ipsum dolor sit amet  elit. Amet, officiis!</li>
                 </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  className='text-white flex w-[85dvw] mx-auto my-10 h-[400px] border  gap-8 justify-center items-start'>
      <div className='w-[48%] h-max flex justify-between items-center'>
          <div className='w-full flex justify-around h-[400px] items-center '>
            <div className='w-[96%] border h-full  flex flex-col justify-start gap-10'>
              <div className='border w-full h-16 flex justify-between items-center'>
                <h2 className='w-1/2 h-full bg-white text-black text-2xl flex justify-center items-center font-semibold'>Soil Health</h2>
                <h2 className='w-1/2 h-full bg-black text-white text-2xl flex justify-center items-center font-semibold'>Healthy</h2>
              </div>
              <div className='h-[250px] '>
                <div className='border w-full h-16 flex justify-between bg-white text-black  items-center'>
                  <h2 className='w-full h-full flex justify-center text-2xl font-semibold items-center'>Pest and Disease Alerts</h2>
                </div>
                <div className='w-[80%] flex m-auto mt-5 justify-center items-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque consequatur molestias aliquam molestiae sed quidem? Deserunt tenetur modi animi quisquam eaque! Possimus maiores vel necessitatibus odio recusandae fugiat officia.
                </div>
              </div>
            </div>
          </div>
          </div>
      <div className='w-[48%] h-max flex justify-between items-center'>
          <div className='w-full flex justify-around h-[400px] items-center '>
            <div className='w-[96%] border h-full  flex flex-col justify-start gap-10'>
              <div className='border w-full h-16 flex justify-between items-center'>
                <h2 className='w-1/2 h-full bg-white text-black text-2xl flex justify-center items-center font-semibold'>Crop Health</h2>
                <h2 className='w-1/2 h-full bg-black text-white text-2xl flex justify-center items-center font-semibold'>Healthy</h2>
              </div>
              <div className='h-[250px] '>
                <div className='border w-full h-16 flex justify-between bg-white text-black  items-center'>
                  <h2 className='w-full h-full flex justify-center text-2xl font-semibold items-center'>Pest and Disease Alerts</h2>
                </div>
                <div className='w-[80%] flex m-auto mt-5 justify-center items-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis neque consequatur molestias aliquam molestiae sed quidem? Deserunt tenetur modi animi quisquam eaque! Possimus maiores vel necessitatibus odio recusandae fugiat officia.
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
     
    

    </>
  )
}

export default page