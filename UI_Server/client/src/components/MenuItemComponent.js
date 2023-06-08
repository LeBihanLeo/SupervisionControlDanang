const MenuItemComponent = ({icon, text}) => {
    const DiplayedIcon = icon;

    return (
        <div className="menu-item-box" >
            <div className="menu-item-box-data">
                <DiplayedIcon className="menu-item-icon" color="#0047FF" />
                <div className="menu-item-box-text">{text}</div>
            </div>
            <div className="circle" />
        </div>
    );
}

export default MenuItemComponent;