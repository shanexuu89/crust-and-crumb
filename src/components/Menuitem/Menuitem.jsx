import React, { useState } from 'react'
import './Menuitem.css'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Menuitem = () => {
  const [activeTab, setActiveTab] = useState(0)

  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })

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

  const tabData = [
    {
      title: 'Bread',
      content: (
        <div className="app__menuitem-container">
          <motion.div
            className="app__menuitem-container-img"
            ref={ref1}
            variants={variants}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
          >
            <img src={images.menuBread01} />
          </motion.div>
          <div className="app__menuitem-container-menu">
            <table>
              <tbody>
                <tr>
                  <td>Seeded Rye</td>
                  <td> 1/2 Loaf $7.5 | Whole $15</td>
                </tr>
                <tr>
                  <td>Cranberry Sourgough</td>
                  <td>1/2 Loaf $7.5 | Whole $15</td>
                </tr>
                <tr>
                  <td>Whole-Wheat</td>
                  <td>Cob $10 | Tin $14</td>
                </tr>
                <tr>
                  <td>Overnight Oats</td>
                  <td>Cob $10 | Tin $14</td>
                </tr>
                <tr>
                  <td>Cinnamon Bun</td>
                  <td>$2.5 Each</td>
                </tr>
              </tbody>
            </table>
            <motion.img
              src={images.menuBread02}
              alt="menu image"
              ref={ref2}
              variants={variants}
              initial="hidden"
              animate={inView2 ? 'visible' : 'hidden'}
            />
            <motion.p
              ref={ref3}
              variants={variants}
              initial="hidden"
              animate={inView3 ? 'visible' : 'hidden'}
            >
              We offer a variety of sourdough breads, including classic whole
              wheat sourdough, and Seeded Rye. Each sourdough is made with care
              and attention to detail, ensuring that it has the perfect balance
              of tangy flavor, chewy texture, and crispy crust.
            </motion.p>
          </div>
        </div>
      ),
    },
    {
      title: 'Sweets',
      content: (
        <div className="app__menuitem-container">
          <motion.div
            className="app__menuitem-container-img"
            ref={ref1}
            variants={variants}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
          >
            <img src={images.menuSweets01} />
          </motion.div>
          <div className="app__menuitem-container-menu">
            <table>
              <tbody>
                <tr>
                  <td>Rye, Sea Salt, Dark Choc Cookie</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>Seedy Spelt Cookie</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>Hazelnut, Chilli, Choc Chip Cookie (Vegan)</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>Plum, Lemon Verbena Tea Cake</td>
                  <td>$7</td>
                </tr>
              </tbody>
            </table>
            <motion.img
              src={images.menuSweets02}
              ref={ref2}
              variants={variants}
              initial="hidden"
              animate={inView2 ? 'visible' : 'hidden'}
            />
            <motion.p
              ref={ref3}
              variants={variants}
              initial="hidden"
              animate={inView3 ? 'visible' : 'hidden'}
            >
              We believe that dessert should be a little bit indulgent, but also
              made with the best ingredients and unique flavors. That's why we
              offer a variety of sweets that are sure to satisfy any craving,
              including some delicious and unique options you won't find
              anywhere else.
            </motion.p>
          </div>
        </div>
      ),
    },
    {
      title: 'Drinks',
      content: (
        <div className="app__menuitem-container">
          <motion.div
            className="app__menuitem-container-img"
            ref={ref1}
            variants={variants}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
          >
            <img src={images.menuDrinks01} />
          </motion.div>
          <div className="app__menuitem-container-menu">
            <table>
              <tbody>
                <tr>
                  <td>White</td>
                  <td>$5.5</td>
                </tr>
                <tr>
                  <td>Black</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>Filter</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>Phytofarm Herbal Tisane</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>Kuputī Good Gumboot</td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>Pressed Orange Juice</td>
                  <td>250ml $6 | 500ml $10 | 750ml $14</td>
                </tr>
                <tr>
                  <td>New Leaf Kombucha</td>
                  <td>$6.5</td>
                </tr>
              </tbody>
            </table>
            <motion.img
              src={images.menuDrinks02}
              alt="menu image"
              ref={ref2}
              variants={variants}
              initial="hidden"
              animate={inView2 ? 'visible' : 'hidden'}
            />
            <motion.p
              ref={ref3}
              variants={variants}
              initial="hidden"
              animate={inView3 ? 'visible' : 'hidden'}
            >
              A delicious drink is the perfect complement to any sweet treat.
              That's why we offer a variety of refreshing and flavorful options
              that are sure to quench your thirst.
            </motion.p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="app__menuitem">
      <div className="app__menuitem-buttons">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <motion.div className="app__menuitem-content">
        {tabData[activeTab].content}
      </motion.div>
    </div>
  )
}

export default Menuitem
