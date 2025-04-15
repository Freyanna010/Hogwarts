import CreatePage from "@pages/CreatePage";
import StudentPage from "@pages/StudentPage";
import { Route, Routes } from "react-router-dom";
import HogwartsPage from "@pages/HogwartsPage";
import HousePage from "@pages/HousePage";
import FavoritePage from "@pages/FavoritePage";

const Routing = () => (
  <Routes>
    <Route path="/Hogwarts/" element={<HogwartsPage />} />
    <Route path="/Hogwarts/students/:id" element={<StudentPage />} />
    <Route path="/Hogwarts/students/create-student" element={<CreatePage />} />
    <Route path="/Hogwarts/house/:houseName" element={<HousePage />} />
    <Route path="/Hogwarts/students/favorites" element={<FavoritePage />} />
  </Routes>
);

export default Routing;
