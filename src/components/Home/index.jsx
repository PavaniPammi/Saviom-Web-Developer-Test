import React from 'react'
import {Link} from "react-router-dom"
import About from "../About"
import "./index.css"



function Home() {
  return (
    <Link to = "/">
    <header className="header">
      <div className="header_logoContainer">
        <img src="./images/Logo.svg" width="150" height="75" alt="PMEntire's logo" />
      </div>
      <div className="header_navContainer">
        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_list__items whiteText">
                <Link to = "./about">
                About Us
                </Link>
              
            </li>
            <li className="nav_list__items whiteText">
            <Link to = "./contact">
                Contac Us
                </Link>
               
            </li>
          </ul>
        </nav>
      </div>
    </header>
     <About/>
     <footer>
      <div className="footer_copyrightContainer">
        <div className="coprrightContainer">
          <p className="text">&copy; 2022. PMEntire Pvt. Ltd. All rights are reserved.</p>
        </div>
      </div>
    </footer>
    </Link>
  )
}

export default Home
