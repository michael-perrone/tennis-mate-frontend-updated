import React from "react";
import { Link } from "react-router-dom";
import styles from "./DropDown.module.css";
import {connect} from 'react-redux';

const DropDown = props => {
  return (
    <div id={styles.dropDownMenu}>
      <div className={styles.dropDownDiv}>
        <Link className={styles.dropDownItem} to={props.goToRoute}>
          Edit Profile
        </Link>
      </div>
      <div className={styles.dropDownDiv}>
        <Link className={styles.dropDownItem} to="/settings">
          Settings
        </Link>
      </div>
      <div style={{ borderBottom: "none" }} className={styles.dropDownDiv}>
        <Link
          className={styles.dropDownItem}
          onClick={props.logout}
          to="/clubs"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};



export default DropDown;
