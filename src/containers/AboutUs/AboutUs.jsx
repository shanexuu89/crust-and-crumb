import React from 'react'
import './AboutUs.css'
import { Intro } from '../../components'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutUs = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true })

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
      className="app__about"
      id="about"
    >
      <div className="app__about-text section__padding">
        <h4>#1. About Us</h4>
        <motion.div
          ref={ref1}
          variants={variants}
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
        >
          <h1>
            At Crust & Crumb, we believe that baking is an <em>art</em> form
            that requires a combination of <em>skill</em>, <em>passion</em>, and{' '}
            <em>creativity</em>. We take great pride in every loaf of bread,
            every croissant, and every cake that comes out of our kitchen.
          </h1>
        </motion.div>
      </div>
      <Intro />

      <div className="app__about-story grid">
        <div className="app__about-story_text">
          <motion.div
            className="app__about-story_title"
            ref={ref2}
            variants={variants}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
          >
            <div className="app__about-story_title-left ">
              Our story began with a passion for <br />
              traditional baking techniques and
            </div>
            <div className="app__about-story_title-right">
              a love of high-quality ingredients.
            </div>
          </motion.div>
          <motion.div
            className="app_about-story_content"
            ref={ref3}
            variants={variants}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
          >
            <p>
              Our founder, John, had always been fascinated by the art and
              science of bread-making, and spent years perfecting his craft
              before deciding to open his own bakery.
            </p>
            <br />
            <p>
              In 2010, John opened the doors to The Crust & Crumb in a small
              storefront in the heart of downtown. From the beginning, he was
              committed to using only the best ingredients and traditional
              methods to create breads and pastries that were not only
              delicious, but also nutritious and easy to digest.
            </p>
            <br />
            <p>
              Over the years, The Crust & Crumb has grown from a small bakery to
              a beloved local institution, known for our fresh-baked breads,
              flaky pastries, and delicious coffee. Despite our growth, we
              remain committed to our original values of quality, craftsmanship,
              and community.
            </p>
            <br />
            <p>
              Today, The Crust & Crumb is run by a dedicated team of bakers and
              pastry chefs, all of whom share John’s passion for traditional
              baking techniques and high-quality ingredients. From our classic
              sourdough bread to our indulgent chocolate croissants, everything
              we make is crafted with care and attention to detail.
            </p>
          </motion.div>
        </div>
        <motion.img
          ref={ref4}
          variants={variants}
          initial="hidden"
          animate={inView4 ? 'visible' : 'hidden'}
          src={images.story01}
          alt="story image"
          id="app__about-story_01"
        />
      </div>
    </div>
  )
}

export default AboutUs
