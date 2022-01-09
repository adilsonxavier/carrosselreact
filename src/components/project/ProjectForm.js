import React from "react";
import Input from "../form/Input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";
import styles from "./ProjectForm.module.css";

export default function ProjectForm({ btnText}) {
    return (
        <form className={styles.form }>
            {/* <input type="text" placeholder="nome projeto"/>*/}
            <Input
                name="name"
                type="text"
                labelText="insira nome proj"
                placeHolder="nome proj"
                value="buceta"
            />
            <Input
                name="budget"
                type="number"
                labelText="insira orçamento total"
                placeHolder="orcamento"
            />
            <Select
                name="category_id"
                labelText="selecione a categoria"
            />
            <SubmitButton labelText={ btnText}/>

        </form>
    );

}