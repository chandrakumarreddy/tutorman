import React, { PureComponent } from "react";
import "./index.css";

export class Admin extends PureComponent {
  render() {
    return (
      <div className="registerWrapper">
        <div className="card">
          <div className="content card-custom-top">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">User Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Name"
                      name="name"
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
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="is-horizontal is-horizantal-custom">
              <button type="submit" className="button is-link submit-email login_btn">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
