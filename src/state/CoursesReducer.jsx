export default function CoursesReducer(state, action) {
    switch (action.type) {
      case "initialise":
        return onInitialise(action);
       case "create":
         return onCreate(state, action);
      case "update":
        return onUpdate(state, action);
    //   case "delete":
    //     return onDelete(state, action);
      default:
        throw new Error("Unhandled action:", action.type);
    }
  }

  function onInitialise(action) {
    const courses = action.payload;
    return courses;
  }

  function onCreate(state, action) {
    const newCourse = action.payload;
    return [...state, newCourse];
  }

  function onUpdate(state, action) {
    const updatedCourse = action.payload;
    const clonedCourses = [...state];
    const itemIndex = clonedCourses.findIndex(
      (item) => item.id === updatedCourse.id
    );
    clonedCourses[itemIndex] = updatedCourse;
    return clonedCourses;
  }
  