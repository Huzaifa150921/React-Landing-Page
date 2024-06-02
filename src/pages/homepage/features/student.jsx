import React from 'react'
import Avatar from '../../../assets/Avatar.png'
import Footer_logo from '../../../assets/logo.png'
import { FaTwitter,FaLinkedinIn} from "react-icons/fa6";

const Student = () => {
  return (
    <div className='student_track' >
            <div className="page_width">
                <div className="student_div">
                    <div className="top_content">
                        <div className="logo">
                        <img  src={Footer_logo} alt="Logo" />
                        </div>
                        <h2>Courses was fantastic! It is Master platform for those <br/>looking to start a new career, or need a refresher.</h2> 

                    </div>
                    <div className="student_cards">
                        <div className="first_h">
                            <img src={Avatar} alt="" />
                            <h6>Jacob Jones</h6>
                            <p>Student, National University</p>
                            
                        </div>
                    
                    </div>
                    
                    
                </div>
            </div>
        </div>
  )
}

export default Student