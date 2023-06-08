import {useState} from "react";
import {Data} from "../utils/Data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import MenuBarComponent from "../components/MenuBarComponent";
import LineChart from "../components/AreaChartComponent";

function HomeView() {
    return (
      <div>
        
        <MenuBarComponent/>
        <div style={{ padding: 20 }} id={"horizontal-page"}>
          <div id={"big-center-card"}>
            <div className={"white-card"} id={"general-chart-home"}>
              <LineChart></LineChart>
            </div>
            <div className={"white-card"} id={"general-data-home"}>
            <div>
              Total energie produced:
              <div class = "numero-home">
                456 W
              </div>
              Energie needed
              <div class = "numero-home">
                4 W
              </div>
              Connected devices
              <div class = "numero-home">
                5 devices
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

export default HomeView;