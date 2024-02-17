import { CartItem, rootState } from "../types/ecom-types";

export const addProductToCart = 'ADD_TO_CART';

const initialState: rootState = {
cartDetails: []
}
  const rootReducer = (state = initialState, action: {type: string, data: any}) => {
    switch (action.type) {
      case addProductToCart:
        return {...state, cartDetails: action.data} 
      default:
        return state;
    }
  };
  
  export default rootReducer;