const MenuItemComponent = ({icon, text}) => {
    const DiplayedIcon = icon;

    return (
        <div className="menu-item-box" >
            <DiplayedIcon className="menu-item-icon" />
            <div className="menu-item-box-text">{text}</div>
        </div>
    );
}

export default MenuItemComponent;