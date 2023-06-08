const MenuItemComponent = ({icon, text}) => {
    const DiplayedIcon = icon;

    return (
        <div>
            <DiplayedIcon />
            <h3>{text}</h3>
        </div>
    );
}

export default MenuItemComponent;