import { Link } from 'react-router-dom'

function NavItem({...props}){
    return (
        <li className="border-right">
            <Link to={props.to}>
                <span>
                    {props.icon} {props.text} {props.children}
                </span>
            </Link>
        </li>
    );
}

export default NavItem