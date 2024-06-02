import React from 'react'
import Footer_logo from '../assets/logo.png'
import { FaTwitter,FaLinkedinIn,FaFacebook,FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer>
            <div className="page_width">
                <div className="inner_footer">
                    <div className="colum_1">
                    <img  src={Footer_logo} alt="Logo" />
                    <p>Top learning experiences that create more talent in the world.</p>
                    </div>
                    <div className="colum_2">
                    <h4>Product</h4>
                    <ul>
                        <li>
                        <a href> How to Work </a>
                        </li>
                        <li>
                        <a href>Papular Courses</a>
                        </li>
                        <li>
                        <a href> Service</a>
                        </li>
                    </ul>
                    </div>
                    <div className="colum_2">
                    <h4>Courses</h4>
                    <ul>
                        <li>
                        <a href> Categories</a>
                        </li>
                        <li>
                        <a href>Online Course</a>
                        </li>
                        <li>
                        <a href> Video Course</a>
                        </li>
                    </ul>
                    </div>
                    <div className="colum_2">
                    <h4>Product</h4>
                    <ul>
                        <li>
                        <a href> FAQ </a>
                        </li>
                        <li>
                        <a href>Help Center</a>
                        </li>
                        <li>
                        <a href>Career</a>
                        </li>
                        <li>
                        <a href>Privacy</a>
                        </li>
                    </ul>
                    </div>
                    <div className="colum_2">
                    <h4>Contact info</h4>
                    <ul>
                        <li>
                        <a href> FAQ </a>
                        </li>
                        <li>
                        <a href>Help Center</a>
                        </li>
                        <li>
                        <a href>Career</a>
                        </li>
                        <li>
                        <a href>Privacy</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="copyright">
                        <p>© 2022 Ed-Circle. All rights reserved.</p>
                        <div className="social_link">
                        <FaTwitter className="icon" />
                        <FaLinkedinIn  className="icon"/>
                        <FaFacebook className="icon"/>
                        <FaGithub  className="icon"/>

                        </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer