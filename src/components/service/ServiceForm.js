import React from "react";
import styles from "../project/ProjectForm.module.css";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";





export default function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = React.useState([]);

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={submit} className={styles.form}>

            <Input type="text"
                labelText="insira o nome do serv"
                name="name"
                placeHolde="insira o nome do serv"
                handleOnChange={handleChange}
            />
            <Input type="number"
                labelText="insira o custo total"
                name="cost"
                placeHolde="insira o custo total"
                handleOnChange={handleChange}
            />
            <Input type="text"
                labelText="insira a descrição"
                name="description"
                placeHolde="insira a descrição"
                handleOnChange={handleChange}
            />
            <SubmitButton labelText={btnText} />
        </form>
        )
}