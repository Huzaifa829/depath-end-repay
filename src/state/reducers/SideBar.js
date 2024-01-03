const SideBAr = (state = { isDrawerOpen: false }, action) => {
    if (action.type === "TOGGLE_DRAWER") {
      return { ...state, isDrawerOpen: action.payload };
    } else {
      // Handle other action types if needed
      return state;
    }
  };
  
  export default SideBAr;