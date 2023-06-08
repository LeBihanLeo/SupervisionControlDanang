import LineChart from "../components/AreaChartComponent";

function DashboardView() {
    return (
        <div style={{ padding: 20 }}>
           <div id={"big-center-card"}>
               <div className={"white-card"}>
                   <LineChart></LineChart>
               </div>
               <div className={"white-card"}>
                   <LineChart></LineChart>
               </div>
               <div className={"white-card"}>
                   <LineChart></LineChart>
               </div>
               <div className={"white-card"}>
                   <LineChart></LineChart>
               </div>
               <div className={"white-card"}>
                   <LineChart></LineChart>
               </div>
           </div>
        </div>
    );
  }

export default DashboardView;