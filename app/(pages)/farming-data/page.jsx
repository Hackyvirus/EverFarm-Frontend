'use client'
// pages/FarmRegistration.js
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

const FarmRegistration = () => {
  const [formData, setFormData] = useState({
    farmName: '',
    farmLocation: '',
    area: '',
    laborers: '',
    laborPayment: '',
    income: '',
    loss: '',
    investment: '',
    totalMoney: '',
    experience: '',
    cropCount: '',
    crops: '',
    irrigationMethods: '',
    farmingMachines: '',
    expectedEarnings: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/farm', formData);
      // Reset form after successful submission
      setFormData({
        farmName: '',
        farmLocation: '',
        area: '',
        laborers: '',
        laborPayment: '',
        income: '',
        loss: '',
        investment: '',
        totalMoney: '',
        experience: '',
        cropCount: '',
        crops: '',
        irrigationMethods: '',
        farmingMachines: '',
        expectedEarnings: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Farm Registration</title>
        <meta name="description" content="Register your farm and provide detailed information." />
      </Head>
      <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Farm Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-12">
            {/* Form fields */}
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block font-medium text-white text-lg">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type={typeof formData[key] === 'number' ? 'number' : 'text'}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            ))}
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Register Farm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmRegistration;
