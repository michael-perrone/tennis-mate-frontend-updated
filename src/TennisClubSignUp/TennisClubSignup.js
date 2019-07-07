import styles from "./TennisClubSignup.module.css";
import React from "react";
import axios from "axios";

class TennisClubSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: {
        tennisClub: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        createPassword: "",
        passwordConfirm: ""
      }
    };
    this.getAdminInput = this.getAdminInput.bind(this);
    this.sendAdminInfo = this.sendAdminInfo.bind(this);
  }

  getAdminInput(event) {
    const newStateObject = { ...this.state.admin };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ admin: newStateObject });
  }

  sendAdminInfo(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/adminSignup", this.state.admin)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id={styles.container}>
        <div id={styles.containerLeft}>
          <div id={styles.subContainerLeft}>
            <p className={styles.pTagsInLeftContainer}>
              Thanks for registering your club for Tennis Mate. We are so glad
              you're joining us. Tennis mate is a great solution for tennis
              players, clubs, and instructors. Our website is designed to give
              tennis clubs access to tools and abilities they do not currently
              have at a cheap price. Most software that tennis clubs use are
              overpriced and it cripples tennis clubs ability to expand to
              greater heights. Tennis mate gives you much more for so much less
              on many levels. Stop overpaying for software and register today!
            </p>
            <div id={styles.middleParagraphHolder}>
              <p
                style={{ marginTop: "0px" }}
                className={styles.pTagsInLeftContainerDiv}
              >
                What tools do we offer? For one, accessability, your customers
                can now book a tennis court or lesson through Tennis Mate. They
                can even pay for the court time or lesson online, this will
                greatly reduce overcrowded front desks.
              </p>
              <p className={styles.pTagsInLeftContainerDiv}>
                Is that all? No way. Theres so much more, instructors at your
                club can now view their schedule on their phones instead of
                huddling around one or two computers which display their
                schedule. It makes booking lessons easier and convenient for
                your instructors. It also leads to less confusion and conflicts
                with instructors double-booking courts.
              </p>
              <p className={styles.pTagsInLeftContainerDiv}>
                But were not done yet, there is even more. You will gain
                outreach to many more customers, customers looking to play
                tennis in your area can find your club through a search. You
                will instantly have hundreds of more potential customers.
              </p>
              <p className={styles.pTagsInLeftContainerDiv}>
                Tennis Mate allows you to do everything your current software
                allows you to do and more. Whether its payroll, scheduling
                clinics, charging members, or booking courts in advanced. It
                gives you a modern, web accessible software that anyone can
                access on their phones and computers. It solves many of the
                issues that older softwares are creating at tennis clubs just
                like yours.
              </p>
            </div>
            <p className={styles.pTagsInLeftContainer}>
              Sign up today. Tennis Mate is a chance to cut costs dramatically
              for you club and also give your club innovative new software. We
              are a growing company with a futuristic vision about how software
              should help tennis clubs grow, not cripple them. There is nothing
              silly like an installation or signup fee. Your club pays a monthly
              or yearly cost to use our software. Simple as that, no contracts
              necessary. If you have any questions, concerns, or just want to
              chat about Tennis Mate, call us today at 856-381-6770 or email us
              at tennismateapp@gmail.com.
            </p>
          </div>
        </div>

        <div id={styles.containerRight}>
          <p id={styles.registerP}>Admin Register</p>
          <div id={styles.subContainerRight}>
            <form id={styles.registerForm}>
              <div
                style={{ marginTop: "14px" }}
                className={styles.divWidthControl}
              >
                <label className={styles.labels}>Tennis Club:</label>
                <input
                  onChange={this.getAdminInput}
                  value={this.state.admin.tennisClub}
                  name="tennisClub"
                  placeholder="Tennis Club Name"
                  id={styles.input1}
                  className={styles.inputs}
                  type="text"
                />
              </div>
              <div className={styles.divWidthControl}>
                <label className={styles.labels}>First Name:</label>
                <input
                  onChange={this.getAdminInput}
                  value={this.state.admin.firstName}
                  name="firstName"
                  placeholder="First Name"
                  id={styles.input1}
                  className={styles.inputs}
                  type="text"
                />
              </div>
              <div className={styles.divWidthControl}>
                <label className={styles.labels}>Last Name:</label>
                <input
                  onChange={this.getAdminInput}
                  value={this.state.admin.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  id={styles.input15}
                  className={styles.inputs}
                  type="text"
                />
              </div>
              <div className={styles.divWidthControl}>
                <label className={styles.labels}>Email Address:</label>
                <input
                  onChange={this.getAdminInput}
                  value={this.state.admin.email}
                  name="email"
                  placeholder="Email Address"
                  id={styles.input2}
                  className={styles.inputs}
                  type="text"
                />
              </div>
              <div className={styles.divWidthControl}>
                <label className={styles.labels}>Phone Number:</label>
                <input
                  onChange={this.getAdminInput}
                  value={this.state.admin.phoneNumber}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  id={styles.input2}
                  className={styles.inputs}
                  type="text"
                />
              </div>
              <div className={styles.divWidthControl}>
                <label className={styles.labels}>Create Password:</label>
                <input
                  onChange={this.getAdminInput}
                  value={this.state.admin.createPassword}
                  name="createPassword"
                  placeholder="Create Password"
                  id={styles.ml26}
                  className={styles.inputs}
                  type="password"
                />
              </div>
              <div className={styles.divWidthControl}>
                <label className={styles.labels}>Password Confirm:</label>
                <input
                  onChange={this.getAdminInput}
                  value={this.state.admin.passwordConfirm}
                  name="passwordConfirm"
                  placeholder="Password Confirm"
                  id={styles.ml8}
                  className={styles.inputs}
                  type="password"
                />
              </div>
              <button onClick={this.sendAdminInfo} id={styles.registerButton}>
                Register As Club Admin
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TennisClubSignup;
