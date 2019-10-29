import React from "react";
import styles from "./BioCertsJobExp.module.css";

function BioCertsJobExp({ profile }) {
  console.log(profile);
  return (
    <div id={styles.topRow}>
      <div className={styles.contentHolder}>
        <p className={styles.pTagHeader}>Instructor Experience</p>
        <div style={{ display: "flex", paddingLeft: "5px" }}>
          <div
            style={{
              width: "90%",
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
              width: "10%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <p style={{ textDecoration: "underline" }}></p>
            {profile.certifications.map(element => {
              return (
                <p style={{ marginTop: "7px" }}>{element.certificationDate}</p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.contentHolder}>
        <p className={styles.pTagHeader}>About Me</p>
        <p style={{ padding: "5px" }}>{profile.bio}</p>
      </div>
      <div className={styles.contentHolder}>
        <p className={styles.pTagHeader}>Certificates Earned</p>
        <div style={{ display: "flex", paddingLeft: "30px" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <p style={{ textDecoration: "underline" }}>Organization</p>
            {profile.certifications.map(element => {
              return <p style={{ marginTop: "7px" }}>{element.certifiedBy}</p>;
            })}
          </div>

          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <p style={{ textDecoration: "underline" }}>Date</p>
            {profile.certifications.map(element => {
              return (
                <p style={{ marginTop: "7px" }}>{element.certificationDate}</p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioCertsJobExp;
