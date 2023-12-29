const hello = [
    {

        PaymentOptions: "Full",
        amount:"123123123",
        check:"Receive",
        email:"asdasd",
        fblink:"asdasdas",
        name:"sdasd",
    },
    {

        PaymentOptions: "Full1",
        amount:"1231231231",
        check:"Receive1",
        email:"asdasd1",
        fblink:"asdasdas1",
        name:"sdasd",
    },
    {

        PaymentOptions: "Full2",
        amount:"1231231232",
        check:"Receive2",
        email:"asdasd2",
        fblink:"asdasdas2",
        name:"sdasd2",
    },
]


const RecivedDataAdv = (state = [], action) => {
    if (action.type === "Recived_Adversaries") {
        return [...state, action.data];
    } else if (action.type === "Reciv_REMOVE_ADVERSARY") {
        const idToRemove = action.id;
        console.log('asdasdasdasdas')

        // Use filter to create a new array without the object to remove
        return state.filter(item => item !== idToRemove);
    
    } else {
        return state;  // Return the previous state for actions not handled
    }
};

export default RecivedDataAdv;