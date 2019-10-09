import React from "react";
import styles from "./TennisClubForm.module.css";
import otherStyles from "../../../LoginScreen/LoginScreenRightSide/UserRegisterForm/UserRegisterForm.module.css";
import { ADMIN_ENTERED } from "../../../actions/actions";
import { connect } from "react-redux";
import GoBackToAdmin from "./GoBackToAdmin/GoBackToAdmin";


class TennisClubForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tennisClub: {
        numberCourts: "",
        clubCity: "",
        clubState: "",
        clubZip: "",
        phoneNumber: "",
        clubWebsite: "",
        clubAddress: "",
        clubOpenTime: "",
        clubCloseTime: ""
      }
    };
    this.getTennisClubInput = this.getTennisClubInput.bind(this);
  }

  getTennisClubInput(event) {
    const newStateObject = { ...this.state.tennisClub };
    newStateObject[event.target.name] = event.target.value;
    this.setState({ tennisClub: newStateObject });
    console.log(newStateObject);
  }
  render() {
    let animationContainerLeft = "";
    if (this.props.adminEntered) {
      animationContainerLeft = styles.animationSubContainerLeft;
    }

    return (
      <div className={styles.subContainerLeft} id={animationContainerLeft}>
        <form id={styles.registerForm}>
          <div style={{marginTop: "15px"}} className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "1.0px", color: "black" }}
              className={otherStyles.labels}
            >
              Club Street:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubAddress}
              name="clubAddress"
              placeholder="Street Address"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "2.9px", color: "black" }}
              className={otherStyles.labels}
            >
              Club City:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubCity}
              name="clubCity"
              placeholder="City"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "1.8px", color: "black" }}
              className={otherStyles.labels}
            >
              Club State:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubState}
              name="clubState"
              placeholder="State"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label style={{ color: "black" }} className={otherStyles.labels}>
              Club Zipcode:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubZip}
              name="clubZip"
              placeholder="Zip Code"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>

          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "0.05px", color: "black" }}
              className={otherStyles.labels}
            >
              Website URL:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.clubWebsite}
              name="clubWebsite"
              placeholder="WebSite URL"
              id={otherStyles.input2}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "1.2px", color: "black" }}
              className={otherStyles.labels}
            >
              Club Telephone:
            </label>
            <input
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              value={this.state.tennisClub.phoneNumber}
              name="phoneNumber"
              placeholder="Phone Number"
              id={styles.input4}
              className={otherStyles.inputs}
              type="text"
            />
          </div>
          <div
            style={{ marginTop: "2px" }}
            className={otherStyles.divWidthControl}
          >
            <label  id={styles.clubLabels} style={{ color: "black" }} className={otherStyles.labels}>
              Number of Courts:
            </label>
            <select
                    id={styles.numberCourtsSelecter}
                    value={this.state.tennisClub.numberCourts}
                    onChange={this.getTennisClubInput}
                    name="numberCourts"
                  >
                    <option />
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option>43</option>
                    <option>44</option>
                    <option>45</option>
                    <option>46</option>
                    <option>47</option>
                    <option>48</option>
                    <option>49</option>
                    <option>50</option>
                    <option>51</option>
                    <option>52</option>
                    <option>53</option>
                    <option>54</option>
                    <option>55</option>
                    <option>56</option>
                    <option>57</option>
                    <option>58</option>
                    <option>59</option>
                    <option>60</option>
                    <option>61</option>
                    <option>62</option>
                    <option>63</option>
                    <option>64</option>
                    <option>65</option>
                    <option>66</option>
                    <option>67</option>
                    <option>68</option>
                    <option>69</option>
                    <option>70</option>
                    <option>71</option>
                    <option>72</option>
                    <option>73</option>
                    <option>74</option>
                    <option>75</option>
                    <option>76</option>
                    <option>77</option>
                    <option>78</option>
                    <option>79</option>
                    <option>80</option>
                    <option>81</option>
                    <option>82</option>
                    <option>83</option>
                    <option>84</option>
                    <option>85</option>
                    <option>86</option>
                    <option>87</option>
                    <option>88</option>
                    <option>89</option>
                    <option>90</option>
                    <option>91</option>
                    <option>92</option>
                    <option>93</option>
                    <option>94</option>
                    <option>95</option>
                    <option>96</option>
                    <option>97</option>
                    <option>98</option>
                    <option>99</option>
                    <option>100</option>
                    </select>
          </div>
          <div className={otherStyles.divWidthControl}>
            <label
              style={{ letterSpacing: "0.53px", color: "black" }}
              className={otherStyles.labels}
              id={styles.clubLabels}
            >
              Time Club Opens:
            </label>
            <select
              id={styles.timeSelectors}
              style={{ color: "black", border: "3px ridge #dededc", marginTop: "4px" }}
              onChange={this.getTennisClubInput}
              name="clubOpenTime"
              value={this.state.tennisClub.clubOpenTime}
            >
              <option disabled>{}</option>
              <option>12:00 AM</option>
              <option>12:30 AM</option>
              <option>1:00 AM</option>
              <option>1:30 AM</option>
              <option>2:00 AM</option>
              <option>2:30 AM</option>
              <option>3:00 AM</option>
              <option>3:30 AM</option>
              <option>4:00 AM</option>
              <option>4:30 AM</option>
              <option>5:00 AM</option>
              <option>5:30 AM</option>
              <option>6:00 AM</option>
              <option>6:30 AM</option>
              <option>7:00 AM</option>
              <option>7:30 AM</option>
              <option>8:00 AM</option>
              <option>8:30 AM</option>
              <option>9:00 AM</option>
              <option>9:30 AM</option>
              <option>10:00 AM</option>
              <option>10:30 AM</option>
              <option>11:00 AM</option>
              <option>11:30 AM</option>
              <option>12:00 PM</option>
              <option>12:30 PM</option>
              <option>1:00 PM</option>
              <option>1:30 PM</option>
              <option>2:00 PM</option>
              <option>2:30 PM</option>
              <option>3:00 PM</option>
              <option>3:30 PM</option>
              <option>4:00 PM</option>
              <option>4:30 PM</option>
              <option>5:00 PM</option>
              <option>5:30 PM</option>
              <option>6:00 PM</option>
              <option>6:30 PM</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
              <option>8:30 PM</option>
              <option>9:00 PM</option>
              <option>9:30 PM</option>
              <option>10:00 PM</option>
              <option>10:30 PM</option>
              <option>11:00 PM</option>
              <option>11:30 PM</option>
            </select>
          </div>
          <div className={otherStyles.divWidthControl}>
            <label  id={styles.clubLabels}
              style={{letterSpacing: ".44px", color: "black" }}
              className={otherStyles.labels}
            >
              Time Club Closes:
            </label>
            <select
              placeholder="hi"
              id={styles.timeSelectors}
              style={{ color: "black", border: "3px ridge #dededc" }}
              onChange={this.getTennisClubInput}
              name="clubCloseTime"
              value={this.state.tennisClub.clubCloseTime}
            >
              <option disabled>{}</option>
              <option>12:00 AM</option>
              <option>12:30 AM</option>
              <option>1:00 AM</option>
              <option>1:30 AM</option>
              <option>2:00 AM</option>
              <option>2:30 AM</option>
              <option>3:00 AM</option>
              <option>3:30 AM</option>
              <option>4:00 AM</option>
              <option>4:30 AM</option>
              <option>5:00 AM</option>
              <option>5:30 AM</option>
              <option>6:00 AM</option>
              <option>6:30 AM</option>
              <option>7:00 AM</option>
              <option>7:30 AM</option>
              <option>8:00 AM</option>
              <option>8:30 AM</option>
              <option>9:00 AM</option>
              <option>9:30 AM</option>
              <option>10:00 AM</option>
              <option>10:30 AM</option>
              <option>11:00 AM</option>
              <option>11:30 AM</option>
              <option>12:00 PM</option>
              <option>12:30 PM</option>
              <option>1:00 PM</option>
              <option>1:30 PM</option>
              <option>2:00 PM</option>
              <option>2:30 PM</option>
              <option>3:00 PM</option>
              <option>3:30 PM</option>
              <option>4:00 PM</option>
              <option>4:30 PM</option>
              <option>5:00 PM</option>
              <option>5:30 PM</option>
              <option>6:00 PM</option>
              <option>6:30 PM</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
              <option>8:30 PM</option>
              <option>9:00 PM</option>
              <option>9:30 PM</option>
              <option>10:00 PM</option>
              <option>10:30 PM</option>
              <option>11:00 PM</option>
              <option>11:30 PM</option>
            </select>
          </div>
          <div id={styles.buttonGoBackHolder}>
          <GoBackToAdmin unEnterAdmin={this.props.unEnterAdmin} />
          <button
            onClick={this.props.getTennisClubInfo(this.state.tennisClub)}
            id={styles.registerButton}
          >
            Continue Registration
          </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminEntered: state.booleanReducers.adminEntered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    adminInfoUnentered: () => dispatch({ type: ADMIN_ENTERED })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TennisClubForm);
