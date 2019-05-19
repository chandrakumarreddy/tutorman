import React, { PureComponent } from "react";
import axios from "axios";
import "./index.css";

export class UpdateProfile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      persons: {
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
      }
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange(event) {
    this.setState({
      persons: Object.assign({}, this.state.persons, {
        [event.target.name]: event.target.value
      })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { persons } = this.state;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
                    name="name"
                    value={this.state.persons.name}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    name="phone"
                    value={this.state.persons.phone}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    name="designation"
                    value={this.state.persons.designation}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    name="email"
                    value={this.state.persons.email}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    // value={this.state.persons.dob}
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
                    name="deleveries"
                    value={this.state.persons.deleveries}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    // value={this.state.persons.qualification}
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
                    name="age"
                    value={this.state.persons.age}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    name="experience"
                    value={this.state.persons.experience}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    // value={this.state.persons.domain}
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
                    name="certification"
                    value={this.state.persons.certification}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>

              <div className="editors row-split">
                <div className="column-split">
                  <span className="sub-title">technologies</span>
                </div>
                <div className="column-split1">
                  <input
                    type="text"
                    name="technologies"
                    value={this.state.persons.technologies}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    name="location"
                    value={this.state.persons.location}
                    className="text-editors"
                    onChange={this.handleChange.bind(this)}
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
                    // value={this.state.persons.industry}
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
      </form>
    );
  }
}

export default UpdateProfile;
