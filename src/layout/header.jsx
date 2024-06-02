import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="page_width">
            <header>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="search_box">
                <input type="text" placeholder='Want to learn?' className='search_box_input' />
                <button>Explore</button>
                        </div>
                <div className="nav_links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about_us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services">Courses</Link>
                        </li>
                        <li>
                            <Link to="/services">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/services">FAQ's</Link>
                        </li>
                        <li className="sign">
                            <Link to="/sign_up">Sign in</Link>
                        </li>
                        <li className="btn_sign">
                            <Link to="/sign_up">Create free account</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header