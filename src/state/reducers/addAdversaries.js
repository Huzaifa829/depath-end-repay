const addAdversariesreducers = (state = [], action) => {

    // console.log(state)
   if (action.type === "Add_Adversaries") {
    return [...state, action.data];
  } else {
    return state;
  }
 };
 
 export default addAdversariesreducers;