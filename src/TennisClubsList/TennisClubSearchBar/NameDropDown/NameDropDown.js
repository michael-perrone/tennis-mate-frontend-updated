import React from "react";
import decoder from "jwt-decode";
import SmallLoginForm from "./SmallLoginForm/SmallLoginForm";
import DropDown from "./DropDown/DropDown";
import { withRouter } from "react-router-dom";

class NameDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: "",
      instructorToken: "",
      adminToken: "",
      notLoggedIn: false
    };
    this.logout = this.logout.bind(this);
    this.didLogIn = this.didLogIn.bind(this);
  }

  didLogIn() {
    this.setState({ notLoggedIn: false });
    if (localStorage.getItem("token")) {
      this.setState({ userToken: decoder(localStorage.getItem("token")) });
    } else if (localStorage.getItem("instructorToken")) {
      this.setState({
        instructorToken: decoder(localStorage.getItem("instructorToken"))
      });
    } else if (localStorage.getItem("adminToken")) {
      this.setState({
        adminToken: decoder(localStorage.getItem("adminToken"))
      });
    }
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ userToken: decoder(localStorage.getItem("token")) });
    } else if (localStorage.getItem("instructorToken")) {
      this.setState({
        instructorToken: decoder(localStorage.getItem("instructorToken"))
      });
    } else if (localStorage.getItem("adminToken")) {
      this.setState({
        adminToken: decoder(localStorage.getItem("adminToken"))
      });
    } else {
      this.setState({ notLoggedIn: true });
    }
  }

  logout() {
    if (this.state.userToken) {
      localStorage.removeItem("token");
    }
    if (this.state.adminToken !== "") {
      localStorage.removeItem("adminToken");
    }
    if (this.state.instructorToken) {
      localStorage.removeItem("instructorToken");
    }
    this.setState({ notLoggedIn: true });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.notLoggedIn && <SmallLoginForm didLogIn={this.didLogIn} />}
        {!this.state.notLoggedIn && this.state.userToken !== "" && (
          <DropDown
            logout={this.logout}
            goToRoute={`/user/${this.state.userToken.user.id}/createeditprofile`}
          />
        )}
        {!this.state.notLoggedIn && this.state.instructorToken !== "" && (
          <DropDown
            logout={this.logout}
            goToRoute={`/instructor/${this.state.instructorToken.instructor.id}/createeditprofile`}
          />
        )}
        {!this.state.notLoggedIn && this.state.adminToken !== "" && (
          <DropDown
            logout={this.logout}
            goToRoute={`/admin/${this.state.adminToken.admin.id}/createeditprofile`}
          />
        )}
      </div>
    );
  }
}

export default withRouter(NameDropDown);
