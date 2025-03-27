import CreatePage from "@pages/CreatePage";
import StudentPage from "@pages/StudentPage";
import { Route, Routes } from "react-router-dom";
import HogwartsPage from "@pages/HogwartsPage";
import HousePage from "@pages/HousePage";
import FavoritePage from "@pages/FavoritePage";

const Routing = () => (
  <Routes>
    {/* //TODO: названия path  */}
    <Route path="/" element={<HogwartsPage />} />
    <Route path="/students/:id" element={<StudentPage />} />
    <Route path="/students/create-student" element={<CreatePage />} />
    <Route path="/house/:houseName" element={<HousePage />} />
    <Route path="/students/favorites" element={<FavoritePage />} />
  </Routes>
);

export default Routing;
