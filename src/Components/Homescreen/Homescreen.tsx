import React from 'react'
import Header from '../Header/Header'
import Build from './Build/Build'
import Customers from './Customers/Customers'
import Hero from './Hero/Hero'
import Investment from './Investment/Investment'
import Meet from './Meet/Meet'
import Priority from './Priority/Priority'
import Featured from "./Featured/Featured"
import Footer from './Footer/Footer'

const Homescreen = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Priority />
        <Build />
        <Investment />
        <Meet />
        <Customers />
        <Featured />
        <Footer />
    </div>
  )
}

export default Homescreen