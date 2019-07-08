import React from "react";
import styles from "./TennisClubSignupRightSide.module.css";
import AdminForm from "./AdminForm/AdminForm";

class TennisClubSignupRightSide extends React.Component {
  state = {
    willTrigger: false
  };
  render() {
    return (
      <div id={styles.containerRight}>
        <AdminForm getAdminInfo={this.props.getAdminInfo} />
        {this.props.adminEntered && <p>dont forget about me</p>}
      </div>
    );
  }
}

export default TennisClubSignupRightSide;
