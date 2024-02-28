import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { logOutUser } from "../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";

function Nav() {
  const user = useSelector((state) => state.user.user);
  console.log("Nav",user);
  const dispatch = useDispatch();
  // const [shouldRerender, setShouldRerender] = useState(false);

  // useEffect(() => {
  //   // You can use this effect to trigger a re-render when the user state changes
  //   setShouldRerender(!shouldRerender);
  // }, [user]);
  const handleLogout=()=>{
    dispatch(logOutUser())
    user=null
  }


  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg "
        style={{ backgroundColor: "#252525" }}
      >
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#">
            <h3 className="font-weight-bold">
              <Link className=" " to="/">
                <span className="text-decoration-underline fw-bold">
                  Confy Rooms
                </span>
              </Link>{" "}
            </h3>
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="mx-1 nav-item ">
                <Link className="nav-link menu fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="mx-1 nav-item">
                <Link className="nav-link menu fw-bold" to="/about">
                  About
                </Link>
              </li>

              <li className="mx-1 nav-item">
                <Link className="nav-link menu fw-bold" to="/contact-us">
                  Contact
                </Link>
              </li>
              {user && user.user && user.user.name ? (
                <>
                  <a className="mx-1 nav-item">
                    <Link
                      className="nav-link fw-bold"
                      to="/admin"
                      style={{
                        color: "#21b360",
                        fontFamily: "Roboto,sans-serif",
                      }}
                    >
                      {/* <i
                        className="fa-solid mx-2 fa-user-tie"
                        style={{ color: "#A5A5A5",fontSize:"13px" }}
                      ></i> */}
                      Admin{" "}
                    </Link>
                  </a>
                </>
              ) : null}
            </ul>

            {user && user.user && user.user.name ? (
              <div>
                {" "}
                <div className="signUpBtn">
                  <button
                    className="btn btn-success"
                    onClick={handleLogout}
                  >
                    {" "}
                    Log-out
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <i className="fa-solid fa-address-card mx-2"></i>
                <Link className="loginLink fw-medium " to="/signup">
                  Login/Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
