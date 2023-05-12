import React from 'react'
import './OurMenu.css'
import { Menuitem } from '../../components'

const OurMenu = () => {
  return (
    <div
      className="app__ourMenu"
      id="menu"
    >
      <div className="app__ourMenu-container section__padding">
        <h4>#2. Our menu</h4>
        <div className="app__ourMenu-menu">
          <Menuitem />
        </div>
      </div>
    </div>
  )
}

export default OurMenu
