import MenuItemComponent from './MenuItemComponent';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CloseIcon from '@mui/icons-material/Close';

const MenuBarComponent = ({ indexCurrentView }) => {
    return (
        <div className='menu-bar' >
            <MenuItemComponent icon={HomeIcon} text={'Home'} isActivated={indexCurrentView === 0} />
            <MenuItemComponent icon={DashboardIcon} text={'Dashboard'} isActivated={indexCurrentView === 1}  />
            <MenuItemComponent icon={ViewInArIcon} text={'Overview'} isActivated={indexCurrentView === 2}  />
            <MenuItemComponent icon={CloseIcon} text={'Disconnect'} isActivated={indexCurrentView === 3}  />
        </div>
    );
}

export default MenuBarComponent;