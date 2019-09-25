import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { USER_LOGOUT } from "../actions/actions";

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersName: "",
      profileCreated: false,
      firstName: ""
    };
    this.logout = this.logout.bind(this);
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

  logout() {
    this.props.userLogout();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <button
          style={{ height: "100px", width: "100px" }}
          onClick={this.logout}
        />
        <p>How do they know i exist</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch({ type: USER_LOGOUT })
  };
};

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    token: state.authReducer.token
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserHome)
);
