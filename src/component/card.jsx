import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons/faDiceFive";

const Card = (props) => {
    return(
        <div className="col card">
                <h3 className="card__promptNumber">Drawing Prompt #{props.selectedPrompt.id}</h3>
                <h2 className="card__promptWord">{props.selectedPrompt.promptText}</h2>
                <img src={props.selectedPrompt.photoURL} alt={props.selectedPrompt.photoAlt} />
                <h2 className="card__photographer">Photo by {props.selectedPrompt.photographer} on Pexels</h2>
                <a href={props.selectedPrompt.photographerURL}>View {props.selectedPrompt.photographer}'s profile here</a>
                <button onClick={() => props.getRandomPrompt()} aria-label="Generate new prompt"><FontAwesomeIcon icon={faDiceFive} /></button>
            </div>
    )
}

export default Card