import React from "react";
import "./Nmaecard.css"
const name='https://www.namecheap.com/domains/registration/results/?domain=';
const Namecard=({res})=>{
    return(
        <a href={`${name}${res}`}>
            <div className="result-name-card">
            <p className="rescard">
                {res}
            </p>
        </div>
        </a>
    )
}
export default Namecard;