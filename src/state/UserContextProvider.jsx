// Node modules
import { createContext, useContext, useReducer } from "react";

//Project Files
import UserReducer from "./UserReducer";

//Properties
const UserContext = createContext();

export function UserContextProvider({ children }) {
  //User from Cache
  const cachedUser = sessionStorage.getItem("id") ? {
    "email": sessionStorage.getItem("email"),
    "id": sessionStorage.getItem("id"),
    "isInstructor": sessionStorage.getItem("isInstructor"),
    "name": sessionStorage.getItem("name")
  }
  : null;

  //State
  const [user, dispatch] = useReducer(UserReducer, cachedUser);

  //Properties
  const values = { user, dispatch };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error(
      "useUser only works if the parent component is wrapped in <UserContext>"
    );

  return context;
}

export default UserContextProvider;