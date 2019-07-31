import React from "react";
import styles from "./CreateProfilePage.module.css";

class CreateProfilePage extends React.Component {
  render() {
    return (
      <div id={styles.createProfileContainer}>
        <div id={styles.createProfile}>
          <p>
            Thanks for joining Tennis Mate {this.props.name}. Tennis Mate allows
            you to create a profile, this profile can include a picture and a
            little information about yourself. It is not required and if you
            would not like to create a profile, you can select the corresponding
            option below and you won't be asked again. If you would like to
            create it later, that is fine too!
          </p>
        </div>
        <div id={styles.createProfileRightSide} />
      </div>
    );
  }
}

export default CreateProfilePage;
