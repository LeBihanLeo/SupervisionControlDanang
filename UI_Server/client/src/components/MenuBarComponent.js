import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuItemComponent from './MenuItemComponent';

const MenuBarComponent = () => {
    return (
        <div>
            <MenuItemComponent icon={HomeIcon} text={'Home'} />
            <MenuItemComponent icon={HomeIcon} text={'Dashboard'} />
            <MenuItemComponent icon={HomeIcon} text={'Overview'} />
            <MenuItemComponent icon={HomeIcon} text={'Disconnect'} />
        </div>
    );
}

export default MenuBarComponent;