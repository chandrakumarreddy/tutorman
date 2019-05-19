import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { register } from "../../actions";
import "./index.css";

export class Register extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      designation: "",
      email: "",
      domain: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .register(this.state)
      .then(() => this.props.history.push("/"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="registerWrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="card card_register">
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
                        value={this.state.name}
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
                        value={this.state.email}
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
                        value={this.state.phone}
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
                        value={this.state.domain}
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
                        value={this.state.designation}
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

export default connect(
  null,
  dispatch => ({
    register(user) {
      return dispatch(register(user));
    }
  })
)(Register);
