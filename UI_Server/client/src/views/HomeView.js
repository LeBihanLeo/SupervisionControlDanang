import MenuBarComponent from "../components/MenuBarComponent";
import PieChart from "../components/PieChart";
import {useState} from "react";
import {Data} from "../utils/Data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChartComponent from "../components/BarChartComponent";
import LineChart from "../components/AreaChartComponent";

function HomeView() {
    return (
        <div style={{ padding: 20 }}>
          <MenuBarComponent></MenuBarComponent>
           <div id={"big-center-card"}>
               <div className={"white-card"}>
                   <LineChart></LineChart>
               </div>
           </div>
        </div>
    );
  }

export default HomeView;