import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Services from '../../Components/Services/Services'
import Parts from '../../Components/Parts/Parts'
import Brands from '../../Components/Brands/Brands'
import Reviews from '../../Components/Reviews/Reviews'
import Works from '../../Components/Works/Works'

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Parts />
            <Brands />
            <Works />
            <Reviews />
        </div>
    )
}

export default Home
