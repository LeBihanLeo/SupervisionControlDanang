import LineChart from "../components/AreaChartComponent";
import AreaChartComponent from "../components/AreaChartComponent";

function DashboardView() {
    return (
        <div style={{ padding: 20 }}>
           <div id={"big-center-card"} class={"container"}>
                   <AreaChartComponent className="item"></AreaChartComponent>
                   <AreaChartComponent className="item"></AreaChartComponent>
                   <AreaChartComponent className="item"></AreaChartComponent>
                   <AreaChartComponent className="item"></AreaChartComponent>
                   <AreaChartComponent className="item"></AreaChartComponent>
           </div>
        </div>
    );
  }

export default DashboardView;

