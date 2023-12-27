
// userReducer.js


const userReducer = (state = [], action) => {

   // console.log(state)
  if (action.type === "ADD_USER") {
   return [...state, action.data];
 } else {
   return state;
 }
};

export default userReducer;
