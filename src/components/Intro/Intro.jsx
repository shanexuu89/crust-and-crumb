import React from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import './Intro.css'
import { bread } from '../../constants'

const Intro = () => {
  const vidRef = React.useRef()
  const [playVideo, setPlayVideo] = React.useState(false)

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)
    vidRef.current.playbackRate = 0.7

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }
  return (
    <div className="app__video">
      <video
        src={bread}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill
              color="#fff"
              fontSize={30}
            />
          ) : (
            <BsFillPlayFill
              color="#fff"
              fontSize={30}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Intro
