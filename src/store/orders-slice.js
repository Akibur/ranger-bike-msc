import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    orders: [],
    order: {},
    loading: false,
    orderError: {
        isError: false,
        message: ""
    },
    alert: "",
};



export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async (thunkAPI) => {

        try {
            const res = await fetch('https://sheltered-crag-02874.herokuapp.com/orders').then(
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

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (order, thunkAPI) => {

        try {

            const res = await fetch(`https://sheltered-crag-02874.herokuapp.com/orders/`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
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


const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        //pass the initial state and any payload which is in, action.payload 
        // createOrder(state, action) {
        //     // Create a order
        // },
        // deleteOrder(state, action) {
        //     // delete a order
        // },
    },
    extraReducers: {
        //GetOrders
        [getOrders.pending]: (state) => {
            state.loading = true;
        },
        [getOrders.fulfilled]: (state, action) => {
            state.loading = false;
            state.orders = action.payload;
        },
        [getOrders.rejected]: (state, action) => {
            state.loading = false;
            state.orderError.isError = true;
            state.orderError.message = action;
        },

        //CreateOrder
        [createOrder.pending]: (state) => {
            state.loading = true;
        },
        [createOrder.fulfilled]: (state, action) => {
            state.loading = false;
            state.alert = action?.payload?.message;
        },
        [createOrder.rejected]: (state, action) => {
            state.loading = false;
            state.orderError.isError = true;
            state.orderError.message = action.error.message;
        },

    },
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice.reducer;