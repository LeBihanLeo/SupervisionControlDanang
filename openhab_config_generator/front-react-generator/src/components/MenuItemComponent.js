import {Link} from "react-router-dom";
import { useLocation } from 'react-router';
import '../css/MenuBar.css'

const MenuItemComponent = ({text, link}) => {
    const location = useLocation();

    return (
        <Link to={link} className={'menu-link'} >
            <div className={"menu-item-box" + (location.pathname === link ? " menu-item-box-activated" : "")} >
                <div className="menu-item-box-data">
                    <div className="menu-item-box-text">{text}</div>
                </div>
                <div className={"circle" + (location.pathname === link ? " circle-activated" : "")} />
            </div>
        </Link>
    );
}

export default MenuItemComponent;