import React from 'react';
import styles from './Alert.module.css';

function Alert(props) {
    return (
            <p style={{top: props.top, left: props.left }}
             id={styles.alert}>
             {props.alertPhrase}
             </p>
    )
}

export default Alert;