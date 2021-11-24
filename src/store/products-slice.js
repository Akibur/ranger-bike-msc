import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    products: [],
    loading: false,
    productError: {
        isError: false,
        message: ""
    },
    alert: ""
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

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product, thunkAPI) => {
        try {
            console.log(product);
            const res = await fetch(`https://sheltered-crag-02874.herokuapp.com/products/`, {
                method: 'POST',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then(
                (data) => data.json()
            );
            return res;
        } catch (err) {
            console.log("try catch err", err);

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
            state.productError.isError = true;
            state.productError.message = action;
        },

        //CreateProduct
        [createProduct.pending]: (state) => {
            state.loading = true;
        },
        [createProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.alert = action?.payload?.message;
        },
        [createProduct.rejected]: (state, action) => {
            state.loading = false;
            state.productError.isError = true;
            state.productError.message = action.error.message;
        },

    },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;