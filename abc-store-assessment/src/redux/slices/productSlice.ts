import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    rating: { rate: number; count: number };
    quantity: number;
}

interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
}

const initialState: ProductState = {
    products: [],
    selectedProduct: null,
};

export const fetchProducts:any = createAsyncThunk ("products/fetchProducts",  async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data as Product[];
    }
);

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectProduct: (state, action: PayloadAction<number>) => {
            state.selectedProduct = state.products.find(product => product.id === action.payload) || null;
        },
        setProducts:(state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            });
    },
});

export const { selectProduct, setProducts } = productSlice.actions;

export const selectFilteredProducts = (state: RootState, category: string | undefined) => {
    if (!category) return state.products.products;
    else {
        if(category === 'men') {
            return state.products.products.filter(product => product.category === "men's clothing")
        } else if(category === 'women') {
            return state.products.products.filter(product => product.category === "women's clothing" || product.category === "jewelery")
        } else if(category === 'electronics') {
            return state.products.products.filter(product => product.category === "electronics")
        }
    }
};

export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;

export default productSlice.reducer;
