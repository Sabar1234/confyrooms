import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./redux/actions/user";
function App() {
  const location = useLocation();
  const isListForm = location.pathname === "/signup";
  const isSigninForm = location.pathname === "/login";
  const isBuyNow = location.pathname === "/buyNow";
  const isOtp = location.pathname === "/otp";
  const isError = location.pathname === "/*";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      {!isListForm && !isSigninForm && !isBuyNow && !isOtp && !isError? (
        <>
          <Nav />
        </>
      ) : null}

      <Outlet />

      {!isSigninForm && !isListForm && !isBuyNow && !isOtp && !isError ? (
        <>
          <Footer />
        </>
      ) : null}
    </>
  );
}

export default App;
