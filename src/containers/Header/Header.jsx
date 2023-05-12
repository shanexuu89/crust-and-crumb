import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState('relative')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 205) {
        setPosition('fixed')
      } else {
        setPosition('relative')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const newScale = 1 - window.scrollY / 200
      setScale(newScale < 0.1 ? 0.1 : newScale) // Limit minimum scale to 0.5
      console.log(newScale, window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="app__header-text">
      <h1
        style={{
          transform: `scale(${scale}) `,
          position,
          display: position === 'fixed' ? 'none' : undefined,
        }}
      >
        Crust & Crumb
      </h1>
    </div>
  )
}

export default Header
