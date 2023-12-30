const hello = [
    {

        PaymentOptions: "Full",
        amount: "123123123",
        check: "Receive",
        email: "asdasd",
        fblink: "asdasdas",
        name: "sdasd",
    },
    {

        PaymentOptions: "Full1",
        amount: "1231231231",
        check: "Receive1",
        email: "asdasd1",
        fblink: "asdasdas1",
        name: "sdasd",
    },
    {

        PaymentOptions: "Full2",
        amount: "1231231232",
        check: "Receive2",
        email: "asdasd2",
        fblink: "asdasdas2",
        name: "sdasd2",
    },
]


const RecivedDataAdv = (state = [], action) => {
    if (action.type === "Recived_Adversaries") {
        return [...state, action.data];
    } else if (action.type === "Reciv_REMOVE_ADVERSARY") {
        const idToRemove = action.id;
        // Use filter to create a new array without the object to remove
        return state.filter(item => item.id !== idToRemove.id);
    } else if (action.type === "Reciv_UPDATE_ADVERSARY") {
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

export default RecivedDataAdv;
