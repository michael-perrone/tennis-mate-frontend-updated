import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import axios from "axios";
import TennisClub from "../TennisClub/TennisClub";
import AdminProfileCreate from "./AdminProfileCreate/AdminProfileCreate";
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
        if (response.data.profileCreated === false) {
          this.props.history.push(`/admin/`);
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.status);
      });
  }

  render() {
    console.log();
    return (
      <div>
        <AdminNav />
        {this.state.adminProfileCreated === false && <AdminProfileCreate />}
        {this.state.adminProfileCreated === true ||
          (this.state.profileSkipped === true && <TennisClub />)}
      </div>
    );
  }
}

export default AdminHome;
