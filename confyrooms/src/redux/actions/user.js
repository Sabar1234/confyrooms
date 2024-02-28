import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const VERIFY_OTP_REQUEST = "VERIFY_OTP_REQUEST";
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_FAILURE = "VERIFY_OTP_FAILURE";
export const USER_AUTH_REQUEST = "USER_AUTH_REQUEST";
export const USER_AUTH_SUCCESS = "USER_AUTH_SUCCESS";
export const USER_AUTH_FAILURE = "USER_AUTH_FAILURE";
export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const MIDDLEWARE_REQUEST = "MIDDLEWARE_REQUEST";
export const MIDDLEWARE = "MIDDLEWARE";
export const MIDDLEWARE_FAILURE = "MIDDLEWARE_FAILURE";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";
export const STORED_USER = "STORED_USER";
export const CLEAR_TOAST_MESSAGE = "CLEAR_TOAST_MESSAGE";

export const userRegister = (FormData, navigate) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const res = await axios.post("/api/sign-up", FormData);

    console.log("Response from server:", res.data);

    if (res.data.success) {
      console.log("Registration successful:", res.data.message);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: { message: res.data.message, user: res.data.savedUser },
      });
      localStorage.setItem("email", res.data.savedUser.email);
      console.log(res.data);
      navigate("/otp");
    } else {
      console.log("Registration failed:", res.data.message);
      dispatch({ type: USER_REGISTER_FAILURE, payload: res.data.message });
    }
  } catch (error) {
    console.error("Error during registration:", error);

    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const verifyOtp = (otp, navigate) => async (dispatch) => {
  dispatch({ type: VERIFY_OTP_REQUEST });
  const email = localStorage.getItem("email");
  try {
    const res = await axios.post("/api/verify-otp", { otp, email });
    if (res.data.success) {
      dispatch({ type: VERIFY_OTP_SUCCESS, payload: res.data.message });
      localStorage.clear();
      navigate("/login");
    } else {
      dispatch({ type: VERIFY_OTP_FAILURE, payload: res.data.message });
    }
  } catch (error) {
    dispatch({
      type: VERIFY_OTP_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const loginUser = (FormData, navigate) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const res = await axios.post("/api/login", FormData);
    if (res.data.success) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { message: res.data.message, user: res.data.user },
      });
      navigate("/");
    } else {
      dispatch({ type: USER_LOGIN_FAILURE, payload: res.data.message });
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const checkAuth = () => async (dispatch) => {
  dispatch({ type: USER_AUTH_REQUEST });
  try {
    const res = await axios.get("/api/check-auth");
    if (res.data.success) {
      dispatch({
        type: USER_AUTH_SUCCESS,
        payload: { message: res.data.message, user: res.data.user },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logOutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER_REQUEST });
  try {
    localStorage.clear();
    const res = await axios.get("api/log-out");
    console.log(res);
    if (res.data.success)
      dispatch({ type: LOGOUT_USER_SUCCESS, payload: res.data.message });
  } catch (error) {
    dispatch({ type: LOGOUT_USER_FAILURE });
    console.log(error);
  }
};

export const middleware = () => async (dispatch, navigate) => {
  dispatch({ type: MIDDLEWARE_REQUEST });
  try {
    const res = await axios.get("api/authenticate");
    if (res.data.success) {
      dispatch({ type: MIDDLEWARE, payload: res.data.message });
      navigate("/buyNow");
    } else {
      dispatch({ type: MIDDLEWARE_FAILURE, payload: res.data.message });
      navigate("/login");
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const storedUser = () => (dispatch) => {
  try {
    const user = localStorage.getItem("user");
    const storedUser = JSON.parse(user);

    if (storedUser) {
      dispatch({ type: STORED_USER, payload: storedUser });
    }
  } catch (error) {
    console.log(error);
  }
};
