import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import TennisClub from "../TennisClub/TennisClub";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <AdminNav />
        <TennisClub />
      </div>
    );
  }
}

export default AdminHome;
