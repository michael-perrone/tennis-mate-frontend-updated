import React, { useEffect, useState } from "react";
import styles from "./UserHomeContainer.module.css";
import Axios from "axios";
import { connect } from "react-redux";
import ClubInsideUserHome from "./ClubInsideUserHome/ClubInsideUserHome";
import UserBooking from "./UserBooking/UserBooking";

const UserHomeContainer = props => {
  const [clubs, setClubs] = useState([]);
  const [noClubs, setNoClubs] = useState("");
  const [bookings, setBookings] = useState([]);

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
    }).then(response => {
      if (response.status === 200) {
        setBookings(response.data.bookings);
      }
    });
  }, []);

  function setNewClubs(newClubs) {
    setClubs(newClubs);
  }

  return (
    <div
      style={{ height: bookings.length < 3 && clubs.length < 3 ? "92vh" : "" }}
      id={styles.userHomeContainer}
    >
      <div className={styles.half} id={styles.clubsSubscribedHalf}>
        {clubs.length > 0 && (
          <p
            style={{
              marginBottom: "10px",
              fontFamily: '"Josefin Sans", sans-serif'
            }}
          >
            Clubs you follow
          </p>
        )}
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
      <div className={styles.half} id={styles.bookingsHalf}>
        <p
          style={{
            marginBottom: "10px",
            fontFamily: '"Josefin Sans", sans-serif'
          }}
        >
          Your bookings coming up
        </p>
        {bookings.map(booking => {
          return <UserBooking bookingInfo={booking} />;
        })}
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
