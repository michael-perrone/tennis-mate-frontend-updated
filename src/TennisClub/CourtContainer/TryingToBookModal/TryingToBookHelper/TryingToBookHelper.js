import React from "react";
import styles from "./TryingToBookHelper.module.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import OtherAlert from "../../../../OtherAlerts/OtherAlerts";

const TryingToBookHelper = props => {
  const [customerName, setCustomerName] = React.useState("");
  const [customers, setCustomers] = React.useState([]);
  const [tooSmallError, setTooSmallError] = React.useState(false);

  function findCustomers(event) {
    event.preventDefault();
    if (customerName.length > 2) {
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
          console.log(error);
        });
    } else {
      setTooSmallError(true);
    }
  }

  const getCustomerName = event => {
    setCustomerName(event.target.value);
  };

  return (
    <div id={styles.mainHelper}>
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
      {customers.map(customerName => {
        return <p>{customerName.name}</p>;
      })}
    </div>
  );
};

export default withRouter(TryingToBookHelper);
