import React, { PureComponent } from "react";
import "./index.css";

export class UpdateProfile extends PureComponent {
  render() {
    return (
      <div className="updateProfileContainer">
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
                <span className="sub-title">Desgination</span>
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
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Age</span>
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
                <span className="sub-title">Upload Photo</span>
              </div>
              <div className="column-split1">
                <div className="file is-info">
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload" />
                      </span>
                      <span className="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Upload Resume</span>
              </div>
              <div className="column-split1">
                <div className="file is-info">
                  <label className="file-label">
                    <input className="file-input" type="file" name="resume" />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload" />
                      </span>
                      <span className="file-label">Choose files …</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <input
            className="button button-style is-primary"
            type="submit"
            value="Save"
          />
        </div>
      </div>
    );
  }
}

export default UpdateProfile;
