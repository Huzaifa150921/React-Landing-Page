import React from 'react'
import Icon from '../../../assets/iconc.png'
import Code from '../../../assets/code.png'
import Graph from '../../../assets/garph.png'


const DesignTrack = () => {
    return (
        <div className='outer_track' >
            <div className="page_width">
                <div className="track_div">
                    <div className="top_content">
                    <p>Our Services</p>
                        <h2>Fostering a playful & engaging learning<br/> environment</h2>
                    </div>
                    <div className="track_cards">
                        <div className="">
                            <div className="card">
                                <div className="rating">
                                    <div className="img">
                                    <img src={Icon} alt="" />
                                </div>
                                <div className='title'>
                                    <h6>Interaction Design</h6>
                                </div>
                                </div>
                                <div className="main_heading">
                                    <p>Lessons on design that cover the most recent developments.</p>
                                </div>
                                <div className="p_button">
                                <p>Learn More: <i class="arrow right"></i></p>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="">
                            <div className="card2">
                                <div className="rating">
                                    <div className="img">
                                    <img src={Code} alt="" />
                                </div>
                                <div className='title'>
                                    <h6>UX Design Course</h6>
                                </div>
                                </div>
                                <div className="main_heading">
                                    <p>Classes in development that cover the most recent advancements in web.</p>
                                </div>
                                <div className="p_button">
                                <p>Learn More: <i class="arrow right"></i></p>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="">
                            <div className="card2">
                                <div className="rating">
                                    <div className="img">
                                    <img src={Graph} alt="" />
                                </div>
                                <div className='title'>
                                    <h6>Interaction Design</h6>
                                </div>
                                </div>
                                <div className="main_heading">
                                    <p>Lessons on design that cover the most recent developments.</p>
                                </div>
                                <div className="p_button">
                                <p>Learn More: <i class="arrow right"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default DesignTrack