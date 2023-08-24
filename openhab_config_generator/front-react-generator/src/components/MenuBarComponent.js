import MenuItemComponent from './MenuItemComponent';
import '../css/MenuBar.css'

const MenuBarComponent = () => {
    return (
        <div className='menu-bar' >
            <MenuItemComponent text={'Add'} link={'/'} />
            <MenuItemComponent text={'Overview'} link={'/overview'} />
        </div>
    );
}

export default MenuBarComponent;