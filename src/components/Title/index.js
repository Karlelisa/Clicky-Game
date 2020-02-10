import React from "react";
import "./style.css";

function Title(props) {


    return <div className="col-md-12"><h1 className="title" >{props.children} </h1>;
    <h2 className="message"></h2>
        <p className="card-text"></p>
    </div>


}

export default Title;