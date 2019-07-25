import React from "react";
import styles from "./InstructorSignup.module.css";
import { connect } from "react-redux";
import { INSTRUCTOR_REGISTER } from "../../../../actions/actions";

class InstuctorSignup extends React.Component {
  render() {
    console.log(this.props.instructorRegister);
    return (
      <div id={styles.instructorSignupContainer}>
        <p
          onClick={this.props.instructorRegisterHandler}
          id={styles.instructorSignup}
        >
          {" "}
          OR register as instructor here
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    instructorRegisterHandler: () => dispatch({ type: INSTRUCTOR_REGISTER })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(InstuctorSignup);
