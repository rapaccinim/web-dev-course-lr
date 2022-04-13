import { animated } from 'react-spring';
import React from 'react';
import './Menu.css';

const Menu = ({style}) => {
  const listItems = ['Home', 'About', 'Contact'];
  return(
    <animated.div className='menu-container' style={style}>
     <nav className='menu-list'>
      {listItems.map((item, i) => <p className='menu-list-item' key={i}>{item}</p>)}
     </nav>
    </animated.div>
  )
}
export default Menu;
