import React from "react";
import styles from "./TryingToBookHelper.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import OtherAlert from "../../../../OtherAlerts/OtherAlerts";

const TryingToBookHelper = props => {
  const [customerName, setCustomerName] = React.useState("");
  const [customers, setCustomers] = React.useState([]);
  const [addedPlayers, setAddedPlayers] = React.useState([]);
  const [searchHit, setSearchHit] = React.useState(false);
  const [tooSmallError, setTooSmallError] = React.useState(false);
  const [addError, setAddError] = React.useState(false);

  function findCustomers(event) {
    event.preventDefault();
    if (customerName.length > 2) {
      setSearchHit(true);
      axios
        .post("http://localhost:8080/api/getCustomers", {
          customerName,
          clubNameAllLower: props.match.params.clubName
        })
        .then(response => {
          if (response.data.customers.length > 0) {
            setCustomers(response.data.customers);
          }
        })
        .catch(error => {
          if (error.response.status === 400) {
            setCustomers([]);
          }
        });
    } else {
      setTooSmallError(true);
    }
  }

  function addPlayer(player) {
    return () => {
      setAddError(false);
      let allowAdd = true;
      addedPlayers.forEach(addedPlayer => {
        if (addedPlayer.id === player.id) {
          allowAdd = false;
        }
      });
      if (allowAdd) {
        const newAddedPlayers = [...addedPlayers, player];
        setAddedPlayers(newAddedPlayers);
      } else {
        setTimeout(() => setAddError(true), 100);
      }
    };
  }

  const getCustomerName = event => {
    setCustomerName(event.target.value);
    setSearchHit(false);
  };

  return (
    <div id={styles.mainHelper}>
      <div>
        <OtherAlert
          showAlert={addError === true}
          alertType={"error"}
          alertMessage={"Player already added"}
        />
        <form>
          <p
            id={
              tooSmallError === true && customerName.length < 3
                ? styles.errorAnimation
                : ""
            }
            className={styles.error}
          >
            More than two letters required
          </p>
          <p
            className={styles.error}
            id={
              searchHit === true &&
              customerName.length > 2 &&
              customers.length === 0
                ? styles.errorAnimation
                : ""
            }
          >
            No Results Found
          </p>
          <input
            style={{ marginTop: "10px" }}
            onChange={getCustomerName}
            id={styles.helperInput}
          />
          <button
            onClick={findCustomers}
            style={{ marginLeft: "20px", height: "28px", width: "60px" }}
          >
            Search
          </button>
        </form>
        <div style={{ marginTop: "14px" }}>
          {customers.map(customer => {
            return (
              <div className={styles.addCustomerContainer}>
                <p className={styles.customer}>{customer.name}</p>
                <i onClick={addPlayer(customer)} className="fas fa-plus"></i>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid darkgray",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "180px"
        }}
      >
        <p style={{ paddingTop: "10px", textDecoration: "underline" }}>
          Players Added
        </p>
        <div>
          {addedPlayers.map(addedPlayer => {
            return <p>{addedPlayer.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(TryingToBookHelper);
