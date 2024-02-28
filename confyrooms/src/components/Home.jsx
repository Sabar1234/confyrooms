import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/product";

function Home() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  // console.log(products);
  const user = useSelector((state) => state.user.user);
  console.log("homeuser", user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function handleClick() {
    dispatch(navigate("/buyNow"));
  }
  function handleClickSell() {
    dispatch(navigate("/addProperty"));
  }

  return (
    <>
      {" "}
      <div className="mainParent">
        <div className="section conatainer flex-wrap d-flex justify-content-center flex column align-itmes-center">
          <div className="imgText container mx-3 flex-wrap d-flex flex-column justify-content-center">
            <div className="textSection mt-5 d-flex justify-content-center align-items-center flex-column">
              <h5 className="firstheading text-light fw-light mt-5 mb-4">
                Good Service is our passion
              </h5>

              <h1 className=" heading text-lg text-center text-light">
                Let us help you make the move.
              </h1>
              <p className="para text-light text-center my-2">
                No matter what the weather, no matter what the situation we are
                in, if we have the right perspective <br /> in life, life will
                always be beautiful!
              </p>

              <div className="d-flex flex-wrap flex-row my-5 justify-content-center">
                <button
                  className="secBtn mx-2 btn btn-lg fw-bold"
                  onClick={handleClick}
                >
                  Buy now
                </button>
                <button
                  className="secBtn mx-2 btn btn-lg fw-bold"
                  onClick={handleClickSell}
                >
                  Rent now
                </button>
              </div>
            </div>

            {/* <div className="line d-flex mx-auto my-2 mt-2"></div> */}
          </div>
        </div>

        {/* section three----------- */}
        <div className="secThree d-flex py-4 flex-column justify-content-center flex-wrap container-fluid">
          <div className="upperText d-flex flex-column align-items-center justify-content-center flex-wrap">
            <h1 className="headingThree  text-center mt-5 fw-bolder">
              Rooms & Apartments
            </h1>
            <p className="para2 fw-bold text-center">
              FIND YOUR ROOMS, FOR YOUR ABAILITY
            </p>
          </div>

          {/* fetched products */}

          <div className="container parent d-flex flex-wrap flex-column justify-content-center align-items-center">
            <div className="row">
              {products.map((item) => {
                return (
                  <div className="col-md-4  my-3">
                    {/* card--- */}
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
                        </p>
                        {/* <p className="card-text">{item.description}</p> */}
                        <p className="card-text">
                          Location: <b>{item.location.toUpperCase()}</b>{" "}
                        </p>
                        <Link
                          className="cardBtn btn btn-primary"
                          to={`/details/${item._id}`}
                        >
                          Click to review
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" container-fluid ps-5 parent d-flex flex-wrap flex-column justify-content-center align-items-center ">
            <button className="cardSecBtn text-light fw-bold my-5 btn mx-auto btn-lg ">
              Show more...
            </button>
          </div>
        </div>

        {/* testimonial section------ */}

        <section className="bg-light py-5 py-xl-8">
          <div className="container pt-5">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">
                  Happy Customers
                </h2>
                <p
                  className="display-5 text-bolder text-wrap mb-4 mb-md-5 text-center"
                  style={{ color: "#0e385d" }}
                >
                  We deliver what we promise. See what clients are expressing
                  about us.
                </p>
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
              </div>
            </div>
          </div>
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-md-0 gx-xxl-5">
              <div className="col-12 col-md-4">
                <div className="card border-0 border-bottom border-success shadow-sm">
                  <div className="card-body p-4 p-xxl-5">
                    <div className="py-1">
                      <img
                        className="img-fluid rounded rounded-circle mb-4 border border-5"
                        loading="lazy"
                        src="src/components/Images/testimonial1.png"
                        alt
                        style={{ height: "40px" }}
                      />
                      <div>
                        <div className="bsb-ratings text-warning mb-3" />
                        <p className="bsb-blockquote-icon mb-4">
                          Nam ultricies, ex lacinia dapibus faucibus, sapien
                          ipsum euismod massa, at aliquet erat turpis quis diam.
                          Class aptent taciti sociosqu ad litora torquent per
                          conubia nostra, per inceptos himenaeos.
                        </p>
                        <h4 className="mb-2">John Cena</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card border-0 border-bottom border-success shadow-sm">
                  <div className="card-body p-4 p-xxl-5">
                    <div className="py-1">
                      <img
                        className="img-fluid rounded rounded-circle mb-4 border border-5"
                        loading="lazy"
                        src="src/components/Images/testimonial1.png"
                        alt
                        style={{ height: "40px" }}
                      />
                      <div>
                        <div className="bsb-ratings text-warning mb-3" />
                        <p className="bsb-blockquote-icon mb-4">
                          Nam ultricies, ex lacinia dapibus faucibus, sapien
                          ipsum euismod massa, at aliquet erat turpis quis diam.
                          Class aptent taciti sociosqu ad litora torquent per
                          conubia nostra, per inceptos himenaeos.
                        </p>
                        <h4 className="mb-2">John Cena</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card border-0 border-bottom border-success shadow-sm">
                  <div className="card-body p-4 p-xxl-5">
                    <div className="py-1">
                      <img
                        className="img-fluid rounded rounded-circle mb-4 border border-5"
                        loading="lazy"
                        src="src/components/Images/testimonial1.png"
                        alt
                        style={{ height: "40px" }}
                      />
                      <div>
                        <div className="bsb-ratings text-warning mb-3" />
                        <p className="bsb-blockquote-icon mb-4">
                          Nam ultricies, ex lacinia dapibus faucibus, sapien
                          ipsum euismod massa, at aliquet erat turpis quis diam.
                          Class aptent taciti sociosqu ad litora torquent per
                          conubia nostra, per inceptos himenaeos.
                        </p>
                        <h4 className="mb-2">John Cena</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
