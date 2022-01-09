import React from "react";
import styles from "./NewProject.module.css";
import ProjectForm from "../project/ProjectForm";

export default function NewProject() {
    return (
        <div className={ styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto</p>
            <ProjectForm btnText="insira projeto"/>
        </div>

    );

}