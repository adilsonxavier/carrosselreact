import React from "react";
import styles from "../estilos/Home.module.css";
import savings from "../../img/savings.svg";

function Home() {
    return (
        <section className ={styles.home_container }>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p> comece agora</p>
            <a href="/">Criar Projeto</a>
            <img src={savings} alt="aa"/>
       </section>

        );
}
export default Home;