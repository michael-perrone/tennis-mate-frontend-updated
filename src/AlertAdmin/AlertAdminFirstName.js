import React from "react";
import styles from "./AlertAdminFirstName.module.css";

class AlertAdminFirstName extends React.Component {
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
        <p>Field cannot be blank</p>
      </div>
    );
  }
}

export default AlertAdminFirstName;
