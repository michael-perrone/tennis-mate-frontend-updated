import React from "react";
import styles from "./Alert.module.css";
import { connect } from "react-redux";

class Alert extends React.Component {
  render() {
    let num = `${this.props.alerts.length * 55}px`;

    return (
      <div id={styles.alertContainer} style={{ height: num }}>
        <div id={styles.alertSubContainer}>
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
