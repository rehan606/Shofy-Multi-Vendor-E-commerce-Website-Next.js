import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface InitialState {
    cart: ProductType[];
    favorite: ProductType[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    userInfo: any ;
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
        },
        // For item increment in cart
        increaseQuantity:(state,action) => {
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload );
            if(existingProduct) {
                existingProduct.quantity! += 1;
            }
        },
        // For item decrement in cart
        decreaseQuantity:(state,action) => {
            const existingProduct = state?.cart?.find((item) => item?.id === action.payload );
            if(existingProduct) {
                existingProduct.quantity! -= 1;
            }
        },
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity } = shopySlice.actions;
export default shopySlice.reducer;