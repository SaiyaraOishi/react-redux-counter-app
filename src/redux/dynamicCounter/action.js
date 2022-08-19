import { D_INCREMENT, D_DECREMENT } from "./actionType";

export const increment = (value) =>{
    return {
        type: D_INCREMENT,
        payload: value,
    }
}

export const decrement = (value) =>{
    return {
        type: D_DECREMENT,
        payload: value,
    }
}