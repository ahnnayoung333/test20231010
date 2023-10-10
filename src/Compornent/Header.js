import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <header>
    <div className="inner">
        <h1>
            <Link to="/index" className="logo">
                shinee world
            </Link>
        </h1>
        <nav className="nav_web">
            <ul className="gnb">
                <li>
                    <Link to= "/solo">SOLO</Link>
                    <div className="sub_menu1">
                       
                    </div>
                </li>
                <li>
                    <Link to="/japan">JAPAN</Link>
                    <div className="sub_menu1">
                        
                    </div>
                </li>
                
                <li><Link to="/award">AWARD</Link></li>
                <li><Link to="/location">LOCATION</Link></li>
            </ul>
        </nav>
    </div>
</header>
  )
}

export default Header