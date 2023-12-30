const SentDataAdv = (state = [], action) => {

  // console.log(state)
  if (action.type === "Sent_Adversaries") {
    return [...state, action.data];
  } else if (action.type === "Sent_REMOVE_ADVERSARY") {
    const idToRemove = action.id;


    // Use filter to create a new array without the object to remove
    return state.filter(item => item.id !== idToRemove.id);

  } else if (action.type === "Sent_UPDATE_ADVERSARY") {
    const idToUpdate = action.data;
    const idToUpdate1 = action.id;
    console.log("Updating item with id:", idToUpdate1.id);

    const updatedState = state.map(item => {
        console.log('item',item.id)
        if (item.id === idToUpdate1.id) {
            // Update the specific item
            return {
                ...item,
                sented: idToUpdate1.sented,
                recive: idToUpdate1.recive,
                newSetelments: [
                    ...(item.newSetelments || []),
                    {
                        amount: idToUpdate1.newSetelments.amount,
                        type: idToUpdate1.newSetelments.type,
                        rowData: idToUpdate1.newSetelments.rowData,
                        description: idToUpdate1.newSetelments.description
                    }
                ]
            };
        }
        return item;
    });
    console.log("Updated state:", updatedState);
    return updatedState;

} else {
    return state;  // Return the previous state for actions not handled
  }
};

export default SentDataAdv;