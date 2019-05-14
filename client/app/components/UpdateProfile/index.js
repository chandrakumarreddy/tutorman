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
                    <span className="sub-title">Name</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Mobile No</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Alternate Mobile</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Email</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">DOB</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Address</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Qualification</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Experience</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Domain</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Certifications</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Key Skills</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Desired Location</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Desired Industry</span>
                  </div>
                  <div className="column-split1">
                    <input type="text" value="" className="text-editors" />
                  </div>
                </div>
                <div className="editors row-split">
                  <div className="column-split">
                    <span className="sub-title">Upload Resume</span>
                  </div>
                  <div className="column-split1">
                    <input type="file" className="text-editors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <button href="#" class="card-footer-item">
              Save
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default UpdateProfile;
