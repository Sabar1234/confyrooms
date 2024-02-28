import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  LOGOUT_USER,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_AUTH_SUCCESS,
  VERIFY_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  CLEAR_TOAST_MESSAGE,
  LOGOUT_USER_REQUEST,
  STORED_USER,
} from "../actions/user";

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  isLoading: false,
  success: "",
  error: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        success: action.payload.message,
      };
    case USER_REGISTER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case VERIFY_OTP_REQUEST:
      return { ...state, isLoading: true };
    case VERIFY_OTP_SUCCESS:
      return { ...state, isLoading: false, success: action.payload };
    case VERIFY_OTP_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case USER_AUTH_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };

    case LOGOUT_USER_REQUEST:
      return { ...state, isLoading: true };
    case LOGOUT_USER:
      return { ...state, user: {}, isLoading: false };

    case STORED_USER:
      console.log("Stored User Payload:", action.payload);
      return { ...state, user: action.payload };
    case CLEAR_TOAST_MESSAGE:
      return { ...state, success: "", error: "" };

    default:
      return state;
  }
};

export { rootReducer };
