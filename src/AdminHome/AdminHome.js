import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import axios from "axios";
import TennisClub from "../TennisClub/TennisClub";
import AdminProfileCreate from "./AdminProfileCreate/AdminProfileCreate";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminProfileCreated: ""
    };
  }

  componentDidMount() {
    const adminToken = localStorage.getItem("adminToken");
    console.log(adminToken);
    axios
      .get("http://localhost:8080/api/clubprofile/myclub", {
        headers: { "x-auth-token": adminToken }
      })
      .then(response => {
        this.setState({ adminProfileCreated: response.data.profileCreated });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
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
