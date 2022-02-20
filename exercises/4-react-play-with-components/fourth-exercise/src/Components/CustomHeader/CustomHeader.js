import './CustomHeader.css'

const CustomHeader = () => {
  return(
    <div className="ContainerHeader">
      <p className="logo">HereGoesLogo</p>
      <img alt="hamburger menu icon" className="menu" src={process.env.PUBLIC_URL + 'assets/hamburger-menu.svg'} />
    </div>
  )
}
export default CustomHeader;
