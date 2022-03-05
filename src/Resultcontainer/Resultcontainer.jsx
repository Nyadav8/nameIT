import React from "react";
import "./Resultcontainer.css";
import Namecard from "../Namecard/Namecard";

const Resultcontainer=(props)=>{
    const suggest=props.result.map((res) =>{
        return <Namecard key={res} res={res} />;
    })
    return(
        <div className="container">
            <p>{suggest}</p>
        </div>
    )
}

export default Resultcontainer;