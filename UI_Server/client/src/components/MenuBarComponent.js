import  MenuItemComponent from './MenuItemComponent';
import HomeIcon from '../ressources/icon/home.png';
import DashboardIcon from '../ressources/icon/dashboard.png';
import ViewInArIcon from '../ressources/icon/visualize.png';
import CloseIcon from '../ressources/icon/cross.png';

const MenuBarComponent = () => {
    return (
        <div className='menu-bar' >
            <MenuItemComponent icon={HomeIcon} labelStyle={{ fontSize: '200%' }} text={'Home'} />
            <MenuItemComponent icon={DashboardIcon} text={'Dashboard'} />
            <MenuItemComponent icon={ViewInArIcon} text={'Overview'} />
            <MenuItemComponent icon={CloseIcon} text={'Disconnect'} />
        </div>
    );
}

export default MenuBarComponent;