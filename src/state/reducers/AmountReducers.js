
// const Reducer = (state=0,action) => {
//  if(action.type==="deposit"){
//     return state + action.payload
//  }
//  else if(action.type === 'withdraw'){
//     return state - action.payload
//  }
//  else{
//     return state;
//  }
// }

// export default Reducer
// reducer.js
// import { OPEN_MODAL, CLOSE_MODAL } from '../action-creator/type';



const modalReducer = (state = false, action) => {
  console.log(state)
    if (action.type === 'true') {
       return state = true;
      } else if (action.type === 'false') {
        return state = false;
      } else {
        return state;
      }
};

export default modalReducer;

