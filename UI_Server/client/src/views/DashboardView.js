import LineChart from "../components/AreaChartComponent";
import AreaChartComponent from "../components/AreaChartComponent";
import MenuBarComponent from "../components/MenuBarComponent";

function DashboardView() {
    return (
    <div className={"centered-view"}>
        <MenuBarComponent />
        <div id="big-center-card">
            <div className="container">
                <div className="row">
                    <div className="card-01"><AreaChartComponent></AreaChartComponent></div>
                    <div className="card-01"><AreaChartComponent></AreaChartComponent></div>
                    <div className="card-01"><AreaChartComponent></AreaChartComponent></div>
                </div>
                <div className="row">
                    <div className="card-03"><AreaChartComponent></AreaChartComponent></div>
                </div>
            </div>
        </div>
    </div>
    );
  }
export default DashboardView;

