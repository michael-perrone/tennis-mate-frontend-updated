import React from "react";
import styles from "./Title.module.css";

class Title extends React.Component {
  render() {
    return (
      <div id={styles.TitleContainer}>
        <img
          id={styles.tennisBall}
          src="https://img.icons8.com/color/48/000000/tennis-ball.png"
          alt="tennis ball"
        />
        <p className={styles.jello} id={styles.title}>
          Tennis Buddy
        </p>
      </div>
    );
  }
}

export default Title;
