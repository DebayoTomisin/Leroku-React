import React from 'react'
import './showcaseText.css'

function ShowcaseText(props){
    return(
        <div className="showcase-text">
            <h1>Easier Deployment</h1>
            <p>Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals.
                    Fill out the form to try a demo of our platform</p>
                <button 
                href="features.html" 
                className="btn btn-outline">Read More</button>
        </div>
    )
}

export default ShowcaseText