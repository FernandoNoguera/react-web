import NavLink from "./header/NavLink"


function NavBar () {
    return (
        <nav id="navMain" className="text-center">
            <input type="checkbox" id="menuBurger" />
            <label htmlFor="menuBurger"></label>
            <NavLink />
        </nav>
    );

    
}
export default NavBar