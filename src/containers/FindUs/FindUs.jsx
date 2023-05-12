import React from 'react'
import './FindUs.css'
import { images } from '../../constants'
import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FindUs = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }
  return (
    <div
      className="app__findus"
      id="find"
    >
      <h4 className="section__padding">#4. Find Us</h4>
      <div className="app__findus-container">
        <motion.div
          className="app__findus-image"
          ref={ref1}
          variants={variants}
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
        >
          <img
            src={images.newsLetter}
            alt="find-image"
          />
        </motion.div>
        <div className="app__findus-content">
          <div className="app__findus-address">
            <h4>Store Location & Hours:</h4>
            <br />
            <p>180 Martin St, Auckland 1011</p>
            <p>Monday to Saturday 8:30am - 3:00pm</p>
            <p>Sunday 9:30am - 2pm</p>
          </div>
          <div className="app__findus-newsletter">
            <p>Subscribe to our Newsletter</p>
            <div className="app__newsletter-button">
              <input
                type="email"
                placeholder="Enter your email address"
              ></input>
              <button
                type="button"
                className="custom__button"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindUs
