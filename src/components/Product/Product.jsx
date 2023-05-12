import React from 'react'
import './Product.css'

const Product = ({ imgUrl, title, text }) => {
  return (
    <div className="app__maquee-product">
      <img
        src={imgUrl}
        alt="product"
      />
      <div className="app__marquee-product_text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Product
