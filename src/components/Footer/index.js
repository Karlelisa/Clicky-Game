import React from "react";
import "./style.css";

function Footer(props) {


    return <div className="col-md-12" className="card-footer text-muted">
        {/* <h1 className="title" >{props.children} </h1>; */}
        <a href="https://github.com/Karlelisa"
            target="_blank">
            <i class="fab fa-github mr-2"></i>Karlelisa Wesley {props.children}
        </a>
    </div>

}

export default Footer;