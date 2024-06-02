import React from 'react'
import Avatar from '../../../assets/Avatar.png'
import { FaTwitter,FaLinkedinIn} from "react-icons/fa6";

const Heroes = () => {
  return (
    <div className='heroes_track' >
            <div className="page_width">
                <div className="heroes_div">
                    <div className="top_content">
                    <h6>Tutors</h6>
                        <h2>Meet the Heroes</h2> <br/>
                        <p>On Weekend UX, instructors from all over the world instruct millions of students.<br></br> We offer the knowledge and abilities.</p>
                    </div>
                    <div className="heroes_cards">
                        <div className="first_h">
                            <img src={Avatar} alt="" />
                            <h6>Theresa Webb</h6>
                            <span>Application Support Analyst Lead</span>
                            <p>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                            <div className="social">
                            <FaTwitter className="icon" />
                            <FaLinkedinIn  className="icon"/>
                            </div>
                        </div>
                        <div className="first_h">
                            <img src={Avatar} alt="" />
                            <h6>Theresa Webb</h6>
                            <span>Application Support Analyst Lead</span>
                            <p>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                            <div className="social">
                            <FaTwitter className="icon" />
                            <FaLinkedinIn  className="icon"/>
                            </div>
                        </div>
                        <div className="first_h">
                            <img src={Avatar} alt="" />
                            <h6>Theresa Webb</h6>
                            <span>Application Support Analyst Lead</span>
                            <p>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                            <div className="social">
                            <FaTwitter className="icon" />
                            <FaLinkedinIn  className="icon"/>
                            </div>
                        </div>
                        <div className="first_h">
                            <img src={Avatar} alt="" />
                            <h6>Theresa Webb</h6>
                            <span>Application Support Analyst Lead</span>
                            <p>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                            <div className="social">
                            <FaTwitter className="icon" />
                            <FaLinkedinIn  className="icon"/>
                            </div>
                        </div>
                    
                    </div>
                    
                    
                </div>
            </div>
        </div>
  )
}

export default Heroes