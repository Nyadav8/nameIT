import React from "react";
import './Header.css';

const Header=(props)=>{
    return(
        <div className="head-container">
            <img  src="https://www.pinclipart.com/picdir/big/557-5572763_student-chromebook-clipart-cartoon-kid-on-chromebook-png.png" 
            className={`head-image ${props.headerExpande
            ?'head-image-expanded':
            'head-image-contracted'}`}></img>
            <h1 className="head-text">
                {props.headTitle}
            </h1>
        </div>
    )
}
export default Header;