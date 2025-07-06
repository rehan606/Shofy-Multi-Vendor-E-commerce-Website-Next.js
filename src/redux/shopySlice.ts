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

        // Remove from Cart 
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item?.id !== action.payload);
        },

        // Reset Cart 
        resetCart: (state) => {
            state.cart = [];
        },

        // Add to Favorite 
        addToFavorite: (state, action) => {
            const existingProduct = state?.favorite?.find((item) => item?.id === action.payload?.id);
            
            if (existingProduct) {
                state.favorite = state.favorite.filter((item) => item?.id !== action.payload.id);
            } else {
                state.favorite.push(action.payload);
            }
        }
    }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, resetCart, addToFavorite } = shopySlice.actions;
export default shopySlice.reducer;