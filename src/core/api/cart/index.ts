import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartProduct } from './types.ts';

const cartsSlice = createSlice({
    name: 'cart',
    initialState: [] as ICartProduct[],
    reducers: {
        addToCart: (state, action: PayloadAction<ICartProduct>) => {
            const productIndex = state.findIndex((product) => product.id === action.payload.id);

            if (productIndex !== -1) {
                state[productIndex].amount += 1;
            } else {
                state.push({ ...action.payload, amount: 1 });
            }
        },
        increaseAmount: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex((product) => product.id === action.payload);

            state[productIndex].amount += 1;
        },
        decreaseAmount: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex((product) => product.id === action.payload);

            state[productIndex].amount -= 1;
            if (state[productIndex].amount < 1) {
                state.splice(productIndex, 1);
            }
        },
        deleteProductInCart: (state, action: PayloadAction<number>) => {
            const productIndex = state.findIndex((product) => product.id === action.payload);

            state.splice(productIndex, 1);
        },
        deleteAll: () => {
            return [];
        },
    },
});

export const { addToCart, increaseAmount, decreaseAmount, deleteProductInCart, deleteAll } = cartsSlice.actions;

export default cartsSlice.reducer;
