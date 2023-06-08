import MenuBarComponent from "../components/MenuBarComponent";


function HomeView() {
    return (
        <div style={{ padding: 20 }}>
          <MenuBarComponent></MenuBarComponent>

          <div className={"white-card"}>
            Total energie produce :
            <div>
              Numéro
            </div>
            Energie needed
            <div>
              4
            </div>
            Connected devices
            <div>
              5
            </div>
          </div>
        </div>
    );
  }

export default HomeView;