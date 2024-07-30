'use client'
import React, { useState } from 'react'
import IMG from '@public/assets/images/farmer2.jpg'
import Image from 'next/image'
import axios from 'axios'

const FarmManagement = () => {
  const [isDiseaseDetected, setIsDiseaseDetected] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [diseaseInfo, setDiseaseInfo] = useState(null) // New state to hold disease info

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedImage(URL.createObjectURL(file))
    }
  }

  const handleUpload = async (event) => {
    event.preventDefault()
    if (!uploadedImage) return // Exit if no image is uploaded

    const formData = new FormData()
    const fileInput = document.getElementById('file')
    formData.append('file', fileInput.files[0])

    try {
      const response = await axios.post('/api/upload', formData, { 
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      if (response.status === 200) {
        setIsDiseaseDetected(true)
        setDiseaseInfo(response.data) // Set the received disease info
      } else {
        console.error('Error detecting disease:', response.data)
        setIsDiseaseDetected(false)
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      setIsDiseaseDetected(false)
    }
  }

  return (
    <>
      <section className='w-[85dvw] h-[400px] mx-auto flex flex-col text-white justify-around'>
        <h2 className='font-semibold text-2xl mx-auto'>Expense Tracker Dashboard</h2>
        <main className='w-full mx-auto h-[260px] flex justify-center gap-20 items-center'>
          {/* Dashboard Content Here */}
        </main>
      </section>
      <section className='flex w-[85dvw] mx-auto h-[500px] border border-white text-white'>
        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
          <form className='w-full h-[300px] flex flex-col justify-start gap-10 mt-10 items-center' onSubmit={handleUpload}>
            <input className='w-full text-center border-none' type='file' id='file' name='file' onChange={handleFileUpload} />
            <button className='h-[10%] w-[100px] rounded-lg hover:bg-slate-500 hover:text-white bg-white text-black font-semibold' type='submit'>Upload</button>
          </form>
        </div>
        <div className='w-1/2 h-full flex justify-center items-center'>
          {uploadedImage ? <Image width={100} height={100} src={uploadedImage} className='h-full w-full content-normal' alt='Uploaded Photo' /> : <Image width={100} height={100} src={IMG} className='h-full w-full content-normal' alt='Default Photo' />}
        </div>
      </section>
      {isDiseaseDetected && (
        <section className='w-[85dvw] my-10 h-[600px] mx-auto flex flex-col text-white justify-start gap-14'>
          <div className='w-[65%] mx-auto h-16 font-semibold text-xl flex justify-around items-center mt-10'>
            <h2 className='border w-1/2 h-full flex justify-center items-center border-white'>Your Plant Has</h2>
            <h2 className='border w-1/2 h-full flex justify-center items-center'>{diseaseInfo ? `${diseaseInfo.diseaseName} (${diseaseInfo.diseasePercentage}%)` : 'Healthy'}</h2>
          </div>
          <table className='border h-max'>
            <thead className='bg-white text-black text-xl h-16'>
              <tr>
                <td className='border text-center'>SR</td>
                <td className='border text-center'>Disease Name</td>
                <td className='border text-center'>Pesticide Name</td>
                <td className='border text-center'>Company Name</td>
                <td className='border text-center'>Rating</td>
                <td className='border text-center'>Website</td>
                <td className='border text-center'>Price</td>
              </tr>
            </thead>
            <tbody className='text-lg'>
              {diseaseInfo && diseaseInfo.treatments.map((treatment, index) => (
                <tr key={index}>
                  <td className='border text-center h-16'>{index + 1}</td>
                  <td className='border text-center h-16'>{diseaseInfo.diseaseName}</td>
                  <td className='border text-center h-16'>{treatment.pesticideName}</td>
                  <td className='border text-center h-16'>{treatment.companyName}</td>
                  <td className='border text-center h-16'>{treatment.rating}</td>
                  <td className='border text-center h-16'>{treatment.website}</td>
                  <td className='border text-center h-16'>{treatment.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  )
}

export default FarmManagement
