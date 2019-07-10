import React from "react";
import styles from "./TennisClubSignupRightSide.module.css";
import AdminForm from "./AdminForm/AdminForm";
import RightSidePTags from "./RightSidePTags/RightSidePTags";

class TennisClubSignupRightSide extends React.Component {
  render() {
    return (
      <div id={styles.containerRight}>
        <AdminForm getAdminInfo={this.props.getAdminInfo} />
        <RightSidePTags
          name={this.props.name}
          tennisClub={this.props.tennisClub}
        />
        <div style={{ width: "85%" }}>
          <p id={styles.pTag}>
            Before getting started with your tennis club. We need a little
            information about you. You will create an administrator account with
            your tennis club that will give you full access to editing and
            adding to your clubs details. You will use the email and password
            you create here to login from the home page. Admins can add
            instructors, change court names, and much more.
          </p>
        </div>
      </div>
    );
  }
}

export default TennisClubSignupRightSide;
