import React from "react";
import "./layout.css";
import logoImg from "../images/ebookImage.png";
import VPImg from "../images/logo.png";


const Subscribe = () => (
  <div className="container-fluid pozadina">
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <br></br>
          <h3 className="subscribe">
            Subscribe to get our digital transformation<br></br>E-book.<br></br>
            <br></br>
          </h3>
          <div className="subscribeText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum quam libero, ut dignissim <br></br>nisi varius in. Nulla
              pellentesque justo neque, ac aliquam elit imperdiet non.
              Pellentesque porttitor hendrerit diam quis placerat. Fusce vitae
              orci lobortis, pharetra libero at, fringilla ante. Maecenas est
              purus, fermentum vel metus eget, molestie ultrices risus. Aliquam
              sit amet sagittis p
            </p>
          </div>

          <div className="container mt-5">
            <div className="d-flex justify-content-center row">
              <div className="col-md-9">
                <div className="">
                  <div className="d-flex mt-3 mb-3">
                    <div className="input-group mb-5">
                      <div className="input-group-prepend"></div>
                      <input
                        className="form-control email-input"
                        type="text"
                        placeholder="Enter your email to download"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary d-flex align-items-center"
                          type="button"
                        >
                          Get it FREE<i class="fa fa-long-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <br></br>
          <div>
            <img src={logoImg} className="slikaKnjige" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Subscribe;
