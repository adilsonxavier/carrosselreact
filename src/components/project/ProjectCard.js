import React from "react";
import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ProjectCard({ id,name,budget,category, handleRemove}) {

   // className = {`${styles[]}`}
    const remove  = (e) => {
        e.preventDefault();
        handleRemove(id);
        /* o handleRemove na verdade executa a função removeProject(id) no elemento pai 
            Projects.js que efetivamente exclui o projeto chamando o delete da API via fetch*/

    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span>&nbsp;R${budget}
            </p>
            <p className={ styles.category_text }>
                <span className={category ? `${styles[category.toLowerCase()]}` : ''}></span>{category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to="/" ><BsPencil /> editar </Link>
                <button onClick={remove}><BsFillTrashFill /> Remover</button>
                {/* veja que eu não uso diretamente o método handleRemove que veio como argumento da função ( e que 
                 * foi chamado no componente Projects.js . Ao invéz disso eu uso o método remove(criado mais acima) e ele
                 * é que chama o  handleRemove*/}
           </div>
        </div>
    );

}