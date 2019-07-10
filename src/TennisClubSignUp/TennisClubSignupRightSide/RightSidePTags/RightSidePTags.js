import React from "react";
import styles from "./RightSidePTags.module.css";
import { connect } from "react-redux";

class RightSidePTags extends React.Component {
  render() {
    let animationSubRight = "";
    if (this.props.adminEntered) {
      animationSubRight = styles.animationSubContainerRight;
    }
    return (
      <div id={animationSubRight} className={styles.subContainerRight}>
        <p className={styles.pTagsInRightContainer}>
          Thanks for entering your information {this.props.name}! We at Tennis
          Mate are so excited that {this.props.tennisClub} is joining us! Please
          continue filling out some information about your tennis club. We will
          use this information to start creating a schedule for your club that
          customers and instructors can book courts on. We also invite you to
          include information about your club so we can help you get started in
          creating your page.
        </p>
        <p className={styles.pTagsInRightContainer}>
          Once you click the button the right, we will give you an idea of how
          your new software is going to look. Everything is customizable so it
          is not set in stone. It's just the default way we have layed it out
          for you. Once you purchase the software, which you will be able to do
          on the next page, you will be able to add more information about your
          club. You can include things like a bio about your club, certain
          exciting events coming up, and other things such as services like
          racquet stringing.
        </p>
        <p className={styles.pTagsInRightContainer}>
          Remember, you don't need to pay to see a prototype of what you're
          software may look like. We also have a video that goes into extreme
          detail about how this all works if you are a bit overwhelmed with the
          process. We want you to be as comfortable as possible so once again if
          there is anything we can do please reach out to us. You can reach us
          at 856-381-6770 or tennismateapp@gmail.com.
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
