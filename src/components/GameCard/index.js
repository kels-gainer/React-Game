import React from "react";
import "./style.css";

function GameCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img onClick={()=>props.clickCount(props.id)} className="opacity" alt={props.name} src={props.image}></img>
            </div>
        </div>
    );
}

export default GameCard;