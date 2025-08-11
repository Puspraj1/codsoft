import React from 'react'
import Leftjobsection from './LeftSection/leftjobSection'
import Rightjobsection from './RightSection/rightjobbSection'
import Header from '../header/Header'
import Footer from '../Home/Footer/footer'

const jobs = () => {
  return (
    <>
      <Header/>
    <div className='flex '>
      <Leftjobsection/>
      <Rightjobsection/>
    </div>
    <Footer/>
    </>
  )
}

export default jobs
