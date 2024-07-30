'use client'
import Image from "next/image"
import logoi from '@public/assets/images/logo.png'
import Link from "next/link"
import { navlinks } from "@app/constants/NavLinks"
import { useState } from "react"


const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className={`w-[95dvw] m-auto  h-[90px] flex items-center justify-around`}>
      <Link href="/" className="w-fit h-full flex justify-evenly items-center">
        <Image src={logoi} height={100} width={100} alt="logo" />
      </Link>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <nav className={`md:flex md:items-center h-full md:w-[80dvw] w-full justify-between ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex justify-between items-center w-full">
          {navlinks.map((item) => (
            <li key={item.label} className="w-44 list-item list-none lg:text-[16px] md:text-[14px]  sm:font-semibold sm:text-xs sm:text-center xsm:text-[0.6rem] xsm:text-center xsm:font-bold "><Link className="text-white text-bold hover:text-blue-800" href={item.href} >{item.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default page

// components/Navbar.js
// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">
//           <Link href="/">
//             Logo
//           </Link>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <Link href="/">
//             Home
//           </Link>
//           <Link href="/about">
//             About
//           </Link>
//           <Link href="/services">
//             Services
//           </Link>
//           <Link href="/contact">
//             Contact
//           </Link>
//           <Link href="/blog">
//             Blog
//           </Link>
//           <Link href="/faq">
//             FAQ
//           </Link>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white">
//             ☰
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden flex flex-col justify-between items-end mt-4">
//           <Link href="/">
//             Home
//           </Link>
//           <Link href="/about">
//             About
//           </Link>
//           <Link href="/services">
//             Services
//           </Link>
//           <Link href="/contact">
//             Contact
//           </Link>
//           <Link href="/blog">
//             Blog
//           </Link>
//           <Link href="/faq">
//             FAQ
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
