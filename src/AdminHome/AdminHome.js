import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import axios from "axios";
import TennisClub from "../TennisClub/TennisClub";
import { connect } from "react-redux";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminProfileCreated: "",
      adminToken: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/clubprofile/myclub", {
        headers: { "x-auth-token": this.props.adminToken }
      })
      .then(response => {
        console.log(response);
        this.setState({ adminProfileCreated: response.data.profileCreated });
        if (response.data.profileCreated === false) {
          this.props.history.push(
            `/admin/${this.props.admin.admin.id}/createeditprofile`
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

const mapStateToProps = state => {
  return {
    admin: state.authReducer.admin,
    adminToken: state.authReducer.adminToken
  };
};

export default connect(mapStateToProps)(AdminHome);
