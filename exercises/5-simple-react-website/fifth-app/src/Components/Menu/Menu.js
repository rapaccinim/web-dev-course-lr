import { animated } from 'react-spring';
import React from 'react';
import './Menu.css';

const Menu = ({style}) => {
  return(
    <animated.div className='menu-container' style={style}>
     <nav className='menu-list'>
        <p className='menu-list-item'>
          Home
        </p>
        <p className='menu-list-item'>
          About
        </p>
        <p className='menu-list-item'>
          Contact
        </p>
     </nav>
    </animated.div>
  )
}
export default Menu;
