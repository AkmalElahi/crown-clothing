import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    collections: null
}
console.log("INITIAL" ,INITIAL_STATE)
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS: 
        return {
            ...state,
            collections: action.payload
        }
        default:
            return state
    }
}

export default shopReducer