import React from 'react'
import Headers from '../header/Header'
import Herosection1 from './HeroSection1/Herosection1'
import Herosection2 from './HeroSection2/Herosection2'
import Herosection3 from './HeroSection3/Herosection3'
import Herosection4 from './HeroSection4/Herosection4'
import Footer from './Footer/footer'
const Home = () => {
  return (
    <div>
      <Headers/>
      <Herosection1/>
      <Herosection2/>
      <Herosection3/>
      <Herosection4/>
      <Footer/>
    </div>
  )
}
export default Home