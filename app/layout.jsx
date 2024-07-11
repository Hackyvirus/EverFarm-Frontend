import '@styles/globals.css'

const layout = ({children}) => {
  return (
    <html lang='en'>
      <head>
        <title>Everfarm</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default layout
