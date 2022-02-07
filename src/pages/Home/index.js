import React, { useState } from 'react'
import NavBar from '../../components/Navbar'
import HeroArea from '../../components/HeroArea'
import TrendingArea from '../../components/PopularSection'
import AllCategories from '../../components/Categories'
import CallToAction from '../../components/CallToAction'
import Footer from '../../components/Footer'

const Home = () => {

        const [filteredValue, setFilteredValue]= useState(null);

        return (
                <>
                <NavBar/>
                <HeroArea setFilteredValue={setFilteredValue}/>
                <TrendingArea filteredValue={filteredValue} />
                <AllCategories/>
                <CallToAction/>
                <Footer/>
        
                
                </>
        )
}

export default Home
