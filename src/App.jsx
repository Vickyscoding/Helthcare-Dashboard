import Sidebar from "./components/Sidebar/Sidebar"; 
import Header from "./components/Header/Header"
import './App.css';
import DashboardMainContent from "./components/DashboardContent/DashboardContent";
import RightPanel from "./components/RightPannel/RightPannel";


function App() {
    return(
      <>
      <div className="appContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="maincontent">
        <Header />
        <DashboardMainContent />
      </div>

      <div className="rightPanelWrapper">
        <RightPanel />
      </div>
    </div>
    </>
    )
}

export default App
