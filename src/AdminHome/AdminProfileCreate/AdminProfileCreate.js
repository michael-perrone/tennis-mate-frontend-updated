import React from "react";

class AdminProfileCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      willBeBack: ""
    };
  }
  render() {
    return (
      <div>
        <p>Would you like to create your profile?</p>
      </div>
    );
  }
}

export default AdminProfileCreate;
