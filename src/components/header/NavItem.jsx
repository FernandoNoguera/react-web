function NavItem({...props}){
    return (
        <li className="border-right">
            <a href={props.href}>
            {props.icon} {props.text} {props.children}
            </a>
        </li>
    );
}

export default NavItem