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
      console.log(response.data.clubs);
      this.setState({ tennisClubs: response.data.clubs });
    });
  }

  render() {
    console.log(this.props)
    return (
      <div id={styles.clubsContainer}>
        <h1>Clubs in your area!</h1>
        {this.state.tennisClubs.map(element => {
         return <TennisClubInList push={this.props.history.push} key={element._id} services={element.services} clubName={element.clubName} address={element.address} city={element.city} zip={element.zip} state={element.state} numberCourts={element.numberCourts}/>
        })}
      </div>
    );
  }
}

export default TennisClubsList;
