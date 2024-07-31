'use client';

import axios from 'axios';
import React, { useState } from 'react';

const SignUp = () => {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setForm({
                userName: '',
                email: '',
                phone: '',
                password: ''
            })
            const res = await axios.post('/auth/signup', form);
            console.log(form)
            if (res.data.success) {
                console.log('User created successfully:', res.data.message);
            } else {
                console.error('Error:', res.data.message);
            }
        } catch (error) {
            console.error('Axios error:', error);
        }
    };

    return (
        <div className='text-white w-[90dvw] mx-auto h-[600px] flex items-center flex-col justify-start gap-10'>
            <h2 className='font-bold text-center text-4xl mt-10'>Sign Up Form</h2>
            <form onSubmit={handleSubmit} className='w-[50%]'>
                <div className='w-[100%] mx-auto flex justify-between items-center h-20'>
                    <label htmlFor="userName">User Name: </label>
                    <input type="text" name="userName" id="userName" value={form.userName} onChange={handleChange} className='w-[70%] rounded-sm py-1 pl-2 focus:outline-none focus:text-black' />
                </div>
                <div className='w-[100%] mx-auto flex justify-between items-center h-20'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className='w-[70%] rounded-sm py-1 pl-2 focus:outline-none focus:text-black' />
                </div>
                <div className='w-[100%] mx-auto flex justify-between items-center h-20'>
                    <label htmlFor="phone">Phone No: </label>
                    <input type="tel" name="phone" id="phone" value={form.phone} onChange={handleChange} className='w-[70%] rounded-sm py-1 pl-2 focus:outline-none focus:text-black' />
                </div>
                <div className='w-[100%] mx-auto flex justify-between items-center h-20'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={form.password} onChange={handleChange} className='w-[70%] py-1 pl-2 rounded-sm focus:outline-none focus:text-black' />
                </div>
                <div className='w-[100%] mx-auto flex justify-center items-center h-20'>
                    <button type='submit' className='w-[100%] bg-white p-2 rounded-lg px-20 text-black font-semibold cursor-pointer hover:bg-slate-300'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
