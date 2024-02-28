import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, Toaster } from "sonner";
import {
  UPLOAD_PRODUCT_FAILURE,
  CLEAR_TOAST_MESSAGE,
  uploadProduct,
} from "../redux/actions/product";
import { useNavigate } from "react-router";

function AddProduct() {
  const user = useSelector((state) => state.user.user);
  console.log("AddpropertyUser", user);
  const [productData, setProductData] = useState({
    price: "",
    description: "",
    location: "",
    contact: "",
    imageUrl: "",
    category: "",
    landmark: "",
    email: user && user.user ? user.user.email : "",
  });
 console.log("AddProperty-Data",productData)
  const isLoading = useSelector((state) => state.products.isLoading);
  const success = useSelector((state) => state.products.success);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || !user.user || !user.user.name || !user.user.email ) {
      navigate("/login");
    }
  }, [user]);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    if (error) {
      toast.error(error);
      dispatch({ type: UPLOAD_PRODUCT_FAILURE, payload: "" });
    }
    dispatch({ type: CLEAR_TOAST_MESSAGE });
  }, [success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadProduct(productData));
  };

  return (
    <div>
      <Toaster richColors position="bottom-left" />

      {isLoading ? (
        <div>
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" formContainer container-fluid"
          style={{ marginTop: "80px" }}
        >
          <h2 className="text-center my-5">Enter Property Details</h2>
          <div className="formContainer d-flex justify-content-center">
            <form
              className="border border-dark rounded p-4 mb-5"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter Rent
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={productData.price}
                  onChange={(e) =>
                    setProductData({ ...productData, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Short Description
                </label>
                <textarea
                  required
                  type="textarea"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={productData.description}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Enter Location
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={productData.location}
                  onChange={(e) =>
                    setProductData({ ...productData, location: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Enter landmark
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={productData.landmark}
                  onChange={(e) =>
                    setProductData({ ...productData, landmark: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Contact Number
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={productData.contact}
                  onChange={(e) =>
                    setProductData({ ...productData, contact: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Image URL{" "}
                </label>
                <input
                  required
                  type="file"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={productData.imageUrl}
                  onChange={(e) =>
                    setProductData({ ...productData, imageUrl: e.target.value })
                  }
                />
              </div>

              {/* <input type="email" value={productData.email} readOnly /> */}

              <div className="mb-3">
                <label for="category">Choose Category:</label>
              </div>

              <div className="mb-3 mx-auto">
                <select
                  class="form-select"
                  aria-label="Default select example "
                  value={productData.category}
                  onChange={(e) =>
                    setProductData({ ...productData, category: e.target.value })
                  }
                >
                  <option value="">Choose</option>
                  <option value="Flat">Flat</option>
                  <option value="Office">Office</option>
                  <option value="House">House</option>
                  <option value="Shop">Shop</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
