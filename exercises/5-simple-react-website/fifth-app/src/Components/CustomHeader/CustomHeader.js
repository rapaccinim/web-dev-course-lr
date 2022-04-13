import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import Menu from '../../Components/Menu/Menu.js'
import './CustomHeader.css'

const CustomHeader = () => {
  const [fullMenuVisible, setFullMenuVisible] = useState(false);
  const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? 'translateX(0)' : 'translateX(100%)',
    opacity: fullMenuVisible ? 1 : 0
  });

  const shrinkElements = () => {
    document.getElementById('ContainerHeader').style.height = 80+'px';
    document.getElementById('logo').classList.add('shrinkLogo');
  }
  const normalizeElements = () => {
    document.getElementById('ContainerHeader').style.height = 120+'px';
    document.getElementById('logo').classList.remove('shrinkLogo');
  }
  
  window.addEventListener('scroll', (event) => {
     document.documentElement.scrollTop > 120
     ?
     shrinkElements()
     :
     normalizeElements()
 });




  return(
    <div id="ContainerHeader" className='ContainerHeader'>
      <img id='logo' className='logo' src={process.env.PUBLIC_URL + 'assets/logo.svg'}
           alt='leonardo russo logo'/>
      <img className={fullMenuVisible ? 'menu-closer' : 'menu-opener'}
           src={fullMenuVisible ?
                process.env.PUBLIC_URL + 'assets/menu-closer.svg' :
                process.env.PUBLIC_URL + 'assets/hamburger-menu.svg'}
           alt='hamburger menu icon'
           onClick={() => setFullMenuVisible(!fullMenuVisible)} />
      <Menu style={fullMenuAnimation}/>
    </div>
  )
}
export default CustomHeader;
