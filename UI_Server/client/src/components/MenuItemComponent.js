const MenuItemComponent = ({icon, text, isActivated}) => {

    if (isActivated) {
        return (
            <div className="menu-item-box-activated" >
                <div className="menu-item-box-data">
                    <div className="image-container">
                        <img src={icon}/>
                    </div>
                    <div className="menu-item-box-text">{text}</div>
                </div>
                <div className="circle-activated" />
            </div>
        );
    } else {
        return (
            <div className="menu-item-box" >
                <div className="menu-item-box-data">
                    <DiplayedIcon className="menu-item-icon" />
                    <div className="menu-item-box-text">{text}</div>
                </div>
                <div className="circle" />
            </div>
        );
    }
}

export default MenuItemComponent;