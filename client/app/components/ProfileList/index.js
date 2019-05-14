import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export class ProfileList extends PureComponent {
  constructor() {
    super();
    this.state = {
      trainerList: []
    };
  }

  componentDidMount() {
    this.setState({
      trainerList: [
        {
          name: "Vinay Bheema",
          qualification: "Btech MA LLB",
          exp: "2",
          mail: "abc@abc.com"
        },
        {
          name: "Surendra G",
          qualification: "Doctor",
          exp: "2",
          mail: "def@def.com"
        }
      ]
    });
  }

  render() {
    return (
      <div>
        {this.state.trainerList.map(list => (
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">{list.name}</p>
              <Link to={`update/${list.name}`} className="header_edit edit">
                &#x270E;
              </Link>
              <Link to="update" className="header_edit header_delete">
                &#128465;
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
                    <span>Qualification: {list.qualification}</span>
                    <br />
                    <span>Experience: {list.exp}</span>
                    <br />
                    <span>Mail-ID: {list.mail}</span>
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
