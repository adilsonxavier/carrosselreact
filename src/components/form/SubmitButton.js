import React from "react";
import styles from "./SubmitButton.module.css";

export default function SubmitButton({ type, labelText, name, placeHolder, handleOnChange, value }) {
    /* as propriedades foram passadas com desestruturação de objeto então no elemento que usa precisa usar os mesmos nomes mas
     * não precisa seguir a mesma ordem*/
    return (
        <div>
           
            <button className={styles.btn} type="submit">{labelText}</button>
        </div>
        );

}