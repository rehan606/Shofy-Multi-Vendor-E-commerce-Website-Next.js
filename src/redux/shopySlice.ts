import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorite: [],
    userInfo: null,
}


export const shopySlice = createSlice({
    name: 'shopy',
    initialState,
    reducers:{
        addToCart:( state, action) => {
            state.cart = action.payload
        }
    }
});

export const { addToCart } = shopySlice.actions;
export default shopySlice.reducer;