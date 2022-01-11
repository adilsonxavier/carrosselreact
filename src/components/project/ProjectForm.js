import React from "react";
import Input from "../form/Input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";
import styles from "./ProjectForm.module.css";

export default function ProjectForm({ btnText }) {
    const [categories, setCategories] = React.useState([]);

    //Precisei por no useEffect para executar só uma vez o fetch ( lembrando que o useEffect funciona comom um PageLoad)
    //Fora do useEffect o React fica executando várias vezes o fetch pra ver se houve mudança 
    React.useEffect(() => {
        fetch("http://localhost:5001/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) =>
                setCategories(data))
            .catch((err) => console.log(err));
    },[] // Precisa deste segundo argunebto de array vazio pra ele carregar o json
    );



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
                options={categories}
            />
            <SubmitButton labelText={ btnText}/>

        </form>
    );

}