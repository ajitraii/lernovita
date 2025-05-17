import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchProduct = createAsyncThunk('user/product', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const res = await response.json();

        console.log('error', res)
        return res
    } catch (error) {
        throw new Error("Something went wrong");

    }

})

const ProductSlice = createSlice({
    name: 'Product',
    initialState: {
        productList: [],
        isLoading: false,
        error: null

    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productList = action.payload
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})



export default ProductSlice.reducer