// Node modules
import { createContext, useContext, useReducer } from "react";

//Project Files
import CoursesReducer from "./CoursesReducer";

//Properties
const CourseContext = createContext(null);

export function CoursesContextProvider({ children }) {
  //State
  const [courses, dispatch] = useReducer(CoursesReducer, []);

  //Properties
  const values = { courses, dispatch };

  return <CourseContext.Provider value={values}>{children}</CourseContext.Provider>;
}

export function useCourses() {
  const context = useContext(CourseContext);
  if (!context)
    throw new Error(
      "useCourses only works if the parent component is wrapped in <CoursesContextProvider>"
    );

  return context;
}