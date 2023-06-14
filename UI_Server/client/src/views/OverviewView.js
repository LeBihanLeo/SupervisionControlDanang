import LineChart from "../components/AreaChartComponent";
import AreaChartComponent from "../components/AreaChartComponent";
import '../ViewCSS/Overview.css';
import MenuBarComponent from "../components/MenuBarComponent";
import SchemeExample from  "../ressources/SchemeExample.png"
function DashboardView() {
    return (
    <div className={"centered-view"}>
        <MenuBarComponent indexCurrentView={2}/>
        <div id="big-center-card">
            <img className="scheme-image" src={SchemeExample}/>
        </div>
    </div>
    );
  }
export default DashboardView;

