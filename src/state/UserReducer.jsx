export default function UserReducer(state, action) {
    switch (action.type) {
      case "SET_USER":
        return setUser(action);
    default:
      throw new Error("Unhandled action:", action.type);
    }
  }
  
  function setUser(action) {
    const user = action.payload;
    return user;
  }
