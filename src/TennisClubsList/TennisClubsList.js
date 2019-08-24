import React from "react";
import axios from "axios";
import TennisClubInList from "./TennisClubInList/TennisClubInList";
import styles from "./TennisClubsList.module.css";

class TennisClubsList extends React.Component {
  constructor() {
    super();
    this.state = {
      tennisClubs: []
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
        <div
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "2px solid black"
          }}
        >
          <h1 id={styles.clubListHeader}>Clubs in your area!</h1>
        </div>
        {this.state.tennisClubs.map(element => {
          return (
            <TennisClubInList
              club={element}
              push={this.props.history.push}
              key={element._id}
            />
          );
        })}
      </div>
    );
  }
}

export default TennisClubsList;
