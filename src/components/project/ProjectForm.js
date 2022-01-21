import React from "react";
import Input from "../form/Input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";
import styles from "./ProjectForm.module.css";

export default function ProjectForm({ handleSubmit,btnText,projectData }) {
    const [categories, setCategories] = React.useState([]);
    const [project, setProject] = React.useState(projectData || {});



    //Precisei por no useEffect para executar só uma vez o fetch ( lembrando que o useEffect funciona comom um PageLoad)
    //Fora do useEffect o React fica executando várias vezes o fetch pra ver se houve mudança 
    React.useEffect(() => {
        fetch("http://localhost:5001/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) =>
                setCategories(data))
            .catch((err) => console.log("o erro do fetch foi: "+ err));
    },[] // Precisa deste segundo argunebto de array vazio pra ele carregar o json
    );

    const submit = (e) => {
        alert("botão submit");
     
        e.preventDefault();
      //  console.log(project);
      
        handleSubmit(project);

    }

    function handleChange(e) {
       // console.log("name "+ e.target.name+ " value "+ e.target.value);
        setProject({ ...project, [e.target.name]: e.target.value });
        /*
         ...project => com a desestrutração spread, os valores que foram setados a cada digitação vão sendo 
          acumulados no objeto project
         
         [e.target.name] => a propriedade é adicionada no objeto project e esta propriedade vai ter o nome que veio
          do input, independente qual input seja (name , budget, etc)

           : e.target.value : esta nova propriedade que foi criada acima terá o valor digitado no input (value)
         */

       // console.log(project)
    }
    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        });
    }

    return (
        <form onSubmit={submit } className={styles.form }>
            {/* <input type="text" placeholder="nome projeto"/>*/}
            <Input
                name="name"
                type="text"
                labelText="insira nome proj"
                placeHolder="nome proj"
                handleOnChange={handleChange}
                value={project.name ? project.name : ""} // Usado no edit
            />
            <Input
                name="budget"
                type="number"
                labelText="insira orçamento total"
                placeHolder="orcamento"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ""}
            />
            <Select
                name="category_id"
                labelText="selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ""} // Sem esta linha o valor do state é atualizado mas o
                                                                    // select box fica sempre mostrando "selecione opção"
            />
            {/*<SubmitButton  labelText={ btnText}/>*/}
            <button type="submit">btn {btnText}</button>

        </form>
    );

}