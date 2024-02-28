import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./SingleProduct.css";

const SingleProduct = () => {
  const [product, setProduct] = useState();

  const params = useParams().id;

  useEffect(() => {
    const fetched = async () => {
      try {
        const productDetail = (
          await axios.get(`http://localhost:3000/api/product/${params}`)
        ).data.product;
        console.log(productDetail);
        setProduct(productDetail);
      } catch (error) {
        console.log(error);
      }
    };
    fetched();
  }, []);

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center mt-3">
        {product ? (
          <>
            <div className="container my-5 singleProductContainer ">
              <div className="row d-flex justify-content-center align-items-center  my-5 mx-auto">
                <div class="col-lg-6 col-md-6 col-xs-12">
                  <div className="singleProductImage">
                    {" "}
                    <img src={product.imageUrl} alt="" className="img-fluid" />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12">
                  <div className="singleProductDetails my-4 ms-5">
                    {" "}
                    <h3 className="my-4 fw-bold">
                      {product.category} For Rent
                    </h3>
                    <h5 className="my-3 text-muted">{product.description}</h5>
                    <h5 className="my-3 text-muted">
                      Landmark: {product.landmark}
                    </h5>
                    <h5 className="my-3 text-muted">
                      Location: {product.location}
                    </h5>
                    <h5 className="my-3 text-muted">Rent: {product.price}</h5>
                    <h5 className="my-3 text-muted">
                      Contact: {product.contact}
                    </h5>
                    <div className="my-4 d-flex flex-wrap">
                      <button
                        className="btn cartBtn px-4 fw-semi-bold"
                        style={{ backgroundColor: "#0e385d ", color: "#fff" }}
                      >
                        Contact Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="warningText mt-5">
              <h2 className="my-5 text-center fw-bold">Product not found</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
