import MenuBarComponent from "../components/MenuBarComponent";
import LineChart from "../components/AreaChartComponent";

function HomeView() {
    return (
        <div className={"centered-view"}>
            <MenuBarComponent />
            <div id="big-center-card">
                <div className={"white-card"}>
                    <LineChart></LineChart>
                </div>
            </div>
        </div>
    );
  }

export default HomeView;