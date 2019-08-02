import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: "",
      profileCreated: false,
      firstName: ""
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/userProfile/myprofile", {
        headers: { "x-auth-token": token }
      })
      .then(response => {
        this.setState({
          firstName: response.data.firstName
        });
      });
  }

  render() {
    return (
      <div>
        <button
          style={{ height: "100px", width: "100px" }}
          onClick={() => {
            localStorage.removeItem("token");
            this.props.history.push("/");
          }}
        />
        <p>How do they know i exist</p>
      </div>
    );
  }
}

export default withRouter(UserHome);
