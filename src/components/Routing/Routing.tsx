import CreatePage from "@pages/CreatePage";
import StudentPage from "@pages/StudentPage";
import { Route, Routes } from "react-router-dom";
import HogwartsPage from "@pages/HogwartsPage";
import HousePage from "@pages/HousePage";

const Routing = () => (
  <Routes>
    <Route path="/" element={<HogwartsPage />} />
    <Route path="/students/:id" element={<StudentPage />} />
    <Route path="/create-student" element={<CreatePage />} />
    <Route path="/house/:houseName" element={<HousePage />} />
  </Routes>
);

export default Routing;
