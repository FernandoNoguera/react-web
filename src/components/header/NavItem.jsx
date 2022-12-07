import { Link } from 'react-router-dom'

function NavItem({...props}){
    return (
        <li className="border-right">
            <Link to={props.to}>
                <spam>
                    {props.icon} {props.text} {props.children}
                </spam>
            </Link>
        </li>
    );
}

export default NavItem