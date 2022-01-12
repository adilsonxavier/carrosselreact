import React from "react";
import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";
import {useHistory} from "react-router-dom"
export default function NewProject() {
    const history = useHistory();

    function createPost(project) {
        // iniciar cost e service
        project.cost = 0;
        project.service = [];

        // O endpont abaixo usa o json-server que é uma lib que cria uma API fake para teste
        // para inserir um registro por exemplo basta  executar o POST e passar o json no Body

        fetch("http://localhost:5001/projects", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                history.push("/projects", { message: "projeto foi criado com sucesso 1220", minhaprop:"valor minha prop 1220" });
            })
        .catch((err) => console.log("erro post:"+ err));
}

    return (
        <div className={ styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto</p>
            <ProjectForm handleSubmit={createPost } btnText="insira projeto"/>
        </div>

    );

}