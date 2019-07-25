import React from "react";
import styles from "./Alert.module.css";
import { connect } from "react-redux";

class Alert extends React.Component {
  render() {
    console.log(this.props.alerts);
    return (
      <div id={styles.alertContainer}>
        {this.props.alerts.map(element => {
          if (element.alertType === "danger") {
            return (
              <p key={element.id} id={styles.danger}>
                {element.msg}
              </p>
            );
          } else {
            return (
              <p key={element.id} id={styles.success}>
                {element.msg}
              </p>
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alerts: state.alert
  };
};

export default connect(mapStateToProps)(Alert);
