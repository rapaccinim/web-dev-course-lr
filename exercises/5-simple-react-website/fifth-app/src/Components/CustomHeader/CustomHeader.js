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

  const [header, setHeader] = useState(false);
  const changeHeader = () => {
    if(document.documentElement.scrollTop > 120){
      setHeader(true)
      document.getElementById('ContainerHeader').style.height = 80+'px';
    }else {
      setHeader(false)
      document.getElementById('ContainerHeader').style.height = 120+'px';
    }
  }
  window.addEventListener('scroll', changeHeader);

  return(
    <div id="ContainerHeader"className='ContainerHeader'>
      <p className='logo'>HereGoesLogo</p>
      <img className={fullMenuVisible ? 'menu-closer' : 'menu-opener'}
           src={fullMenuVisible ?
                process.env.PUBLIC_URL + 'assets/menu-closer.svg' :
                process.env.PUBLIC_URL + 'assets/hamburger-menu.svg'
              }
           alt='hamburger menu icon' onClick={() => setFullMenuVisible(!fullMenuVisible)} />
      <Menu style={fullMenuAnimation}/>
    </div>
  )
}
export default CustomHeader;
