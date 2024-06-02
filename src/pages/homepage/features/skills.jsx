import React from 'react'
import Vector from '../../../assets/Vector.png'
import Codecov from '../../../assets/Codecov (logo — Black).png'
import userTesting from '../../../assets/UserTesting (logo — Black).png'
import Magic from '../../../assets/Magic Leap (logo — Black).png'


const Skills = () => {
    return (
        <div>

            <div className="page_width">
                <div className="skills_container">
                    <div className="item_grid">
                        <div className="">
                        </div>
                        <div className="content">
                            <h6>250+</h6>
                            <p>Collaboration</p>
                        </div>
                    </div>
                    <div className="item_grid">
                        <div className="img">
                            <img src={Vector} alt="" />
                        </div>
                        
                    </div>
                    <div className="item_grid">
                        <div className="img">
                            <img src={Codecov} alt="" />
                        </div>
                    </div>
                    <div className="item_grid">
                        <div className="img">
                            <img src={userTesting} alt="" />
                        </div>
                    </div>
                    <div className="item_grid">
                        <div className="img">
                            <img src={Magic} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills