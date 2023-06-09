import MenuItemComponent from './MenuItemComponent';
import HomeIcon from '../ressources/icon/home.png';
import DashboardIcon from '../ressources/icon/dashboard.png';
import ViewInArIcon from '../ressources/icon/visualize.png';
import CloseIcon from '../ressources/icon/cross.png';

const MenuBarComponent = ({ indexCurrentView }) => {
    return (
        <div className='menu-bar' >
            <MenuItemComponent icon={HomeIcon} text={'Home'} isActivated={indexCurrentView === 0} link={'/'} />
            <MenuItemComponent icon={DashboardIcon} text={'Dashboard'} isActivated={indexCurrentView === 1} link={'/dashboard'} />
            <MenuItemComponent icon={ViewInArIcon} text={'Overview'} isActivated={indexCurrentView === 2} link={'/overview'} />
            <MenuItemComponent icon={CloseIcon} text={'Disconnect'} isActivated={indexCurrentView === 3} link={'/disconnect'} />
        </div>
    );
}

export default MenuBarComponent;