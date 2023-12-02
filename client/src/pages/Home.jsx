import React from 'react'
import NavBar from '../components/NavBar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Categories />
        <Products />
      <NewsLetter />
      <Footer />

    </div>
  )
}

export default Home