import CreatePage from "@pages/createPage";
import StudentPage from "@pages/studentPage";
import { Route, Routes } from "react-router-dom";
import HogwartsPage from "@pages/hogwartsPage";

const Routing = () => (
  <Routes>
    <Route path="/" element={<HogwartsPage />} />
    <Route path="/students/:id" element={<StudentPage />} />
    <Route path="/create-student" element={<CreatePage />} />
  </Routes>
);

export default Routing;
