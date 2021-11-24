import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: [],
    order: {},
    userOrders: [],
    loading: false,
    statusUpdateLoading: false,
    orderError: {
        isError: false,
        message: ""
    },
    alert: "",
};


export const getAllOrders = createAsyncThunk(
    'orders/getAllOrders',
    async (thunkAPI) => {
        try {
            const res = await fetch('https://sheltered-crag-02874.herokuapp.com/orders',
                {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem('idToken')}`
                    }
                }
            ).then(
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
export const getUserOrders = createAsyncThunk(
    'orders/getUserOrders',
    async (userEmail, thunkAPI) => {
        console.log(userEmail);
        try {
            const res = await fetch(`https://sheltered-crag-02874.herokuapp.com/orders/user/${userEmail.email}`, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`
                }
            }
            ).then(
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
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`,
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
export const updateOrder = createAsyncThunk(
    'orders/updateOrder',
    async (update, thunkAPI) => {
        const { email, id, status } = update;
        try {
            const order = { status: status };
            const res = await fetch(`https://sheltered-crag-02874.herokuapp.com/orders/${id}`, {
                method: 'PATCH',
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('idToken')}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            }).then(data => data.json());
            if (email) thunkAPI.dispatch(getUserOrders({ email: email }));
            else thunkAPI.dispatch(getAllOrders());

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
        [getAllOrders.pending]: (state) => {
            if (state.orders.length < 1) state.loading = true;
        },
        [getAllOrders.fulfilled]: (state, action) => {
            state.loading = false;
            state.orders = action.payload;
        },
        [getAllOrders.rejected]: (state, action) => {
            state.loading = false;
            state.orderError.isError = true;
            state.orderError.message = action;
        },

        //GetUserOrders
        [getUserOrders.pending]: (state) => {
            if (state.userOrders.length < 1) state.loading = true;
        },
        [getUserOrders.fulfilled]: (state, action) => {
            state.loading = false;
            state.userOrders = action.payload;
        },
        [getUserOrders.rejected]: (state, action) => {
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

        //UpdateOrder
        [updateOrder.pending]: (state) => {
            state.statusUpdateLoading = true;
        },
        [updateOrder.fulfilled]: (state, action) => {
            state.statusUpdateLoading = false;
            console.log(action.payload);
        },
        [updateOrder.rejected]: (state, action) => {
            state.statusUpdateLoading = false;
            state.orderError.isError = true;
            state.orderError.message = action.error.message;
        },


    },
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice.reducer;