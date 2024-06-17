import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rating: { rate: number; count: number };
    quantity: number;
}

interface cartState {
    items: CartItem[];
}

const initialState : cartState ={
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state, action: PayloadAction) => {
            state.items = [];
        }
    },
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;