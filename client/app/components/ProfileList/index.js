import React, { PureComponent } from "react";
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
          name: "abc",
          qualification: "abc",
          exp: "2",
          mail: "abc@abc.com"
        },
        {
          name: "def",
          qualification: "def",
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
          <div>
            <fieldset>
              <legend>{list.name}</legend>

              <div
                className="options"
                onClick={() => {
                  this.props.history.push({
                    state: {
                      lists: list
                    },
                    pathname: "/UpdateProfile"
                  });
                }}
              >
                &#x270E;{" "}
              </div>

              <div className="columns is-mobile app">
                <div className="column" />

                <div className="column">
                  <span>{list.qualification}</span>
                  <br />

                  <span>{list.exp}</span>
                  <br />

                  <span>{list.mail}</span>
                  <br />
                </div>

                <div className="column">
                  <span>{list.qualification}</span>
                  <br />

                  <span>{list.exp}</span>
                  <br />

                  <span>{list.mail}</span>
                  <br />
                </div>
              </div>
            </fieldset>
          </div>
        ))}
      </div>
    );
  }
}

export default ProfileList;
