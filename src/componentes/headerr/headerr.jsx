import React from "react";
import './headerr.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div className="App-header">
            <img src={require("../../images/biscuit.png")}/>
            <h1>Carol Mathias Biscuit</h1>
        </div>
    )
}