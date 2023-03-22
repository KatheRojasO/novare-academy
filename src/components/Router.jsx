import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import SignUp from "../pages/SignUp";
import InstructorPage from "../pages/Instructor/InstructorPage";
import CoursePage from "../pages/Instructor/CoursePage";
import FilesPage from "../pages/Instructor/FilesPage";
import AddCourse from "../pages/Instructor/AddCourse"

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/instructor-page" element={<InstructorPage />} />
        <Route path="/course-page/:id" element={<CoursePage />} />
        <Route path="/course-page/:id/files" element={<FilesPage />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/recoverypassword" element={<RecoveryPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
