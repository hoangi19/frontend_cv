import * as React from "react";
import { Info } from "./Info";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function Homepage()
{
  React.useEffect(() => {
    document.title = "Home"
  }, []);
  
  return (
    <React.Fragment>
      <div style={{margin: '0 4rem'}}>
        <Header />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="avatar col-lg-4 col-md-4 d-inline">
            <img className="position-absolute" src="./images/avatar.png" alt="avatar" />
          </div>
          <div className="col-lg-5 col-md-5 d-inline">
            <Info />
            <div className="contact">
              <div className="row ml-0 mt-3">
                <a href="/contact"><b>Contact me →</b></a>
              </div>
            </div>
          </div>
        </div>
        <div className="social">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;