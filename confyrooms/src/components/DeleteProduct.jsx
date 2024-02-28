import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const DeleteProduct = () => {

  const params = useParams().id;

  const handleSubmit = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/delete/${params}`
      );
      console.log(res);

      if (res.data.success) {
        console.log("Product Deleted Successfully");
      }
      // Redirect or perform any other action after successful deletion
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <div className="modalContainer flex-wrap flex-column align-items-center justify-content-center d-flex">
        <form
          className="border border-dark rounded px-4 mb-5"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission
            handleSubmit();
          }}
        >
          <div className="d-flex flex-wrap flex-column ">
            <h5 htmlFor="exampleFormControlInput1" className="my-4 form-label">
              <span className="text-dark fw-semibold">
                Do you want to Delete this Property?
              </span>{" "}
            </h5>

            <div>
              <Link to="/admin">
                <button type="submit" className="btn btn-sm btn-danger my-3">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteProduct;
