import React, { useEffect } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
// import Scrollbar from 'smooth-scrollbar'


const BasicLayout = ({ children }) => {


  // var options = {
  //   danping: 0.1,
  //   thumbMinSize: 10,
  //   renderByPixels: false
  // }


  // useEffect(() => {
  //   if (window.innerWidth>1000) {
  //     Scrollbar.init(document.getElementById('smoothScroll'), options)
  //   }
  // },[window.innerWidth])


  return (
    <div>
      <div 
      // style={{ height: 'calc(100vh - 100px)' }}
      >
      <Header />

        <div
         className='desktop-container scroller' 
        // style={{ minHeight: "calc(100vh - 616px)" }}
        >{children}</div>
      {/* <Footer /> */}

      </div>
    </div>
  )
}

export default BasicLayout