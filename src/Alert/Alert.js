import React from 'react';
import styles from './Alert.module.css';

function Alert(props) {
    return (
            <p style={{top: "22px", right: "5%" }}
             id={styles.alert}>
             {props.alertPhrase}
             </p>
    )
}

export default Alert;