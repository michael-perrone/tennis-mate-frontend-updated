import React from "react";
import styles from "./BioCertsJobExp.module.css";

function BioCertsJobExp({ profile }) {
  console.log(profile);
  return (
    <div className={styles.row}>
      <div className={styles.contentHolder}>
        <p className={styles.pTagHeader}>About Me</p>
        <p style={{ padding: "5px" }}>{profile.bio}</p>
      </div>
      <div className={styles.contentHolder}>
        <p className={styles.pTagHeader}>Instructor Experience</p>
        <div style={{ display: "flex", paddingLeft: "5px" }}>
          <div
            style={{
              width: "75%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <p style={{ textDecoration: "underline" }}>Organization</p>
            {profile.jobExperience.map(element => {
              return <p style={{ marginTop: "7px" }}>{element.clubName}</p>;
            })}
          </div>

          <div
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <p style={{ textDecoration: "underline" }}>Years</p>
            {profile.jobExperience.map(element => {
              return <p style={{ marginTop: "7px" }}>{element.jobDuration}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioCertsJobExp;
