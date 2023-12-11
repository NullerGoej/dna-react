import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addItemToCart: (state, action) => {
        const currentAmount = state[action.payload] || 0;
        state[action.payload] = currentAmount + 1;
    },
    decrementQuantity: (state, action) => {
        console.log(state[action.payload])
        if (state[action.payload] > 1) {
            state[action.payload] -= 1;
        } else {
            delete state[action.payload];
        }
    },
    deleteItemFromCart: (state, action) => {
        delete state[action.payload];
    },
  },
})

export const cartCount = (state) => {
    let count = 0;
    Object.values(state).forEach((amount) => {
      count += amount;
    });
    return count;
};

export const { addItemToCart, decrementQuantity, deleteItemFromCart } = cartSlice.actions

export default cartSlice.reducer