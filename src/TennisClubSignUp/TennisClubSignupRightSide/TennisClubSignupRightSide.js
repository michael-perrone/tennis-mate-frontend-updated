import React from "react";
import styles from "./TennisClubSignupRightSide.module.css";
import AdminForm from "./AdminForm/AdminForm";

class TennisClubSignupRightSide extends React.Component {
  render() {
    return (
      <div id={styles.containerRight}>
        <AdminForm getAdminInfo={this.props.getAdminInfo} />
      </div>
    );
  }
}

export default TennisClubSignupRightSide;
