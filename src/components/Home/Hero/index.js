import React from "react"
import './showcase.css'
import ShowcaseText from './ShowcaseText/ShowcaseText'
import ShowcaseForm from './ShowcaseForm'

function Hero(){
    return(
        <section className="showcase">
            <div className="container grid">
                <ShowcaseText/>
                <ShowcaseForm/>
            </div>
        </section>
    )
}

export default Hero
