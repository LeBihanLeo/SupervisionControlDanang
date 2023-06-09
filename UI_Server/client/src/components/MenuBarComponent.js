import MenuItemComponent from './MenuItemComponent';
import HomeIcon from '../ressources/icon/home.png';
import DashboardIcon from '../ressources/icon/dashboard.png';
import ViewInArIcon from '../ressources/icon/visualize.png';
import CloseIcon from '../ressources/icon/cross.png';

const MenuBarComponent = ({ indexCurrentView }) => {
    return (
        <div className='menu-bar' >
            <MenuItemComponent icon={HomeIcon} text={'Home'} isActivated={indexCurrentView === 0}  />
            <MenuItemComponent icon={DashboardIcon} text={'Dashboard'} isActivated={indexCurrentView === 1}  />
            <MenuItemComponent icon={ViewInArIcon} text={'Overview'} isActivated={indexCurrentView === 2}  />
            <MenuItemComponent icon={CloseIcon} text={'Disconnect'} isActivated={indexCurrentView === 3}  />
        </div>
    );
}

export default MenuBarComponent;