'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        pass: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', formData); // Adjust the URL if necessary
            if (response.status === 200) { // Check for a successful response
                // Redirect to home page
                router.push('/');
            } else {
                setErrorMessage('Login failed: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Error during login: ' + (error.response?.data?.message || 'Please try again.'));
        }
    };

    return (
        <div className='text-white w-[90dvw] mx-auto h-[500px] flex items-center flex-col justify-start gap-10'>
            <h2 className='font-bold text-center text-4xl mt-10'>Login Form</h2>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit} className='w-[50%]'>
                <div className='w-[100%] mx-auto flex justify-between items-center h-20'>
                    <label htmlFor="name">User Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='w-[70%] rounded-sm py-1 pl-2 focus:outline-none focus:text-black'
                        required
                    />
                </div>
                <div className='w-[100%] mx-auto flex justify-between items-center h-20'>
                    <label htmlFor="pass">Password: </label>
                    <input
                        type="password"
                        name="pass"
                        id="pass"
                        value={formData.pass}
                        onChange={handleChange}
                        className='w-[70%] py-1 pl-2 rounded-sm focus:outline-none focus:text-black'
                        required
                    />
                </div>
                <div className='w-[100%] mx-auto flex justify-center items-center h-20'>
                    <button type='submit' className='w-[100%] bg-white p-2 rounded-lg px-20 text-black font-semibold cursor-pointer hover:bg-slate-300'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
