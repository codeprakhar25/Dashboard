import React from 'react'
import '@styles/global.css'
import Navbar from '@components/Navbar'
import Provider from '@components/Provider'

export const metadata={
    title :"DashBoard",
    description:"Discover and share AI prompts"
}

const layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
   <html lang='en'>
<body>
    <Provider>

    <div className="main">
        <div className="gradient">

        </div>
    </div>
    <main className='app'>
        <Navbar/>
        {children}
    </main>
    </Provider>
</body>
   </html>
  )
}

export default layout
