import List from '@components/footer-list-comp/page'
import Image from 'next/image'
import Link from 'next/link'
import Insta from '@public/assets/images/instagram.png'
import Logo from '@public/assets/images/logo.png'
import Linke from '@public/assets/images/linkedin.png'
import Copy from '@components/copyRight/page'


const Footer = () => {
    return (
        <>
            <footer className='text-white w-[95dvw] h-[330px] flex m-auto border-y-2' >
                <div className='w-[15%]  flex justify-center items-center'>
                    <Link href="/"><h1 className='font-bold text-4xl'>Eversity</h1></Link>
                </div>
                <div className='w-[60%] flex justify-between items-start'>
                    <List title="Finacial Tracker" item1="Expense Tracking" item1link="/" item2="Income Tracking" item2link="/" item3="Finacial Management" item3link="/" item4="Desion Making" item4link="/" item5="Simplified Solution" item5link="/" />
                    <List title="Finacial Tracker" item1="Expense Tracking" item1link="/" item2="Income Tracking" item2link="/" item3="Finacial Management" item3link="/" item4="Desion Making" item4link="/" item5="Simplified Solution" item5link="/" />
                    <List title="Finacial Tracker" item1="Expense Tracking" item1link="/" item2="Income Tracking" item2link="/" item3="Finacial Management" item3link="/" item4="Desion Making" item4link="/" item5="Simplified Solution" item5link="/" />
                </div>
                <div className='w-[25%]  flex flex-col h-full  justify-evenly items-start'>
                    <div className='font-bold text-center flex justify-center items-start'>
                        <h2 className='font-bold text-xl text-start'>Subscribe</h2>
                    </div>
                    <div className='h-[70%] w-[90%] flex flex-col justify-around items-start'>
                        <p className='text-[17px] font-light'>Stay Update with our Newsletters</p>
                        <form action="/newletter" className='w-[100%] h-8 flex justify-around items-center' method="post">
                            <input type="text" className='w-[80%] h-full rounded-none pl-2 focus:outline-none focus:text-black' placeholder='Enter Your Email' />
                            <button className='w-[20%] rounded-sm h-full bg-black ' type='submit'>Join</button>
                        </form>
                        <p>Stay informed with our latest updates and features.</p>
                        <div className='flex w-[95%] mx-auto justify-between items-center'>
                            <Link href="/"><Image className='w-10' src={Insta} alt='social Media Icon' /></Link>
                            <Link href="/"><Image className='w-10' src={Linke} alt='social Media Icon' /></Link>
                            <Link href="/"><Image className='w-10' src={Logo} alt='social Media Icon' /></Link>
                            <Link href="/"><Image className='w-10' src={Linke} alt='social Media Icon' /></Link>
                            <Link href="/"><Image className='w-10' src={Insta} alt='social Media Icon' /></Link>
                        </div>
                    </div>
                </div>
            </footer>
            <Copy />
        </>
    )
}

export default Footer