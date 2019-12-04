import React from "react";
import otherstyles from "../TryingToBookModal/TryingToBookModal.module.css";
import Axios from "axios";
import styles from "./CheckBookingModal.module.css";
import OtherAlert from "../../../OtherAlerts/OtherAlerts";
import AddingPlayers from "./AddingPlayers/AddingPlayers";

class CheckBookingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      confirmDelete: false,
      editing: false,
      playersChanged: false,
      showAddHelper: false
    };
    this.done = this.done.bind(this);
    this.showConfirmDelete = this.showConfirmDelete.bind(this);
    this.cancelConfirmDelete = this.cancelConfirmDelete.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.removePlayers = this.removePlayers.bind(this);
    this.savePlayers = this.savePlayers.bind(this);
    this.addPlayers = this.addPlayers.bind(this);
    this.goBackHandler = this.goBackHandler.bind(this);
  }

  goBackHandler() {
    this.setState({ showAddHelper: false });
  }

  done(players) {
    return () => {
      this.setState({ players });
      this.setState({ editing: true });
      setTimeout(() => this.setState({ showAddHelper: false }), 200);
    };
  }

  addPlayers() {
    this.setState({ showAddHelper: true });
  }

  savePlayers() {
    this.setState({ playersChanged: false });
    let newPlayers = [];
    this.state.players.forEach(player => {
      newPlayers.push(player.id);
    });
    Axios.post("http://localhost:8080/api/getCustomers/saveNewPlayers", {
      newPlayers,
      bookingId: this.props.objectToModal._id
    });
    setTimeout(() => this.setState({ playersChanged: true }), 300);
  }

  setEditing() {
    this.setState({ editing: !this.state.editing });
  }

  componentDidMount() {
    console.log("hi");
    console.log(this.props);
    if (
      this.props.objectToModal &&
      this.props.objectToModal.players &&
      this.props.objectToModal.players.length > 0
    ) {
      console.log("hi");
      Axios.post("http://localhost:8080/api/getPlayers", {
        bookingId: this.props.objectToModal._id
      }).then(response => {
        this.setState({ players: response.data.players });
      });
    }
  }

  removePlayers(id) {
    return () => {
      let newPlayers = this.state.players.filter(player => player.id !== id);
      this.setState({ players: newPlayers });
    };
  }

  showConfirmDelete() {
    this.setState({ confirmDelete: true });
  }

  cancelConfirmDelete() {
    this.setState({ confirmDelete: false });
  }

  render() {
    return (
      <React.Fragment>
        <div
          onClick={this.props.cancel}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
            width: "100%",
            zIndex: "498",
            backgroundColor: "rgba(0,0,0,0.85)"
          }}
        ></div>
        <div style={{ left: "35%" }} className={otherstyles.bookingModal}>
          <button
            style={{
              boxShadow: "0px 0px 2px black",
              position: "absolute",
              borderLeft: "1px solid black",
              borderBottom: "1px solid black",
              borderRight: "none",
              borderTop: "none",
              top: "0",
              right: "0",
              zIndex: "1000",
              width: "22px"
            }}
            onClick={this.props.cancel}
          >
            X
          </button>
          <OtherAlert
            alertMessage={"Players Changed Successfully"}
            showAlert={this.state.playersChanged}
            alertType={"success"}
          />
          <p style={{ marginTop: "20px", textDecoration: "underline" }}>
            Information
          </p>
          <div
            style={{
              width: "90%",
              boxShadow: "0px 0px 2px black",
              marginTop: "6px"
            }}
          >
            <p style={{ padding: "5px" }}>
              Booked by: {this.props.objectToModal.bookedBy}
            </p>
            <p style={{ padding: "5px" }}>
              Booking starts: {this.props.objectToModal.timeStart}
            </p>
            <p style={{ padding: "5px" }}>
              Booking ends: {this.props.objectToModal.timeEnd}
            </p>
            <p style={{ padding: "5px" }}>
              Booking Type: {this.props.objectToModal.bookingType}
            </p>
            {this.props.objectToModal.instructorName !== "None" && (
              <p style={{ padding: "5px" }}>
                Instructor: {this.props.objectToModal.instructorName}
              </p>
            )}
          </div>
          {this.state.players && this.state.players.length > 0 && (
            <React.Fragment>
              <p style={{ textDecoration: "underline", marginTop: "16px" }}>
                Players
              </p>
              <div
                style={{
                  marginTop: "6px",
                  boxShadow: "0px 0px 2px black",
                  width: "90%",
                  height: "220px",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignContent: "space-around"
                }}
              >
                {this.state.players &&
                  this.state.players.map(player => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <p
                          style={{
                            padding: "4px",
                            fontSize:
                              this.state.players.length > 8 ? "12px" : "14px"
                          }}
                        >
                          {player.name}{" "}
                        </p>
                        {this.state.editing && this.state.players.length > 1 && (
                          <i
                            onClick={this.removePlayers(player.id)}
                            style={{
                              padding: "4px",
                              position: "relative",
                              top: "2px"
                            }}
                            id={styles.littleGuy}
                            class="fas fa-ban"
                          ></i>
                        )}
                      </div>
                    );
                  })}
                {this.state.editing && this.state.players.length !== 0 && (
                  <button
                    style={{
                      backgroundColor: "lightgreen",
                      height: "26px",
                      width: "60px",
                      border: "none",
                      boxShadow: "0px 0px 3px black",
                      position: "absolute",
                      bottom: "18px"
                    }}
                    onClick={this.savePlayers}
                  >
                    Save
                  </button>
                )}
                <button
                  style={{
                    backgroundColor: "lightgreen",
                    height: "22px",
                    width: "90px",
                    border: "none",
                    boxShadow: "0px 0px 3px black",
                    position: "absolute",
                    bottom: "115px"
                  }}
                  onClick={this.addPlayers}
                >
                  Add Players
                </button>
                {this.state.showAddHelper && (
                  <AddingPlayers
                    playersFromModal={this.state.players}
                    goBackHandler={this.goBackHandler}
                    done={this.done}
                  />
                )}
              </div>
            </React.Fragment>
          )}
          {this.state.confirmDelete && (
            <div
              onClick={this.cancelConfirmDelete}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.85)",
                zIndex: 1003
              }}
            ></div>
          )}
          {this.state.confirmDelete && (
            <div
              style={{
                position: "absolute",
                top: "200px",
                width: "80%",
                zIndex: 1004,
                backgroundColor: "lightgreen",
                height: "80px",
                boxShadow: "0px 0px 3px white"
              }}
            >
              <p style={{ padding: "8px", fontSize: "14px" }}>
                Are you sure you want to delete this booking?
              </p>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px"
                }}
              >
                <button
                  style={{ height: "28px", width: "70px" }}
                  onClick={this.props.deleteBooking(
                    this.props.objectToModal._id
                  )}
                >
                  Confirm
                </button>
                <button
                  onClick={this.cancelConfirmDelete}
                  style={{ height: "28px", width: "70px" }}
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
          <div style={{ display: "flex", marginTop: "50px" }}>
            <button
              onClick={this.showConfirmDelete}
              className={styles.editCancel}
            >
              <i
                style={{
                  position: "relative",
                  left: "-5px"
                }}
                class="far fa-trash-alt"
              ></i>
              Delete
            </button>
            <button className={styles.editCancel} onClick={this.setEditing}>
              <i
                style={{ position: "relative", left: "-5px" }}
                class="far fa-edit"
              ></i>
              Edit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckBookingModal;
