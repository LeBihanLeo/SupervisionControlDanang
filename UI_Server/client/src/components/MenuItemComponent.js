const MenuItemComponent = ({icon, text}) => {
    const DiplayedIcon = icon;

    return (
        <div className="menu-item-box" >
            <DiplayedIcon />
            <h3>{text}</h3>
        </div>
    );
}

export default MenuItemComponent;