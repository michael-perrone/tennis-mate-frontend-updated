import React from "react";
import AdminNav from "../AdminNav/AdminNav";

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
        <p>this is the admin home</p>
      </div>
    );
  }
}

export default AdminHome;
