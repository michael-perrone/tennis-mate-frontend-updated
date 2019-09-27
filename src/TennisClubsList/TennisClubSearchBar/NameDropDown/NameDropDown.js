import React from "react";
import SmallLoginForm from "./SmallLoginForm/SmallLoginForm";
import DropDown from "./DropDown/DropDown";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import { ADMIN_LOGOUT, INSTRUCTOR_LOGOUT, USER_LOGOUT } from "../../../actions/actions";
import styles from './NameDropDown.module.css';

class NameDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: "",
      instructorToken: "",
      adminToken: "",
      showDropDown: false
    };
      this.showDropDownHandler = this.showDropDownHandler.bind(this);
  }

  showDropDownHandler(){
    this.setState(prevState => (
      {showDropDown: !prevState.showDropDown}
    ))
  }

  render() {
    console.log(this.state);
    return (
      <div>
 
        {this.props.adminToken === null && this.props.token === null && this.props.instructorToken === null && <SmallLoginForm didLogIn={this.didLogIn} />}
        {this.props.admin && <p className={styles.dropDownHeader} onClick={this.showDropDownHandler}>{this.props.admin.admin.name}</p>}
        {this.props.token !== null && (
          <DropDown
            logout={this.props.userLogout}
            goToRoute={`/user/${this.props.user.user.id}/createeditprofile`}
          />
        )}
        {this.props.instructor && <p className={styles.dropDownHeader} onClick={this.showDropDownHandler}>{this.props.instructor.instructor.instructorName}</p>}
        {this.props.instructorToken !== null && (
          <DropDown
            logout={this.props.instructorLogout}
            goToRoute={`/instructor/${this.props.instructor.instructor.id}/createeditprofile`}
          />
        )}
        {this.props.user !== null && <p className={styles.dropDownHeader} onClick={this.showDropDownHandler}>{this.props.user.user.userName}</p>}
        {this.props.adminToken !== null && (
          <DropDown
            logout={this.adminLogout}
            goToRoute={`/admin/${this.props.admin.admin.id}/createeditprofile`}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    adminLogout: () => dispatch({type: ADMIN_LOGOUT}),
    instructorLogout: () => dispatch({type: INSTRUCTOR_LOGOUT}),
    userLogout: () => dispatch({type: USER_LOGOUT})
  }
}

const mapStateToProps = (state) => {
  return {
    instructorToken: state.authReducer.instructorToken,
    adminToken: state.authReducer.adminToken,
    token: state.authReducer.token,
    admin: state.authReducer.admin,
    instructor: state.authReducer.instructor,
    user: state.authReducer.user
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NameDropDown));
