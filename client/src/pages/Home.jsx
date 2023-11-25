import React from 'react'
import NavBar from '../components/NavBar'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Categories />
        <Products />
    </div>
  )
}

export default Home