import Menu from "../menu/menu";
import styled from "styled-components"

const HeaderContainer = styled.div`
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Logo = styled.div`
    font-weight: bold;
    background-color: ${props => props.mainColor === "primary" ? `green` : `red`};
`

const Header = () => {

    const menuItems = [
        {
            menuItemText: "Home",
            menuItemPath: "/"
        },
        {
            menuItemText: "Contact",
            menuItemPath: "/contact"
        }
    ]

    return(
        <HeaderContainer>
            <Logo mainColor="primary">LOGO</Logo>
            <Menu menuItems={menuItems}/>
            <Logo mainColor="secondary">LOGO</Logo>
        </HeaderContainer>
    )
}
export default Header;