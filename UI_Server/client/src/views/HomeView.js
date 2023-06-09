import MenuBarComponent from "../components/MenuBarComponent";
import LineChart from "../components/AreaChartComponent";
import '../ViewCSS/HomeMainData.css';
import HomeDataElement from "../components/HomeDataElement";

function HomeView() {
    return (
      <div className="centered-view">
        <MenuBarComponent indexCurrentView={0} />
          <div id={"big-center-card"}>
            <div className={"white-card"} id={"general-chart-home"}>
              <LineChart></LineChart>
            </div>
            <div className={"white-card"} id={"general-data-home"}>
              <HomeDataElement name={"Total energy produced"} value={"456 W"}></HomeDataElement>
              <HomeDataElement name={"Energy needed"} value={"4 W"}></HomeDataElement>
              <HomeDataElement name={"Connected devices"} value={"5"}></HomeDataElement>
          </div>
        </div>
    </div>
    );
  }

export default HomeView;