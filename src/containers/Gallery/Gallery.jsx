import React, { useState, useEffect, useRef } from 'react'
import './Gallery.css'
import { images } from '../../constants'
import { InstagramLogo, CaretLeft, CaretRight } from '@phosphor-icons/react'

const Gallery = () => {
  const scrollRef = useRef(null)
  const [imageWidth, setImageWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const { offsetWidth } = scrollRef.current
      setImageWidth(offsetWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= imageWidth
    } else {
      current.scrollLeft += imageWidth
    }
  }

  return (
    <div
      className="app__gallery"
      id="gallery"
    >
      <h4 className="section__padding">#3. Gallery</h4>
      <div className="app__gallery-arrows">
        <CaretLeft
          weight="thin"
          className="app__arrows-icon"
          onClick={() => scroll('left')}
        />
        <CaretRight
          weight="thin"
          className="app__arrows-icon"
          onClick={() => scroll('right')}
        />
      </div>
      <div className="app__gallery-images">
        <div
          className="app__gallery-images_container"
          ref={scrollRef}
        >
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img
                src={image}
                alt="gallery_image"
              />
              <InstagramLogo
                className="gallery__image-icon"
                weight="thin"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
