
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";
import Activity from "../ActivitySection/Activity";

const DashboardMainContent = () => {
  return (
    <div className="container">
      <div style={{ display: "flex",height:'100%' }}>
        <AnatomySection></AnatomySection>
        <HealthStatusCards></HealthStatusCards>
      </div>
      <div>
        <Activity />
      </div>
    </div>
  );
};

export default DashboardMainContent;
