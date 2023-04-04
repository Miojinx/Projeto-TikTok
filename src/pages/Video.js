import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import "./Video.css"
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video({ likes, messages, shares, name, description, music, url}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)
    function handdleStart() {
        if (play == false) {
            videoRef.current.play()
            setPlay(true)
        }
        if (play == true) {
            videoRef.current.pause()
            setPlay(false)
        }

    }

    return (
        <div className='video'>
            <video
                className='video-player'
                ref={videoRef}
                onClick={handdleStart}
                loop
                source src={url}
            >
            </video>
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares} />
            <VideoFooter 
            name={name}
            description={description}
            music={music}
            />
        </div>
    )
}

export default Video