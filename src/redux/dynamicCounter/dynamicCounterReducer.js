import { D_INCREMENT, D_DECREMENT } from "./actionType"

const initialState = {
    value: 0,
}

const dynamicCounterReducer = (state = initialState, action) =>{
    switch(action.type){
        case D_INCREMENT:
            return {
                ...state,
                value: state.value + action.payload,
            }

        case D_DECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            }

        default: 
        return state;
    }
}

export default dynamicCounterReducer;