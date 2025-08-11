import React from 'react'
import Location from './Locationfilter'
import Experience from './Experiencelevelfilter'
import Jobdicription from './jobdiscription'
const leftjobSection = () => {
  return (
    <div className="w-full h-full p-8 md:p-8 lg:pt-28 font-medium rounded-l-lg outline-0 bg-white">
      <h1 className='px-2'>Filter</h1>
      <div className='flex p-2 gap-4'>
      <Location/>
      <Experience/>
      </div>
      <Jobdicription/>
    </div>
  )
}

export default leftjobSection
