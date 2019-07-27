import React from "react";
import styles from "./AlertUserFirstName.module.css";

class AlertUserFirstName extends React.Component {
  render() {
    return (
      <div
        style={{
          color: this.props.color,
          top: `${this.props.top}px`,
          left: `${this.props.left}px`
        }}
        id={styles.alertContainer}
      >
        <p>{this.props.alert}</p>
      </div>
    );
  }
}

export default AlertUserFirstName;
