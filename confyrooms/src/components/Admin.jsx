import React, { useEffect, useState } from "react";
import AdminNav from "./Nav2";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Admin() {
  const user = useSelector((state) => state.user.user);
  console.log("Admin User", user);
  const userProducts = user.products;
  console.log("User Products", userProducts);
  const userEmail = user && user.user ? user.user.email : "";
  console.log("User Email", userEmail);
  // const localUser = JSON.parse(localStorage.getItem("user"));
  // console.log(localUser);

  // const handleDelete = async (productIndex) => {
  //   try {
  //     const res = await axios.delete(
  //       `http://localhost:3000/api/delete/${productIndex}`,
  //       {
  //         userId: localUser?._id,
  //       }
  //     );
  //     if (res.data.success) {
  //       console.log("Product deleted successfully");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/delete/${productId}`,
        {
          data: { userId: user?._id }, // Send userId in the request body
        }
      );

      if (res.data.success) {
        console.log("Product deleted successfully");
        toast.success("successfully deleted product!");

        // Optionally, update your local state or trigger a re-fetch of user data
      } else {
        console.log("Failed to delete product");
      }
    } catch (error) {
      console.log("Error deleting product:", error);
      toast.error(error);
    }
  };

  return (
    <div>
      <AdminNav />
      <Toaster richColors position="bottom-center" />
      <div className="main-container mt-5 d-flex align-items-center justify-content-center flex-column">
        <h1
          className="text-center mt-5 fw-semi-bold"
          style={{ color: "#0e385d" }}
        >
          Your Properties
        </h1>
        {!userProducts ? (
          <>
            <h2 className="mt-5 text-dark">No Property Found!</h2>
          </>
        ) : (
          <>
            <div className="userProducts mt-4 container flex-wrap d-flex justify-content-center align-items-center row">
              {userProducts.map((item) => {
                return (
                  <div className="col-md-4 my-3">
                    <div
                      className="card"
                      key={item._id}
                      style={{ width: "18rem" }}
                    >
                      <img
                        src={item.imageUrl}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5>
                          <b>{item.category.toUpperCase()}</b>
                        </h5>
                        <p className="card-title">
                          Rent: <b>{item.price}</b>
                          <span className=" ms-2">
                            <Link to={`/update/${item._id}`}>
                              <button
                                className="text-danger"
                                style={{
                                  border: "none",
                                  backgroundColor: "#fff",
                                }}
                              >
                                Edit
                              </button>
                            </Link>
                          </span>
                        </p>

                        <p className="card-text">{item.description}</p>
                        <p className="card-text">
                          Location: <b>{item.location.toUpperCase()}</b>{" "}
                        </p>
                        <div
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            const productIndex = userProducts.findIndex(
                              (i) => i._id === item._id
                            );
                            if (productIndex !== -1) {
                              handleDelete(productIndex);
                            } else {
                              console.log("Product not found");
                            }
                          }}
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Admin;
