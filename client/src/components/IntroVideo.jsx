import React from 'react';
import WelcomeVideo from "../media/welcome.mp4"
import "../styles/App.css"

const IntroVideo = () => {
    return (
        <video loading="lazy" className="IntroVideo" autoPlay muted loop preload="none">
            <source src={WelcomeVideo} type="video/mp4" />
        </video>
    )
}

export default IntroVideo;