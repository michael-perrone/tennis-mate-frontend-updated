import React from "react";
import axios from "axios";
import CreateProfilePage from "./CreateProfilePage/CreateProfilePage";

class UserProfile extends React.Component {
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
          firstName: response.data.firstName,
          profileCreated: response.data.profileCreated
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.profileCreated === false && (
          <CreateProfilePage name={this.state.firstName} />
        )}
      </div>
    );
  }
}

export default UserProfile;
