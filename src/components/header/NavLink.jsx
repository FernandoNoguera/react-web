import NavItem from "./NavItem";
import { ShoppingCartOutlined } from '@ant-design/icons';



function NavLink () {
    return (
        <ul>
            <NavItem
            href="localhost:3000/"
            text="INICIO"
            />
            <NavItem
            href="localhost:3000/"
            text="CATEGORIA 1"
            />
            <NavItem
            href="localhost:3000/"
            text="CATEGORIA 2"
            />
            <NavItem
            href="localhost:3000/"
            text="CATEGORIA 3"
            />
            
            <NavItem
        
            href="localhost:3000/"
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