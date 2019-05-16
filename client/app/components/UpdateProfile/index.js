import React, { PureComponent } from "react";
import "./index.css";

export class UpdateProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      designation: "",
      email: "",
      certification: "",
      dob: "",
      address: "",
      qualification: "",
      age: "",
      experience: "",
      domain: "",
      skills: "",
      location: "",
      industry: ""
    };
  }
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
                <input
                  type="text"
                  value={this.state.name}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Mobile No</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.phone}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Desgination</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.designation}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Email</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.email}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">DOB</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.dob}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Address</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.address}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Qualification</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.qualification}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Age</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.age}
                  className="text-editors"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Experience</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.experience}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Domain</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.domain}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Certifications</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.certification}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Key Skills</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.skills}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Desired Location</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.location}
                  className="text-editors"
                />
              </div>
            </div>
            <div className="editors row-split">
              <div className="column-split">
                <span className="sub-title">Desired Industry</span>
              </div>
              <div className="column-split1">
                <input
                  type="text"
                  value={this.state.industry}
                  className="text-editors"
                />
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
