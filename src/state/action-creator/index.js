// export const despositMoney = (amount)=>{
//     return(dispatch)=>{
//         dispatch({
//             type:'deposit',
//             payload:amount,
//         })
//     }
// }
// export const withdrawMoney = (amount)=>{
//     return(dispatch)=>{
//         dispatch({
//             type:'withdraw',
//             payload:amount,
//         })
//     }
// }

// actions.js
// import { OPEN_MODAL, CLOSE_MODAL } from './type';

// export const openModal = () => ({
//   type: OPEN_MODAL,
// });
export const openModal = (amount)=>{
    // console.log(amount)
    return(dispatch)=>{
        dispatch({
           type: "true",
           show: amount,
        })
    }
}

export const closeModal = (amount)=>{
    // console.log(amount)
    return(dispatch)=>{
        dispatch({
            type: "false",
            show: amount,
        })
    }
}
export const adduser = (userdata)=>{
    console.log("working 1")
    return(dispatch)=>{
        dispatch({
            type:'ADD_USER',
            data:userdata,
        });
    }
}
// export const closeModal = () => ({
//   type: CLOSE_MODAL,
// });