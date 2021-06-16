import React, { useState, useEffect } from "react";
import isEmail from "validator/lib/isEmail";

import dashboardImg from "./assets/illustration-dashboard.png";

function App() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  
  useEffect(() => {
    isEmail(email)? setValidEmail(true) : setValidEmail(false);
  }, [email])

  // const validateEmail = () => {
  //   console.log(email,'1')
  //   isEmail(email) ? setValidEmail(true) : setValidEmail(false)
  // }

  return (
    <div className="container customContainerStyle">
      <div className="row">
        <div className="col-12 text-center heading1">
          <h1 className="text-uppercase mainHeading">
            Ping<span className="dotInHeading">.</span>
          </h1>
        </div>
        <div className="col-12 text-center heading2">
          <div>
            <h3>
              <span className="text1">We Are Lunching</span>{" "}
              <strong>soon!</strong>
            </h3>
          </div>
          <div>
            <p className="text2">Subscribe and get noticed</p>
          </div>
        </div>
      </div>
      <div className="row inputRow">
        <div className="col-sm-12 offset-md-1 col-md-6 inputBox">
          <div className="form-group">
            <input
              type="email"
              className={`form-control ${!validEmail ? "invalidEmailStyle": ""}`}
              aria-describedby="emailHelp"
              placeholder={`${validEmail ? "Your Email Address..." : "Please enter correct email address"}`}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {!validEmail && <small className="form-text text-muted">please enter valid email address</small>}
          </div>
        </div>
        <div className="col-sm-12 col-md-5 notifyBtn">
          <button type="submit" className="btn btn-primary" disabled={!validEmail}>
            Notify Me
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <img className="dashboardImgStyle" src={dashboardImg} alt="bg" />
        </div>
      </div>
      <div className="row socialMediaIconRow">
        <div className="col-12 d-flex justify-content-center socialMediaIcons">
          <div className="facebookIcon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="twitterIcon">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="instagramIcon">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
