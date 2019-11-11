import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./ClubInsideUserHome.module.css";
import Axios from "axios";
import { connect } from "react-redux";
import { BOOK_A_COURT } from "../../../actions/actions";

const ClubInsideUserHome = props => {
  function bookACourt() {
    props.bookACourt();
    props.history.push(`/clubs/${props.club.clubNameAllLower}`);
  }

  function goToClub() {
    props.history.push(`/clubs/${props.club.clubNameAllLower}`);
  }

  function unfollowClub() {
    let objectToSend = {
      clubToUnfollow: props.club._id,
      userUnfollowing: props.user.user._id
    };
    console.log(objectToSend);
    //Axios.post();
  }

  return (
    <div id={styles.userClubContainer}>
      <div id={styles.leftContainer} className={styles.userSubContainer}>
        <p
          style={{ marginTop: "10px", fontFamily: "Josefin Sans, sans-serif" }}
        >
          {props.club.clubName}
        </p>
      </div>
      <div id={styles.rightContainer} className={styles.userSubContainer}>
        <button className={styles.clubButton} onClick={unfollowClub}>
          Unfollow Club
        </button>
        <button className={styles.clubButton} onClick={goToClub}>
          View This Club
        </button>
        <button className={styles.clubButton} onClick={bookACourt}>
          Book A Court
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bookACourt: () => dispatch({ type: BOOK_A_COURT })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClubInsideUserHome)
);
