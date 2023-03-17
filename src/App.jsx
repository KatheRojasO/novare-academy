import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/styles.css"
import Login from "./pages/Login";
import RecoveryPassword from "./pages/RecoveryPassword";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/recoverypassword" element={<RecoveryPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
