import Link from 'next/link'
import React from 'react'


const Copy = () => {
    return (
        <div className='my-4 flex justify-around w-[90%] mx-auto text-white'>
            <Link href="/"> <p>@2024 Expense Tracker, All rights are reserved</p></Link>
            <Link href="/"> <p>Privacy & Policy</p></Link>
            <Link href="/"> <p>Tearms of Services</p></Link>
            <Link href="/"> <p>Cokie Setings</p></Link>
        </div>
    )
}

export default Copy