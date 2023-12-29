const addSetteled = (state = [], action) => {

    // console.log(state)
   if (action.type === "Add_Setteled") {
    return [...state, action.data];
  } else {
    return state;
  }
 };
 
 export default addSetteled;