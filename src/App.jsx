import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.css"
import Login from "./pages/Login";
import RecoveryPassword from "./pages/RecoveryPassword";
import SignUp from "./pages/SignUp";
import InstructorPage from "./pages/Instructor/InstructorPage";
import CoursePage from "./pages/Instructor/CoursePage";
import AddCourse from "./pages/Instructor/AddCourse"
import { useCourses } from "./state/CoursesContextProvider";
import { UserContextProvider } from "./state/UserContextProvider";
import { readDocuments } from "./scripts/firestore";

export default function App() {
  const { dispatch } = useCourses();
  const [status, setStatus] = useState(0);
  
  useEffect(() => {
    async function loadCoursesData(collectionName) {
      const coursesData = await readDocuments(collectionName).catch(onFail);
      onSuccess(coursesData);
    }
    loadCoursesData("courses");
  }, []);

  function onSuccess(coursesData) {
    dispatch({ type: "initialise", payload: coursesData });
    setStatus(1);
  }
  function onFail() {
    setStatus(2);
  }


  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/instructor-page" element={<InstructorPage />} />
              <Route path="/course-page" element={<CoursePage />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/recoverypassword" element={<RecoveryPassword />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}
