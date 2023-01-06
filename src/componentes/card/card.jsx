import React from "react";
import "./card.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const Titulo = props.titulo ? props.titulo : "titulo";
    return(
        <div className="card">
            <h2>{Titulo}</h2>
            <p>Descrição do produto...</p>
            <img src={require("../../images/biscuit.png")} alt="card-image" />
            <p>10,00</p>
        </div>
    )
}