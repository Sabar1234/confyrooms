import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Toaster, toast } from "sonner";
import { loginUser } from "../redux/actions/user";
import { Link } from "react-router-dom";

function Signinform() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const isLoading = useSelector((state) => state.user.isLoading);
  const success = useSelector((state) => state.user.success);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
      alert(success);
    }
  }, [success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData, navigate));
  };
  function handleClick() {
    navigate("/signup");
  }



  return (
    <div>
      <Toaster richColors position="bottom-center" />
      {isLoading ? (
        <>
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container d-flex flex-column align-items-center my-2">
            <div className="logBox mb-3">
              <h2
                className="logo text-decoration-underline"
                style={{ cursor: "pointer", color: "#21b360" }}
              >
                ConfyRooms
              </h2>
            </div>

            <form
              className="border border-dark rounded p-4"
              onSubmit={handleSubmit}
              autoComplete="new-password"
            >
              <h2 className="mb-2"> Log-in</h2>

              <div className="mb-3 mt-3">
                <label htmlFor="emailInput" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  autoComplete="nope"
                  className="form-control"
                  id="emailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter registered email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-3 mt-3">
                <label htmlFor="emailInput" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  autoComplete="off"
                  id="passwordInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter your password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-wrap justify-content-start row">
                <div className=" col-lg-12">
                  <button type="submit" className="btn w-100 btn-primary">
                    Continue{" "}
                  </button>
                </div>
                <div>
                  <div className="flex my-1 flex-wrap flex-row">
                    <p className="text-center" style={{ fontSize: "0.7rem" }}>
                      Not have an account?{" "}
                      <a href="" className="fw-bold" onClick={handleClick}>
                        Sign-up
                      </a>
                    </p>
                  </div>
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
        </>
      )}
    </div>
  );
}

export default Signinform;
