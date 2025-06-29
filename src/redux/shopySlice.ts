import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface InitialState {
    cart: ProductType[];
    favorite: ProductType[];
    userInfo: any;
}

const initialState: InitialState = {
    cart: [],
    favorite: [],
    userInfo: null,
}


export const shopySlice = createSlice({
    name: 'shopy',
    initialState,
    reducers:{
        addToCart:( state, action) => {
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload?.id );
            if(existingProduct) {
                existingProduct.quantity! += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1});
            }
            // state.cart.push(action.payload);
        }
    }
});

export const { addToCart } = shopySlice.actions;
export default shopySlice.reducer;