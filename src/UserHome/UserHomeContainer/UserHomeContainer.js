import React, { useEffect, useState } from "react";
import styles from "./UserHomeContainer.module.css";
import Axios from "axios";
import { connect } from "react-redux";
import ClubInsideUserHome from "./ClubInsideUserHome/ClubInsideUserHome";

const UserHomeContainer = props => {
  const [clubs, setClubs] = useState([]);
  const [noClubs, setNoClubs] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:8080/api/userClubs", {
      headers: { "x-auth-token": props.userToken }
    }).then(response => {
      if (response.status === 204) {
        setNoClubs("You have not subscribed to any clubs yet.");
      } else if (response.status === 200) {
        setClubs(response.data.tennisClubs);
      }
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/getBookings", {
      headers: { "x-auth-token": props.userToken }
    });
  });

  function setNewClubs(newClubs) {
    setClubs(newClubs);
  }

  return (
    <div
      style={{
        height: clubs.length < 3 ? "92vh" : `${(clubs.length - 1) * 300}px`
      }}
      id={styles.userHomeContainer}
    >
      <div id={styles.clubsSubscribedHalf}>
        {clubs.length > 0 &&
          clubs.map(individualClub => {
            return (
              <ClubInsideUserHome
                setNewClubs={setNewClubs}
                club={individualClub}
              />
            );
          })}
        {clubs.length < 1 && <p>{noClubs}</p>}
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
