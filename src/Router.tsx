import { Route, Routes } from "react-router-dom";
import DashboardTemplate from "./templates/DashboardTemplate";
import DashboardView from "./views/DashboardView";
import HomeView from "./views/HomeView";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/dashboard" element={<DashboardTemplate />}>
        <Route path="" element={<DashboardView />} />
      </Route>
    </Routes>
  );
};

export default Router;
