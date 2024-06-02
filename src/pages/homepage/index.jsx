import React from 'react'
import Banner from './features/banner'
import Skills from './features/skills'
import Tracks from './features/tracks'
import DesignTrack from './features/designtrack'
import Heroes from './features/heroes'
import Student from './features/student'
import Blog from './features/blog'


const HomePage = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <DesignTrack/>
            <Tracks />
            <Heroes/>
            <Student/>
            <Blog />
        </div>
    )
}

export default HomePage