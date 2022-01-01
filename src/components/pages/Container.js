import React from "react";
import styles from "./Container.module.css";

export default function Container(props) {
    return (
        /* <div id="divcont" className={`${styles.Container} ${styles[props.customClass]}` }>*/
        <div className={`${styles.Container}`}>
            {props.children}
        </div>
        );

}