import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const UPLOAD_PRODUCT_REQUEST = "UPLOAD_PRODUCT_REQUEST";
export const UPLOAD_PRODUCT_SUCCESS = "UPLOAD_PRODUCT_SUCCESS";
export const UPLOAD_PRODUCT_FAILURE = "UPLOAD_PRODUCT_FAILURE";
export const PRODUCT_FETCH_REQUEST = "PRODUCT_FETCH_REQUEST";
export const PRODUCT_FETCH_SUCCESS = "PRODUCT_FETCH_SUCCESS";
export const PRODUCT_FETCH_FAILURE = "PRODUCT_FETCH_FAILURE";
export const USER_PRODUCT_REQUEST = "USER_PRODUCT_REQUEST";
export const USER_PRODUCT_SUCCESS = "USER_PRODUCT_SUCCESS";
export const USER_PRODUCT_FAILURE = "USER_PRODUCT_FAILURE";
export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";

export const CLEAR_TOAST_MESSAGE = "CLEAR_TOAST_MESSAGE";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_FETCH_REQUEST });
  try {
    const res = await axios.get("/api/products");
    localStorage.setItem("products", JSON.stringify(res.data.product));
    if (res.data.success) {
      dispatch({
        type: PRODUCT_FETCH_SUCCESS,
        payload: { products: res.data.product, message: res.data.message },
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRODUCT_FETCH_FAILURE,
    });
  }
};

export const uploadProduct = (FormData) => async (dispatch) => {
  dispatch({ type: UPLOAD_PRODUCT_REQUEST });
  try {
    const res = await axios.post("/api/add-product", FormData);
    console.log("res", res);
    if (res.data.success) {
      dispatch({
        type: UPLOAD_PRODUCT_SUCCESS,
        payload: {
          message: res.data.message,
          savedProduct: res.data.addedProduct,
          userProduct: res.data.updatedUser,
        },
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPLOAD_PRODUCT_FAILURE,
      payload: "Something went wrong",
    });
  }
};

export const updateProduct = (price, id) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_REQUEST });
  try {
    const res = await axios.patch(`api/update/${id}`, price);
    console.log("Upadate REsponse", res);
    if (res.data.success) {
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: {
          message: res.data.message,
          savedProduct: res.data.updatedProduct,
          userProduct: res.data.updatedProduct,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};


