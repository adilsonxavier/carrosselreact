import React from "react";
import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ProjectCard({ id,name,budget,category, handleRemove}) {

   // className = {`${styles[]}`}

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
                <button><BsFillTrashFill/> Remover</button>
           </div>
        </div>
    );

}