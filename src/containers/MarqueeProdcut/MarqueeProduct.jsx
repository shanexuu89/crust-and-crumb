import React from 'react'
import Marquee from 'react-fast-marquee'
import './MarqueeProduct.css'
import images from '../../constants/images'
import { Product } from '../../components'

const MarqueeProduct = () => {
  return (
    <div className="app__marquee">
      <Marquee>
        <Product
          imgUrl={images.bread01}
          title="Ciabatta Loaf"
          text="French Flour, Egg, Isigny Butter"
        />
        <Product
          imgUrl={images.bread02}
          title="Cinnamon Bun"
          text="French Flour, Egg, Isigny Butter, Cinnamon"
        />
        <Product
          imgUrl={images.bread03}
          title="Chocolate bun"
          text="French Flour, Egg, Isigny Butter"
        />
        <Product
          imgUrl={images.bread04}
          title="Cranberry Loaf"
          text="French Flour,Cranberry"
        />
        <Product
          imgUrl={images.bread05}
          title="Wholewheat Sourdough"
          text="Wholewheat Flour"
        />
        <Product
          imgUrl={images.bread06}
          title="Seeded Rye"
          text="French Flour, Egg, Isigny Butter"
        />
      </Marquee>
    </div>
  )
}

export default MarqueeProduct
