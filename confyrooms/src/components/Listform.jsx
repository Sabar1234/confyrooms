import React from "react";
import "./Listform.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, Toaster } from "sonner";
import {
  userRegister,
  USER_REGISTER_FAILURE,
  CLEAR_TOAST_MESSAGE,
} from "../redux/actions/user";
import { Link } from "react-router-dom";

function Listform() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const isLoading = useSelector((state) => state.user.isLoading);
  const success = useSelector((state) => state.user.success);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //sign-up
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(userData, navigate));
  };

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    if (error) {
      toast.error(error);
      dispatch({ type: USER_REGISTER_FAILURE, payload: "" });
    }
    dispatch({ type: CLEAR_TOAST_MESSAGE });
  }, [success, error]);

  function handleClick() {
    navigate("/login");
  }

  return (
    <div>
      <Toaster richColors position="bottom-left" />
      {isLoading ? (
        <div>
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>{" "}
        </div>
      ) : (
        <div>
          <div className="container d-flex flex-column align-items-center my-2">
              <div className="logBox mb-3">
                <h2
                  className="logo text-decoration-underline "
                  style={{ cursor: "pointer", color: "#21b360" }}
                >
                  ConfyRooms
                </h2>
              </div>

            <form
              className="border border-dark rounded p-4"
              onSubmit={handleSubmit}
            >
              <h2 className="mb-2">Create Account</h2>
              <div className="mb-3 mt-3">
                <label htmlFor="usernameInput" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  id="usernameInput"
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="emailInput" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  autoComplete="off"
                  id="emailInput"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="numberInput" className="form-label">
                  Contact Number{" "}
                </label>
                <input
                  type="number"
                  autoComplete="off"
                  className="form-control"
                  id="numberInput"
                  value={userData.number}
                  onChange={(e) =>
                    setUserData({ ...userData, number: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Set password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-wrap justify-content-start row">
                <div className=" col-lg-12">
                  <button type="submit" className="btn w-100 btn-primary">
                    Create
                  </button>
                </div>
              </div>
              <div>
                <div className="flex my-1 flex-wrap flex-row">
                  <p className="text-center" style={{ fontSize: "0.7rem" }}>
                    Allready have an account?{" "}
                    <a href="" className="fw-bold" onClick={handleClick}>
                      Log-in
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>

          <div
            className="goBack container-fluid d-flex justify-content-center
              align-items-center"
          >
            <Link to="/">
              <p
                className=" text text-sm-start fw-normal"
                style={{ cursor: "pointer", color: "Red" }}
              >
                Go Back
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Listform;
