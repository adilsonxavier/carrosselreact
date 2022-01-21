
import React from "react";
import styles from "./Input.module.css";

export default function Input({ type, labelText, name, placeHolder, handleOnChange, value }) {
    /* as propriedades foram passadas com desestruturação de objeto então no elemento que usa precisa usar os mesmos nomes mas
     * não precisa seguir a mesma ordem*/
    return (
        <div className={styles.form_control }>
            <label htmlFor={name}>{ labelText}</label>
            <input type={type} placeholder={placeHolder} name={name } onChange={handleOnChange} value={ value }/>
        </div>
        );

}