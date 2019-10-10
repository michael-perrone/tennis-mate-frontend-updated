import React from "react";
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
        
        {this.props.admin !== null &&
          <div className={styles.dropDownHeader} onClick={this.showDropDownHandler}>
             <p>{this.props.admin.admin.name}</p>
             <i style={{position: 'relative', left: '8px', top: "9px"}}  className="fas fa-caret-down"/>
          </div>}
        {this.props.token !== null && this.state.showDropDown && (
          <DropDown
            logout={this.props.userLogout}
            goToRoute={`/user/${this.props.user.user.id}/createeditprofile`}
          />
        )}
        {this.props.instructor !== null && <div className={styles.dropDownHeader} onClick={this.showDropDownHandler} >
           <p >{this.props.instructor.instructor.instructorName}</p>
           <i style={{position: 'relative', left: '8px', top: "9px"}} className="fas fa-caret-down"/>
           </div>}
        {this.props.instructorToken !== null && this.state.showDropDown && (
          <DropDown
            logout={this.props.instructorLogout}
            goToRoute={`/instructor/${this.props.instructor.instructor.id}/createeditprofile`}
          />
        )}
         {this.props.user !== null && 
         <div className={styles.dropDownHeader} onClick={this.showDropDownHandler}>
         <p> {this.props.user.user.userName}</p>
         <i style={{position: 'relative', left: '4px', top: "8px"}}  className="fas fa-caret-down"/>
        </div>
         }
        {this.props.adminToken !== null && this.state.showDropDown && (
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
