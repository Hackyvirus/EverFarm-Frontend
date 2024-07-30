import '@styles/globals.css'
import Navbar from '@components/navbar/page'
import Footer from '@components/Footer/page'



const layout = ({ children }) => {
  return (
    <html lang='en' className='Dark'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        />
        <title>Everfarm</title>
      </head>
      <body className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <div></div>
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  )
}

export default layout
