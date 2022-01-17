import React from "react";
import styles from "../project/ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ServiceCard({ name,cost,description,id, handleRemove,customClass}) {

   // className = {`${styles[]}`}
    const remove  = (e) => {
        e.preventDefault();
        handleRemove(id,cost);
        /* o handleRemove na verdade executa a função removeProject(id) no elemento pai 
            Projects.js que efetivamente exclui o projeto chamando o delete da API via fetch*/

    }

    return (
        <div className={`${styles.project_card} ${styles[customClass]} `}>
            <h4>{name}</h4>
            <p>
                <span>Id:</span>&nbsp;{id}
            </p>
            <p>
                <span>Custo:</span>&nbsp;R${cost}
            </p>
            <p>
                <span>Descrição:</span>&nbsp;{description}
            </p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}><BsFillTrashFill /> Remover</button>
                {/* veja que eu não uso diretamente o método handleRemove que veio como argumento da função ( e que 
                 * foi chamado no componente Projects.js . Ao invéz disso eu uso o método remove(criado mais acima) e ele
                 * é que chama o  handleRemove*/}
           </div>
        </div>
    );

}