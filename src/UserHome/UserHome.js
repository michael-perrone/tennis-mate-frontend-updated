import React from "react";
import axios from "axios";

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
        <p>How do they know i exist</p>
      </div>
    );
  }
}

export default UserHome;
