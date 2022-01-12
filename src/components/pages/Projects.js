import React from "react";
import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import styles from "./Projects.module.css";
//import { container } from "webpack";

export default function Projects() {
    const location = useLocation();
    let message = "";
    let minhaprop = "";

    if (location.state) {
        alert(location.state.minhaprop);
        message = location.state.message;
        minhaprop = location.state.minhaprop

    }

    return (
        <div className={styles.project_container }>
            <div className={styles.title_container}>
                <h1> Projects 1302</h1>
                <LinkButton to="/newProject" text="novo projeto"/>
            </div>

            {message && <Message msg={minhaprop} type="success" />}

            <Container customClass="start"  >
                <p>Projetos</p>
            </Container>
        </div>
    );

}