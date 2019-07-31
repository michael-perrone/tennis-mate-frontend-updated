import React from "react";
import axios from "axios";
import decoder from "jwt-decode";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: "",
      profileCreated: false
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/userProfile/myprofile", {
        headers: { "x-auth-token": token }
      })
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <p>Hey </p>
      </div>
    );
  }
}

export default UserProfile;
