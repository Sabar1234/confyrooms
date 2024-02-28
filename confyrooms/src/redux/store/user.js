import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer/user";
import { productReducer } from "../reducer/product";

const store = configureStore({
  reducer: {
    user: rootReducer,
    products: productReducer,
  },
});

export default store;
