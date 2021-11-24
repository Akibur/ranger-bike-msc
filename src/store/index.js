import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products-slice';
import ordersSlice from './orders-slice';


const store = configureStore({
    reducer: {
        products: productsSlice,
        orders: ordersSlice
    },
});

export default store;
