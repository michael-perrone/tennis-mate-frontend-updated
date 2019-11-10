import React, { useEffect } from "react";
import styles from "./UserHomeContainer.module.css";
import Axios from "axios";
import { connect } from "react-redux";

const UserHomeContainer = props => {
  useEffect(() => {
    Axios.get("http://localhost:8080/api/userClubs", {
      headers: { "x-auth-token": props.userToken }
    }).then(response => {
      console.log(response);
    });
  }, []);

  return (
    <div id={styles.userHomeContainer}>
      <div id={styles.clubsSubscribedHalf}>
        <p>Clubs subscribed to</p>
      </div>
      <div id={styles.bookingsHalf}>
        <p>Bookings coming up</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userToken: state.authReducer.token
  };
};

export default connect(mapStateToProps)(UserHomeContainer);
