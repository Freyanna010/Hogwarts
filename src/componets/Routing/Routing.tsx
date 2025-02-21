import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import StudentsPage from "@/pages/studentsPages";
import StudentPage from "@/pages/studentPage";
import CreatePage from "@/pages/createPage";

const Routing = () => (
  <Routes >
    <Route path="/" element={<Navigate to="/students" />} />
    <Route path="/students" element={<StudentsPage />} />
    <Route path="/students/:id" element={<StudentPage />} />
    <Route path="/create-student" element={<CreatePage />} />
  </Routes>
);

export default Routing;
