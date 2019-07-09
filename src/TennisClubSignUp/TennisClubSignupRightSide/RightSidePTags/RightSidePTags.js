import React from "react";
import styles from "./RightSidePTags.module.css";
import { connect } from "react-redux";

class RightSidePTags extends React.Component {
  render() {
    let animationSubLeft = "";
    if (this.props.adminEntered) {
      animationSubLeft = styles.animationSubContainerLeft;
    }
    return (
      <div id={animationSubLeft} className={styles.subContainerRight}>
        <p>
          Thanks for entering your information {this.props.name}! We at Tennis
          Mate are so excited that your club {this.props.tennisClub} to get
          started with you. Please continue filling out some information about
          your tennis club. We will use this information to start creating a
          schedule for your club that customers and instructors can book courts
          on. We also invite you to include information about your club so we
          can help you get started in creating your page.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminEntered: state.adminEntered
  };
};

export default connect(mapStateToProps)(RightSidePTags);
