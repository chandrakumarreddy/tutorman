import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

export class ProfileList extends PureComponent {
  constructor() {
    super();
    this.state = {
      trainerList: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users`).then(res => {
      const persons = res.data;
      this.setState({ trainerList: persons });
    });
  }

  deleteTrainer(id) {
    axios
      .delete(`http://localhost:3000/delregister/${id}`)
      .then(res => {
        axios.get(`http://localhost:3000/users`).then(res => {
          const persons = res.data;
          this.setState({ trainerList: persons });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.trainerList.map(list => (
          <div className="card card_block" key={list.id}>
            <header className="card-header header_block">
              <Link to={`pdf/${list._id}`}>
                <p className="card-header-title header_title_block">{list.name}</p>
              </Link>
              <button
                className="header_edit header_delete"
                onClick={this.deleteTrainer.bind(this, list._id)}
              >
                &#128465;
              </button>
              <Link to={`update/${list._id}`} className="header_edit edit">
                &#x270E;
              </Link>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="columns is-mobile">
                  <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                    <img
                      src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2578170.jpg"
                      alt=""
                      className="image_profileList"
                    />
                  </div>
                  <div className="column">
                    <span><b>Qualification:</b> {list._id}</span>
                    <br />
                    <span><b>Experience:</b> {list.experience}</span>
                    <br />
                    <span><b>Mail-ID:</b> {list.email}</span>
                    <br />
                    <span><b>Designation:</b> {list.designation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProfileList;
