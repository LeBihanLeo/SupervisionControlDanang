const MenuItemComponent = ({icon, text}) => {

    return (
        <div className="menu-item-box" >
            <div className="menu-item-box-data">
                <div className="image-container">
                    <img src={icon}/>
                </div>
                <div className="menu-item-box-text">{text}</div>
            </div>
            <div className="circle" />
        </div>
    );
}

export default MenuItemComponent;