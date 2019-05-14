import React, { PureComponent } from "react";
import ProfileListComp from "../ProfileList";
import "./index.css";

export class ProfileSearch extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="columns is-mobile profilesearch filter-background">
          <div className="column">
            <input type="text" className="input-margin" placeholder="a" />
          </div>
          <div className="column ">
            <input type="text" className="input-margin" placeholder="b" />
          </div>
          <div className="column">
            <input type="text" className="input-margin" placeholder="c" />
          </div>
          <div className="column">
            <input type="text" className="input-margin" placeholder="d" />
          </div>
        </div>
        <ProfileListComp {...this.props} />
      </div>
    );
  }
}

export default ProfileSearch;
