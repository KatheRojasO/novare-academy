import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.css"
import Login from "./pages/Login";
import RecoveryPassword from "./pages/RecoveryPassword";
import SignUp from "./pages/SignUp";
import InstructorPage from "./pages/Instructor/InstructorPage";
import AddCourse from "./pages/Instructor/AddCourse"
import { UserContextProvider } from "./state/UserContextProvider";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/instructor-page" element={<InstructorPage />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/recoverypassword" element={<RecoveryPassword />} />
              <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}
