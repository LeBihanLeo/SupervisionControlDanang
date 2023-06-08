import LineChart from "../components/AreaChartComponent";
import AreaChartComponent from "../components/AreaChartComponent";

function DashboardView() {
    return (
        <div style={{ padding: 20 }}>
           <div id={"big-center-card"} className={"container"}>
               <div className="item"><AreaChartComponent></AreaChartComponent></div>
               <div className="item"><AreaChartComponent></AreaChartComponent></div>
               <div className="item"><AreaChartComponent></AreaChartComponent></div>
               <div className="item"><AreaChartComponent></AreaChartComponent></div>
           </div>
        </div>
    );
  }
export default DashboardView;

