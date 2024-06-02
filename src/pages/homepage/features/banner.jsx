import React from 'react'
import BannerImg from '../../../assets/banner_img.png'
import Frame from '../../../assets/Frame 13.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="page_width">
                <div className="banner_inner">
                    <div className="content">
                        <h3>
                            Up Your <span>Skills</span> <br />
                            To <span>advance</span> your <br/>
                            <span>Career</span> Path
                        </h3>
                        <p>
                        Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.
                        </p>
                        <div className="search_box">
                            <button type="button"  className='search_box_button'>Get Started</button>
                            <button>Get free trial</button>
                        </div>
                        <div className="frame">
                        <img src={Frame} alt="" />
                    </div>
                    </div>
                    <div className="img">
                        <img src={BannerImg}   alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner