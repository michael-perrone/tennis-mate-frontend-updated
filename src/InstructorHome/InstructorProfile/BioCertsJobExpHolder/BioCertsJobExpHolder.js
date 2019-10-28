import React from "react";
import styles from "./BioCertsJobExp.module.css";

function BioCertsJobExp(props) {
  console.log(props);
  return (
    <div id={styles.topRow}>
      <div className={styles.contentHolder}>
        <p className={styles.pTagHeader}>Certificates Earned</p>
      </div>
      <div className={styles.contentHolder}>
        <p className={styles.pTagHeader}>Instructor Experience</p>
      </div>
      <div className={styles.contentHolder}>
        <p className={styles.pTagHeader}>About Me</p>
        <p style={{ padding: "15px" }}>{props.profile.bio}</p>
      </div>
    </div>
  );
}

export default BioCertsJobExp;
