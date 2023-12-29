const SentDataAdv = (state = [], action) => {

    // console.log(state)
   if (action.type === "Sent_Adversaries") {
    return [...state, action.data];
  } else if (action.type === "Sent_REMOVE_ADVERSARY") {
    const idToRemove = action.id;
    console.log('asdasdasdasdas')

    // Use filter to create a new array without the object to remove
    return state.filter(item => item !== idToRemove);

}else {
    return state;
  }
 };
 
 export default SentDataAdv;