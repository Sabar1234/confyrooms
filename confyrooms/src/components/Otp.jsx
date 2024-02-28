import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Toaster, toast } from "sonner";
import {
  CLEAR_TOAST_MESSAGE,
  VERIFY_OTP_FAILURE,
  verifyOtp,
} from "../redux/actions/user";

function Otp() {
  const [otp, setOtp] = useState("");
  const isLoading = useSelector((state) => state.user.isLoading);
  const success = useSelector((state) => state.user.success);
  console.log(success);
  const error = useSelector((state) => state.user.error);
  console.log(error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOtp(otp, navigate));
  };

  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch({ type: CLEAR_TOAST_MESSAGE });
      dispatch({ type: VERIFY_OTP_FAILURE, payload: "" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_TOAST_MESSAGE });
      dispatch({ type: VERIFY_OTP_FAILURE, payload: "" });
    }
  }, [success, error]);

  return (
    <div>
      <Toaster richColors position="bottom-center" />
      {isLoading ? (
        <>
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div>
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
                className="border border-dark rounded p-4 mb-5"
                onSubmit={handleSubmit}
              >
                <h2 className="mb-2 text-center">Enter OTP</h2>

                <div className="mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Please enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap justify-content-start row">
                  <div className=" col-lg-12">
                    <button type="submit" className="btn w-100 btn-primary">
                      Continue{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Otp;
