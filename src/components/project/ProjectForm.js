import React from "react";

export default function ProjectForm() {
    return (
        <div>
            <input type="text" placeholder="nome projeto"/>
            <input type="number" placeholder="orçamento total" />
            <select name="category_id">
                <option>Selecione Categoria</option>
            </select>
            <input type="submit" value="Cadastrar projeto"/>
        </div>
    );

}