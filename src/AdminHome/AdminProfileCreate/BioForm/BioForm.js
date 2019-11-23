import React, { useState } from "react";
import styles from "./BioForm.module.css";
import Axios from "axios";
import { connect } from "react-redux";

function BioForm(props) {
  const [bio, setBio] = useState("");
  const [changingBio, setChangingBio] = useState("");

  React.useEffect(() => {
    setBio(props.bio);
  }, [props.bio]);

  function submitBio() {
    Axios.post(
      "http://localhost:8080/api/clubProfile",
      { bio },
      { headers: { "x-auth-token": props.adminToken } }
    );
  }

  function bioHandler(event) {
    if (changingBio === false) {
      setChangingBio(true);
    }
    setBio(event.target.value);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <textarea
        id={styles.bioForm}
        onChange={bioHandler}
        value={
          props.bio !== undefined && changingBio === false ? props.bio : bio
        }
      />
      <button
        onClick={submitBio}
        style={{ marginTop: "20px", height: "32px", width: "140px" }}
      >
        Submit Club Bio
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    adminToken: state.authReducer.adminToken
  };
};

export default connect(mapStateToProps)(BioForm);
