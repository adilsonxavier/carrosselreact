import React from "react";
import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import styles from "./Projects.module.css";
import ProjectCard from "../project/ProjectCard";
//import { container } from "webpack";

export default function Projects() {
    const [projects, setProjects] = React.useState([]);

    const location = useLocation();
    let message = "";
    let minhaprop = "";

    if (location.state) {
        alert(location.state.minhaprop);
        message = location.state.message;
        minhaprop = location.state.minhaprop

    }

    React.useEffect(() => {
        fetch("http://localhost:5001/projects",
            {
                method:"get",
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setProjects(data);
            })
            .catch((erro) => console.log(erro));
    }, []);

    return (
        <div className={styles.project_container }>
            <div className={styles.title_container}>
                <h1> Projects 1302</h1>
                <LinkButton to="/newProject" text="novo projeto"/>
            </div>

            {message && <Message msg={minhaprop} type="success" />}

            <Container customClass="start"  >
                {projects.length > 0 &&
                    projects.map((project,index) => (
                        <ProjectCard
                            name={project.name + " " + index}
                            id={project.id}
                            budget={project.budget}
                            category={project.category != undefined ? project.category.name : "nao inf"}
                            key={project.id}
                           
                        />
                        ))
                }
                <ProjectCard/>
            </Container>
        </div>
    );

}