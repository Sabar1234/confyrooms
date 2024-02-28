import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Nav2.css";
import { storedUser } from "../redux/actions/user";

function AdminNav() {
  const user = useSelector((state) => state.user.user);
  // console.log("user",user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storedUser());
  }, [dispatch]);
  return (
    <div>
      <nav className="navbar  fixed-top bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3 className="font-weight-bold">
              <span className="fw-bold text-success">
                Dashboard{" "}
              </span>
            </h3>
          </a>{" "}
          <form className="d-flex" role="search">
            <div className="btn-group">
              <button className="btn btn-success btn-sm" type="button">
                <i
                  class="fa-solid fa-user mx-1"
                  style={{ fontSize: "12px" }}
                ></i>
                {user && user.name ? <>{user.name}</> : null}
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;
