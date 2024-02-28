import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className=" mt-5 ">
        <footer
          className="text-center sticky-bottom text-lg-start text-white"
          style={{ backgroundColor: "#252525" }}
        >
          <div className="container p-4 pb-0">
            <section className>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">FOOTER CONTENT</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae modi cum ipsam ad, illo possimus laborum ut
                    reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur
                    eaque? Reiciendis assumenda iusto sapiente inventore animi?
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <hr className="mb-4" />
            <section className>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button
                  type="button"
                  className="btn btn-outline-light btn-rounded"
                >
                  Sign up!
                </button>
              </p>
            </section>
            <hr className="mb-4" />
            <section className="mb-4 text-center">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-google" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </section>
          </div>
          <div
            className="text-center p-3 bg-secondary"
            style={{ backgroundColor: "dim" }}
          >
            2023 Copyright:
            <a className="text-white" href="/">
              ConfyRooms.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
