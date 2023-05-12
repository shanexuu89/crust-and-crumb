import React from 'react'

import {
  AboutUs,
  FindUs,
  Gallery,
  Header,
  OurMenu,
  MarqueeProduct,
} from './containers'
import { Navbar, Footer } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MarqueeProduct />
      <AboutUs />
      <OurMenu />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
