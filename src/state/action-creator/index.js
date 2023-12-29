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
export const addAdversaries = (Adversaries)=>{
    console.log("working 1")
    return(dispatch)=>{
        dispatch({
            type:'Add_Adversaries',
            data:Adversaries,
        });
    }
}
export const SentAdversaries = (SentAdversaries)=>{
    console.log("working 1")
    return(dispatch)=>{
        dispatch({
            type:'Sent_Adversaries',
            data:SentAdversaries,
        });
    }
}
export const RecivedAdversaries = (RecivedAdversaries)=>{
    console.log("working 1")
    return(dispatch)=>{
        dispatch({
            type:'Recived_Adversaries',
            data:RecivedAdversaries,
        });
    }
}
export const RecivRemoveAdversary = (adversaryId) => {
    console.log("Removing adversary with ID:", adversaryId);
    return (dispatch) => {
        dispatch({
            type: 'Reciv_REMOVE_ADVERSARY',
            id: adversaryId,
        });
    };
};
export const SentRemoveAdversary = (adversaryId) => {
    console.log("Removing adversary with ID:", adversaryId);
    return (dispatch) => {
        dispatch({
            type: 'Sent_REMOVE_ADVERSARY',
            id: adversaryId,
        });
    };
};
export const addSetteled = (Setteled)=>{
    console.log("working 1")
    return(dispatch)=>{
        dispatch({
            type:'Add_Setteled',
            data:Setteled,
        });
    }
}
// export const closeModal = () => ({
//   type: CLOSE_MODAL,
// });