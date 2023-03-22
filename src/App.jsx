import { useState, useEffect } from "react";
import Router from "./components/Router";
import { useCourses } from "./state/CoursesContextProvider";
import { readCourses } from "./scripts/CoursesCollection";
import "./styles/styles.css";

export default function App() {
  const { dispatch } = useCourses();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    async function loadCoursesData(collectionName) {
      const coursesData = await readCourses(collectionName).catch(onFail);
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
      {status === 0 && <p>Loading...⏱️</p>}
      {status === 1 && <Router />}
      {status === 2 && <p>Error...❌</p>}
    </div>
  );
}
