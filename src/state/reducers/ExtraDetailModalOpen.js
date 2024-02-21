const ExtraDetailModalReducer = (state = false, action) => {
    // console.log(state)
      if (action.type === 'true') {
         return state = true;
        } else if (action.type === 'false') {
          return state = false;
        } else {
          return state;
        }
  };
  
  export default ExtraDetailModalReducer;