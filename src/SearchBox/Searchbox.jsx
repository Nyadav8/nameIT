import React from "react";
import './Searchbox.css';

const Searchbox = (props)=> {
    return(
    <div className="Search-container">
        <input onChange={(event)=>props.onInputChange(event.target.value)} 
        placeholder="Type Keywords" 
        className="search-input"></input>
    </div>)
}
export default Searchbox;