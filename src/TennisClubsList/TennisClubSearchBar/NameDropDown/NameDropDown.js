import React from "react";
import DropDown from "./DropDown/DropDown";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { USER_LOGOUT } from "../../../actions/actions";
import styles from "./NameDropDown.module.css";

class NameDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: "",
      instructorToken: "",
      adminToken: "",
      showDropDown: false
    };
    this.goHomeHandler = this.goHomeHandler.bind(this);
    this.showDropDownHandler = this.showDropDownHandler.bind(this);
  }

  showDropDownHandler() {
    this.setState(prevState => ({ showDropDown: !prevState.showDropDown }));
  }

  goHomeHandler() {
    this.props.history.push("/wdwdlwdkwdw");
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.props.token !== null && this.state.showDropDown && (
          <DropDown
            logout={this.props.userLogout}
            goToRoute={`/user/${this.props.user.user.id}/createeditprofile`}
          />
        )}
        {this.props.user !== null && (
          <div className={styles.dropDownHeader}>
            <p
              style={{ fontFamily: "Indie Flower, cursive" }}
              onClick={this.goHomeHandler}
            >
              {" "}
              {this.props.user.user.userName}
            </p>
            <i
              onClick={this.showDropDownHandler}
              style={{ position: "relative", left: "8px", top: "4px" }}
              className="fas fa-caret-down"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch({ type: USER_LOGOUT })
  };
};

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    user: state.authReducer.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NameDropDown)
);
