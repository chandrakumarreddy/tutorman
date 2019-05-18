import React, { PureComponent } from "react";
import axios from "axios";
import "./index.css";

export class Register extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      persons: {
        name: "",
        phone: "",
        designation: "",
        email: "",
        domain: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

    axios
      .post(`http://localhost:3000/register`, persons)
      .then(response => {
        return response.status(200);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="registerWrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="content card-custom-top">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={this.handleChange.bind(this)}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Email</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange.bind(this)}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Phone</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        onChange={this.handleChange.bind(this)}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Department</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Department"
                        name="domain"
                        onChange={this.handleChange.bind(this)}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Designation</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Designation"
                        name="designation"
                        onChange={this.handleChange.bind(this)}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="is-horizontal is-horizantal-custom">
                <button type="submit" className="button is-link submit-email">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
