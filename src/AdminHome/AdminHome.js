import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import TennisClub from "../TennisClub/TennisClub";
import AdminProfileCreate from "./AdminProfileCreate/AdminProfileCreate";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      willBeBack: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <AdminNav />
        <AdminProfileCreate />
        <TennisClub />
      </div>
    );
  }
}

export default AdminHome;
