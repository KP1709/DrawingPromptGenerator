import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons/faDiceFive";

const Card = (props) => {
    const { id, promptText, photoAlt, photographer, photographerURL, photoURL } = props.selectedPrompt
    const { getRandomPrompt } = props
    
    return (
        <div className="col card">
            <h3 className="card__promptNumber">Drawing Prompt #{id}</h3>
            <h2 className="card__promptWord">{promptText}</h2>
            <img src={photoURL} alt={photoAlt} />
            <h2 className="card__photographer">Photo by {photographer} on Pexels</h2>
            <a href={photographerURL}>View {photographer}'s profile here</a>
            <button onClick={() => getRandomPrompt()} aria-label="Generate new prompt"><FontAwesomeIcon icon={faDiceFive} /></button>
        </div>
    )
}

export default Card