import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuDownload } from "react-icons/lu";
import CardImg from '../../../assets/ui design.png'
import Avatar from '../../../assets/Avatar.png'
import Learn from '../../../assets/learn shoaib.png'
import Bulding from '../../../assets/bulding interface.png'


const Tracks = () => {
    return (
        <div className='outer_track' >
            <div className="page_width">
                <div className="track_div1">
                    <div className="top_content">
                    <p>Explore Programs</p>
                        <h2>Our Most Popular Class</h2>
                        <div className='detail'>
                            <p sty>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
                        </div>
                    </div>
                    <div className="track_cards">
                        <div className="">
                            <div className="cards">
                            
                                <div className="img">
                                    <img src={CardImg} alt="" />
                                </div>
                                <div className="rating">
                                    <small>Design</small>
                                    <h2>Figma UI UX Design..</h2>
                                    <p>Use Figma to get a job in UI Design, User Interface, User Experience design.</p>
                                    <div className="stars">
                                        <p>4.3</p>
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaRegStar className='full_icon' />
                                        <span>(16,325)</span>
                                    </div>
                                </div>
                                <div className="main_heading">
                                    <div className="avatar">
                                    <img src={Avatar} alt="" />
                                    </div>
                                    <div className="Avatar_title">
                                    <span>Jane Cooper</span>
                                    <p>2001 Enrolled</p>
                                    </div>
                                    <h3>$98</h3>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <div className="cards">
                            
                                <div className="img">
                                    <img src={Learn} alt="" />
                                </div>
                                <div className="rating">
                                    <small>Design</small>
                                    <h2>Figma UI UX Design..</h2>
                                    <p>Use Figma to get a job in UI Design, User Interface, User Experience design.</p>
                                    <div className="stars">
                                        <p>4.3</p>
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaRegStar className='full_icon' />
                                        <span>(16,325)</span>
                                    </div>
                                </div>
                                <div className="main_heading">
                                    <div className="avatar">
                                    <img src={Avatar} alt="" />
                                    </div>
                                    <div className="Avatar_title">
                                    <span>Jane Cooper</span>
                                    <p>2001 Enrolled</p>
                                    </div>
                                    <h3>$98</h3>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <div className="cards">
                            
                                <div className="img">
                                    <img src={Bulding} alt="" />
                                </div>
                                <div className="rating">
                                    <small>Design</small>
                                    <h2>Figma UI UX Design..</h2>
                                    <p>Use Figma to get a job in UI Design, User Interface, User Experience design.</p>
                                    <div className="stars">
                                        <p>4.3</p>
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaRegStar className='full_icon' />
                                        <span>(16,325)</span>
                                    </div>
                                </div>
                                <div className="main_heading">
                                    <div className="avatar">
                                    <img src={Avatar} alt="" />
                                    </div>
                                    <div className="Avatar_title">
                                    <span>Jane Cooper</span>
                                    <p>2001 Enrolled</p>
                                    </div>
                                    <h3>$98</h3>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracks