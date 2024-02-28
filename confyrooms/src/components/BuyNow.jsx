import React, { useEffect, useState } from "react";
import "./BuyNow.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router";

function BuyNow() {
  const user = useSelector((state) => state.user.user);
  console.log("BuyNOw", user);
  const products = JSON.parse(localStorage.getItem("products"));
  console.log("BuyNowProducts", products);
  const [category, setCategory] = useState("");
  const [newArr, setNewArr] = useState(products); //array for category search//

  useEffect(() => {
    if (!user || !user.user || !user.user.name) {
      navigate("/login");
    }
  }, [user]);
  const navigate = useNavigate();

  //function for category search//
  function categorySearch(selectedCategory) {
    const searchedCategory = products.filter((product) =>
      product.category.includes(selectedCategory)
    );
    const newArray = searchedCategory;
    setNewArr(newArray);
  }


  return (
    <div>
      <div className="parent">
        <h1
          className="text text-center fw-bolder my-4"
          style={{ fontFamily: "serif", color: "#0e385d" }}
        >
          Buy a Property
        </h1>
        <hr className="solid mt-4"></hr>
        <div className="sec mx-auto container-fluid d-flex flex-wrap justify-content-center align-items-center row">
          <nav className=" nav2 navbar bg-primary navbar-expand-lg ">
            <div className="container-fluid">
              <a
                className="navbar-brand fs-3 display-1 fw-bold text-decoration-underline"
                href="#"
                style={{ fontFamily: "serif", color: "#0e385d" }}
              >
                Confy Rooms
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                  <li className=" nav-item dropdown">
                    <a
                      className="buynowlinks fw-bold dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pricing
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          From Low to High
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          From High to Low
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form
                  className="d-flex"
                  role="search "
                  onClick={() => {
                    categorySearch(category);
                  }}
                >
                  <div className="input-group me-2">
                    <select
                      className="custom-select px-3"
                      id="inputGroupSelect02"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option selected value="">
                        All Properties
                      </option>
                      <option>Flat</option>
                      <option>Office</option>
                      <option>House</option>
                      <option>Shop</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <hr class="solid mt-4"></hr>

        {/* pics-container 1----------- */}
        <div className="picsContainer mx-auto my-5 container d-flex flex-wrap justify-content-center align-items-center row ">
          {newArr.map((item) => {
            return (
              <div className="col-md-4  my-3">
                {/* card--- */}
                <div className="card" key={item._id} style={{ width: "18rem" }}>
                  <img src={item.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5>
                      <b>{item.category.toUpperCase()}</b>
                    </h5>
                    <p className="card-title">
                      Rent: <b>{item.price}</b>
                    </p>
                    {/* <p className="card-text">{item.description}</p> */}
                    <p className="card-text">
                      Location: <b>{item.location.toUpperCase()}</b>{" "}
                    </p>
                    <Link
                      className="cardBtn btn btn-primary"
                      to={`/details/${item._id}`}
                    >
                      Book Now{" "}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
