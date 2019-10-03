import React from 'react';
import styles from './NeedToLoginPage.module.css'
import {withRouter} from 'react-router-dom'
import LoginForm from '../LoginScreen/LoginForm/LoginForm'
import UserRegisterForm from '../LoginScreen/LoginScreenRightSide/UserRegisterForm/UserRegisterForm';

class NeedToLoginPage extends React.Component {
    render() {
        return (
        <div style={{display: "flex", height: '100vh', width: "100vw", backgroundColor: "black"}}>
         <div id={styles.loginFormLeftSide}>
             <p style={{color: "white", fontSize: "48px"}}>Login</p>
            <LoginForm
            width={"20vw"}
            background={"none"}
             flexDirection={"column"} 
             border={"2px solid white"}
             padding={"50px"}
             borderRadius={"14px"}
             alignItems={"center"}
             />
             </div>
             <div id={styles.registerFormRightSide}>
            <UserRegisterForm/>
            </div>
        </div>
        )
    }
}

export default withRouter(NeedToLoginPage);