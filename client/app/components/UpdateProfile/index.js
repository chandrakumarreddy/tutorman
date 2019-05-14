import React, { PureComponent } from "react";
import "./index.css";

export class UpdateProfile extends PureComponent {
  render() {
    return (
      <div className="container">
        <fieldset>
          <legend className="legend-update-color">UPDATE PROFILE</legend>
          <div className="columns is-mobile">
            <div className="column">
              {/* <div className="editors row-split">
                <div className="column-split">
                  <img
                    src={require("../images/male.png")}
                    alt=""
                    className="edit-image"
                  />
                </div>
                <div className="column-split1">
                <span className="">&#x270E;</span>
                </div>
              </div> */}
              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Name</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
                    className="text-editors"
                  />
                </div>
              </div>
              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Alternate Mobile</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
                    className="text-editors"
                  />
                </div>
              </div>
              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">Experience</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
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
                    value={this.props.history.location.state.lists.name}
                    className="text-editors"
                  />
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
              <div className="editors row-split">
                <div className="column-split2">
                  <input
                    type="submit"
                    className="submit-button"
                    value="Submit"
                  />
                  <input
                    type="submit"
                    className="cancel-button"
                    value="Cancel"
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default UpdateProfile;
