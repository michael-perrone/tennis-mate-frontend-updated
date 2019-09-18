import React from "react";
import decoder from "jwt-decode";
import SmallLoginForm from "./SmallLoginForm/SmallLoginForm";
import UserNameDropDown from "./UserNameDropDown/UserNameDropDown";
import AdminDropDown from "./AdminDropDown/AdminDropDown";
import InstructorDropDown from "./InstructorDropDown/InstructorDropDown";

class NameDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: "",
      instructorToken: "",
      adminToken: "",
      notLoggedIn: false
    };
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
  render() {
    return (
      <div>
        {this.state.notLoggedIn && <SmallLoginForm />}
        {!this.state.notLoggedIn && this.state.userToken !== "" && (
          <UserNameDropDown />
        )}
        {!this.state.notLoggedIn && this.state.instructorToken !== "" && (
          <InstructorDropDown />
        )}
        {!this.state.notLoggedIn && this.state.adminToken !== "" && (
          <AdminDropDown />
        )}
      </div>
    );
  }
}

export default NameDropDown;
