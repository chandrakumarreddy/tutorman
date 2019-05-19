import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../../actions";
import "./index.css";

export class ProfileList extends PureComponent {
  constructor(props) {
    super(props);

    this.renderTrainers = this.renderTrainers.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  renderTrainers() {
    if (this.props.users.length > 0) {
      return this.props.users.map(list => (
        <div className="card card_block" key={list._id}>
          <header className="card-header header_block">
            <Link to={`pdf/${list._id}`}>
              <p className="card-header-title header_title_block">
                {list.name}
              </p>
            </Link>
            <button className="header_edit header_delete">&#128465;</button>
            <Link to={`update/${list._id}`} className="header_edit edit">
              &#x270E;
            </Link>
          </header>
          <div className="card-content">
            <div className="content">
              <div className="columns is-mobile">
                <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                  <img
                    src={`https://pure-wave-75808.herokuapp.com/${list.photo}`}
                    alt={list.photo}
                    className="image_profileList"
                  />
                </div>
                <div className="column">
                  <span>
                    <b>Qualification:</b> {list._id}
                  </span>
                  <br />
                  <span>
                    <b>Experience:</b> {list.experience}
                  </span>
                  <br />
                  <span>
                    <b>Mail-ID:</b> {list.email}
                  </span>
                  <br />
                  <span>
                    <b>Designation:</b> {list.designation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    }
    return "Loading";
  }

  render() {
    console.log(this.props.users[0]);
    return <div>{this.renderTrainers()}</div>;
  }
}

export default connect(
  ({ users }) => ({ users: users.users }),
  dispatch => ({
    getUsers() {
      return dispatch(getUsers());
    }
  })
)(ProfileList);
