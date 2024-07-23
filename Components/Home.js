import React from 'react'
import "./Style/Home.css"
import SearchComponent from './SearchComponent';
import Data from './Data';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='Home'>
      <SearchComponent data={Data} />
      <Footer/>
    </div>
  )
}

export default Home
