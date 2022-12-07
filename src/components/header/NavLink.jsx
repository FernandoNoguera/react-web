import NavItem from "./NavItem";
import { ShoppingCartOutlined } from '@ant-design/icons';



function NavLink () {
    return (
        <ul>
            <NavItem
            to="/"
            text="INICIO"
            />
            <NavItem
            to="/materiales"
            text="MATERIALES"
            />
            <NavItem
            to="/herramientas"
            text="HERRAMIENTAS"
            />
            <NavItem
            to="/"
            icon = {
                <ShoppingCartOutlined 
                    style={{ fontSize: '25px', paddingRight:10 }}    
                />
            }
            text="CARRITO"
            >
                <span id="count_cant" className="number_shop">0</span>
            </NavItem>
        </ul>
    );
}

export default NavLink