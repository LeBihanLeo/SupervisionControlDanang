import MenuBarComponent from "../components/MenuBarComponent";
import LineChart from "../components/AreaChartComponent";

function HomeView() {
    return (
        <div className={"centered-view"}>
            <MenuBarComponent />
            <div className={"white-card"}>
                <LineChart></LineChart>
            </div>
        </div>
    );
  }

export default HomeView;