import React from "react";
import styles from "./Project.module.css";
import { useParams } from "react-router-dom";


export default function Project() {
    const { id } = useParams();
  //  const { id, nome } = useParams();  com mais de um parânetro

  //  console.log("meu id é" + id);
    //console.log("meu nome é" + nome);


    const [project, setProject] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:5001/projects/${id}`, {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) => setProject(data))
            .catch((erro) => console.log(erro));


    },[id]

    );
    return (
        <p>Projeto {project.name }</p>
        );

}