import React from "react";
import axios from "axios";
import TennisClubInList from "./TennisClubInList/TennisClubInList";
import styles from "./TennisClubsList.module.css";
import { withRouter } from "react-router-dom";
import TennisClubSearchBar from "./TennisClubSearchBar/TennisClubSearchBar";

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
        <TennisClubSearchBar clubs={this.state.tennisClubs} />
        <div
          style={{
            position: "fixed",
            width: "25%",
            backgroundColor: "white",
            height: "100vh",
            left: "0px",
            borderRight: "3px solid gray"
          }}
        >
          <p>wdwdwd</p>
          <p>wdwdwd</p>
        </div>
        <div style={{ marginTop: "90px" }}>
          {this.state.tennisClubs.map(element => {
            return (
              <TennisClubInList
                club={element.clubs}
                profileInfo={element.profile}
                push={this.props.history.push}
                key={element._id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(TennisClubsList);
