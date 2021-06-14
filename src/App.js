import dashboardImg from "./assets/illustration-dashboard.png";

function App() {
  return (
    <div className="container customContainerStyle">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text-uppercase">Ping</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <div>
            <h3 className="text-uppercase">
              We Are Lunching <strong>Soon!</strong>
            </h3>
          </div>
          <div>
            <p className="text-uppercase">Subscribe and get noticed</p>
          </div>
        </div>
      </div>
      <div className="row">
        
          <div className="col-sm-12 col-md-6 inputBox">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Your Email Address..."
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 notifyBtn">
            <button type="submit" class="btn btn-primary">
              Notify Me
            </button>
          </div>
        
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <img className="dashboardImgStyle" src={dashboardImg} alt="bg" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center socialMediaIcons">
          <div className="facebookIcon">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className="twitterIcon">
            <i class="fab fa-twitter"></i>
          </div>
          <div className="instagramIcon">
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
