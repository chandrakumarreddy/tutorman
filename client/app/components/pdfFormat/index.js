import React, { PureComponent } from "react";
import "./index.css";

export class UpdateProfile extends PureComponent {
  render() {
    return (
      <div className="container">
        <div class="card">
          <div class="card-content">
            <div class="content" />
            <div className="columns is-mobile">
              <div className="column">
                <div className="editors row-split">
                  <div className="column-split">
                    <img
                      src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2578170.jpg"
                      alt=""
                      className="image_pdf"
                    />
                  </div>
                  <div className="column-split1">
                  <span className="sub-title">Name: Vinay Bheema</span>
                  <br />
                  <span className="sub-title">Mobile No: +91 - 1234567890</span>
                  <br />
                  <span className="sub-title">Desgination: SA</span>
                  <br />
                  <span className="sub-title">Email: vinay.bheema@gmail.com</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">DOB</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">01/01/1990</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Address</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">Nagwara, Bangalore</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Qualification</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">MCA</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Age</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">28</span>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Experience</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">5</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Domain</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">React JS, Front End</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Certifications</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">Certified</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Key Skills</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">Certified</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Desired Location</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">Bangalore</span>
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Desired Industry</span>
                  </div>
                  <div className="column-split1">
                    <span className="value-title">IT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateProfile;
