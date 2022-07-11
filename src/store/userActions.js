import { createAction } from "@reduxjs/toolkit"

// const userActions = (name) => {
//     return {
//         type: 'UPDATE_NAME',
//         payload : name
//     }
// }

export const userActions = createAction('UPDATE_NAME')

export const fetchName = () => {
    return async (dispatch) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await res.json();
        dispatch(userActions(result[0].name))
    }
}