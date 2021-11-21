import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: [],
    loading: false,
    error: {
        isError: false,
        message: ""
    }
};

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (thunkAPI) => {
        try {
            const res = await fetch('https://sheltered-crag-02874.herokuapp.com/products').then(
                (data) => data.json()
            );
            return res;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return thunkAPI.rejectWithValue(err.response.data);
        }

    });


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        //pass the initial state and any payload which is in, action.payload 
        // createProduct(state, action) {
        //     // Create a product
        // },
        // deleteProduct(state, action) {
        //     // delete a product
        // },
    },
    extraReducers: {
        //GetProducts
        [getProducts.pending]: (state) => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error.isError = true;
            state.error.message = action;
        },
    },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;