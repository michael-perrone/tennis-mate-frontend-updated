import React from "react";
import axios from "axios";

class InstructorHome extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      profileCreated: ""
    };
  }

  componentDidMount() {
    this._isMounted = true;

    const instructorToken = localStorage.getItem("instructorToken");
    axios
      .get("http://localhost:8080/api/instructorProfile/myprofile", {
        headers: { "x-auth-token": instructorToken }
      })
      .then(response => {
        if (this._isMounted) {
          this.setState({ profileCreated: response.data.profileCreated });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log(this.state.profileCreated);
    return (
      <div>
        <p>Hi </p>
      </div>
    );
  }
}

export default InstructorHome;
