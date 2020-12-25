import React from "react"
import Header from "./Header"
import Hero from './Hero'
import Stats from './Stats'
import Cli from './Cli'
import Cloud from './Cloud'

function Home(){
    return (
        <React.Fragment>
            <Header/>
            <Hero/>
            <Stats/>
            <Cli/>
            <Cloud/>
        </React.Fragment>   
    )
}

export default Home
