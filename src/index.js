import React from "react";
import ReactDOM from "react-dom";
require('file-loader?name=[name].[ext]!./index.html'); // a ausência desta linha gera o erro de directory listing (mostrar o diretório ao invez da página index.html)


ReactDOM.render(
    <>
        ola mundo
    </>,
    document.getElementById("app")
);