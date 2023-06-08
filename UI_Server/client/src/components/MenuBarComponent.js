import MenuItemComponent from './MenuItemComponent';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CloseIcon from '@mui/icons-material/Close';

const MenuBarComponent = () => {
    return (
        <div className='menu-bar' >
            <MenuItemComponent icon={HomeIcon} text={'Home'} />
            <MenuItemComponent icon={DashboardIcon} text={'Dashboard'} />
            <MenuItemComponent icon={ViewInArIcon} text={'Overview'} />
            <MenuItemComponent icon={CloseIcon} text={'Disconnect'} />
        </div>
    );
}

export default MenuBarComponent;