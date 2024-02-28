import {
  PRODUCT_FETCH_FAILURE,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
  CLEAR_TOAST_MESSAGE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
} from "../actions/product";

const initialStateProducts = {
  products: [],
  isLoading: false,
  success: "",
  error: "",
};

const productReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        success: action.payload.message,
      };

    case PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Something went wrong",
      };
    case UPLOAD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload.message,
        addedProduct: action.payload.savedProduct,
        userProduct: action.payload.updatedUser,
      };
    case UPLOAD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
        updatedProduct: updatedProduct,
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CLEAR_TOAST_MESSAGE:
      return { ...state, success: "", error: "" };

    default:
      return state;
  }
};

export { productReducer };
