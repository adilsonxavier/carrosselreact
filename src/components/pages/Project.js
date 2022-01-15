import React from "react";
import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import Loading from "../layout/Loading";
import Container from "../layout/Container";

export default function Project() {
    const { id } = useParams();
  //  const { id, nome } = useParams();  com mais de um parânetro

  //  console.log("meu id é" + id);
    //console.log("meu nome é" + nome);


    const [project, setProject] = React.useState({});
    const [showProjectForm, setShowProjectForm] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5001/projects/${id}`, {
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then((resp) => resp.json())
                .then((data) => setProject(data))
                .catch((erro) => console.log(erro));
        }, 500);
    }, [id]
    );

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return (
        <>
            {project.name
                ? (
                    <div className={ styles.project_details}>
                        <Container customClass="column">
                            <div className={ styles.details_container }>
                                <h1>Projeto: {project.name}</h1>
                                <button className={styles.btn } onClick={toggleProjectForm} >{showProjectForm ? "Fechar" : " Editar"}</button>
                                {
                                    showProjectForm ? (
                                        <div className={ styles.project_info} >
                                            <p>Detalhes do Projeto</p>
                                        </div>
                                    ) :
                                        (
                                            <div className={styles.project_info} >
                                                <p>
                                                    <span>Categoria:  </span>{project.category.name}
                                                </p>
                                                <p>
                                                    <span>Total do Orçamento  </span> R$ {project.budget}
                                                </p>
                                                <p>
                                                    <span>Total utilizado  </span> R$ {project.cost}
                                                </p>
                                            </div>
                                        )
                                }
                            </div>


                        </Container>
                  </div>
              
                )
                : (<Loading/>)
            }
            
        </>
        
        );

}