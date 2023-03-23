import { Navigate, Outlet } from "react-router-dom";

import { useUser } from "../state/UserContextProvider";

import React from "react";

export default function Unauthenticated() {
  const { user } = useUser();

  return user ? (
    user.isInstructor ? (
      <Navigate to="/instructor-page" />
    ) : (
      <Navigate to="/student-page" />
    )
  ) : (
    <Outlet />
  );
}
