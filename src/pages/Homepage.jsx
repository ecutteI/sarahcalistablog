import React from 'react'
import { Navbar, Blogs, Footer, Gallery } from '../components'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Blogs /> 
      <Footer />
    </div>
  )
}

export default Homepage