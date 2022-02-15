import menu from './assets/hamburger-menu.svg';

const CustomHeader = () => {
  return(
    <div className="ContainerHeader">
      <p className="logo">HereGoesLogo</p>
      <img className="menu" src={menu} />
    </div>
  )
}
export default CustomHeader;
