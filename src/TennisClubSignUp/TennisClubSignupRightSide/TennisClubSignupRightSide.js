import React from "react";
import styles from "./TennisClubSignupRightSide.module.css";
import AdminForm from "./AdminForm/AdminForm";
import RightSidePTags from "./RightSidePTags/RightSidePTags";

class TennisClubSignupRightSide extends React.Component {
  state = {
    willTrigger: false
  };
  render() {
    return (
      <div id={styles.containerRight}>
        <AdminForm getAdminInfo={this.props.getAdminInfo} />
        <RightSidePTags
          name={this.props.name}
          tennisClub={this.props.tennisClub}
        />
      </div>
    );
  }
}

export default TennisClubSignupRightSide;
