import {Link} from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const MenuItem = styled.div`
    margin: 20px;
`

const Menu = (props) => {

    return(
        <MenuContainer>
            {props.menuItems.map((menuItem) => (
                <MenuItem>
                    <Link to={menuItem.menuItemPath}>{menuItem.menuItemText}</Link>
                </MenuItem>
            ))}
        </MenuContainer>
    )

}

export default Menu