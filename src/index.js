import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./state/UserContextProvider";
import { CoursesContextProvider } from "./state/CoursesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CoursesContextProvider>
          <App />
        </CoursesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
