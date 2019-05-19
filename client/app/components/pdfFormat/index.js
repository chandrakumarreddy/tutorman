import React, { PureComponent } from "react";
import "./index.css";

export class UpdateProfile extends PureComponent {
  render() {
    return (
      <div className="pdf_bottom">
        <div className="card">
          <div className="card-content">
            <div className="content" />
            <div className="columns is-mobile">
              <div className="column">
                <div className="editors row-split">
                  <div className="column-split">
                    <img
                      src="https://www.quickensoftwaresupport.com/wp-content/uploads/2018/02/client-manager.jpg"
                      alt=""
                      className="image_pdf"
                    />
                  </div>
                  <div className="column-split1">
                    <span className="main-sub-title">Name: Vinay Bheema</span>
                    <br />
                    <span className="main-sub-title">
                      Mobile No: +91 - 1234567890
                    </span>
                    <br />
                    <span className="main-sub-title">Desgination: SA</span>
                    <br />
                    <span className="main-sub-title">
                      Email: vinay.bheema@gmail.com
                    </span>
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
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Download
            </a>
            <a href="#" className="card-footer-item">
              Chat
            </a>
            <a href="#" className="card-footer-item">
              forward
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default UpdateProfile;
