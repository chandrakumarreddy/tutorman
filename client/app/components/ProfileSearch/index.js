import React, { PureComponent } from "react";
import ProfileListComp from "../ProfileList";
import "./index.css";

export class ProfileSearch extends PureComponent {
  render() {
    return (
      <div>
        <div className="columns is-mobile profilesearch filter-background">
          <div className="column">
            <input type="text" className="input-margin" placeholder="Name" />
          </div>
          <div className="column ">
            <input
              type="text"
              className="input-margin"
              placeholder="Expereience"
            />
          </div>
          <div className="column">
            <input
              type="text"
              className="input-margin"
              placeholder="Location"
            />
          </div>
          <div className="column">
            <input
              type="text"
              className="input-margin"
              placeholder="Technology"
            />
          </div>
          <div className="column">
            <button className="searchButton">Search</button>
          </div>
        </div>
        <ProfileListComp {...this.props} />
      </div>
    );
  }
}

export default ProfileSearch;
