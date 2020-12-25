import React from 'react'
import Navbar from './NavBar'
import './header.css'


function Header(){
    return(
        <header className="navbar">
            <div className= "container flex">
                <h1 className="logo">Loruki</h1>
                <Navbar/>
            </div>
        </header>
    )

}

export default Header