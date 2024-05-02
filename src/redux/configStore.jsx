import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";
import orderReducer from "./reducers/orderReducer";
export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    userReducer: userReducer,
    orderReducer:orderReducer
  },
});
