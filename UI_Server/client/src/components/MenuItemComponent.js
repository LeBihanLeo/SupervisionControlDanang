import {Link} from "react-router-dom";


const MenuItemComponent = ({icon, text, isActivated, link}) => {

    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div className={"menu-item-box" + (isActivated ? " menu-item-box-activated" : "")} >
                <div className="menu-item-box-data">
                    <div className="image-container image-container-selected">
                        <img src={icon}/>
                    </div>
                    <div className="menu-item-box-text">{text}</div>
                </div>
                <div className={"circle" + (isActivated ? " circle-activated" : "")} />
            </div>
        </Link>
    );
}

export default MenuItemComponent;