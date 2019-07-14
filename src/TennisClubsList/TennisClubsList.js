import React from "react";
import axios from "axios";
import TennisClub from "./TennisClub/TennisClub";
import styles from "./TennisClubsList.module.css";

class TennisClubsList extends React.Component {
  constructor() {
    super();
    this.state = {
      tennisClubs: ""
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/clubsList").then(response => {
      this.setState({ tennisClubs: response.data.clubs });
    });
  }

  render() {
    return (
      <div id={styles.clubsContainer}>
        <TennisClub />
      </div>
    );
  }
}

export default TennisClubsList;
