import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import axios from "axios";
import TennisClub from "../TennisClub/TennisClub";

import jwt_decode from "jwt-decode";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminProfileCreated: "",
      adminToken: ""
    };
  }

  componentDidMount() {
    const adminToken = localStorage.getItem("adminToken");
    const decodedAdmin = jwt_decode(adminToken);
    this.setState({ adminToken: decodedAdmin });
    console.log(adminToken);
    axios
      .get("http://localhost:8080/api/clubprofile/myclub", {
        headers: { "x-auth-token": adminToken }
      })
      .then(response => {
        console.log(response);
        this.setState({ adminProfileCreated: response.data.profileCreated });
        if (response.data.profileCreated === false) {
          this.props.history.push(
            `/admin/${decodedAdmin.admin.id}/createeditprofile`
          );
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.status);
      });
  }

  render() {
    console.log(this.state.adminProfileCreated);
    return (
      <div>
        <AdminNav />
        {this.state.adminProfileCreated === true && <TennisClub />}
      </div>
    );
  }
}

export default AdminHome;
