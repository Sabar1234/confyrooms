import React, { useEffect, useState } from "react";
import "./PriceUpdateModal.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../redux/actions/product";
import { Link, useParams } from "react-router-dom";

const PriceUpdateModal = () => {
  const [price, setPrice] = useState("");
  console.log("UPDATEDPRICE", price);
  const params = useParams().id;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    e.preventDefault();

    useEffect(() => {
      const updated = async () => {
        try {
          const productDetail = (
            await axios.post(
              `http://localhost:3000/api/update/` + price,params)
          ).data.product;
          console.log(productDetail);
          setProduct(productDetail);
        } catch (error) {
          console.log(error);
        }
      };
      updated();
    }, []);
  };
  return (
    <>
      <div className="parentContainer d-flex justify-content-center align-items-center "></div>
      <div className="modalContainer flex-wrap flex-column align-items-center justify-content-center d-flex">
        <form
          className="border border-dark rounded px-4 mb-5"
          onSubmit={() => {
            handleSubmit(itemId);
          }}
        >
          <div className="d-flex flex-wrap flex-column ">
            <h5
              htmlFor="exampleFormControlInput1 "
              className=" my-4 form-label"
            >
              <span className="text-dark fw-semibold">Enter New Price</span>{" "}
            </h5>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div>
              <Link to="/admin">
                <button
                  type="submit"
                  class="btn btn-sm btn-danger my-3 "
                  onClick={() => dispatch(updateProduct(price, itemId))}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PriceUpdateModal;
