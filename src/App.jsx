import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons/faDiceFive";

export default function App() {
    const [prompts, setPrompts] = React.useState([])
    
    const [selectedPrompt, setSelectedPrompt] = React.useState({
        id: 27,
        promptText: "Overgrown Ruins",
        photoURL: "https://images.pexels.com/photos/13074007/pexels-photo-13074007.jpeg",
        photoAlt: "Ruins of a Castle in a Jungle Overgrown with Bushes",
        photographer: "Yusron El Jihan",
        photographerURL: "https://www.pexels.com/@yusronell/"
    })

    React.useEffect(() => {
        async function getPrompt() {
            const res = await fetch("/.netlify/functions/supabase")
            const data = await res.json()
            setPrompts(data.data)
        }
        getPrompt()
    }, [])

    function getRandomPrompt() {
        let value = Math.ceil(Math.random() * prompts.length - 1);
        setSelectedPrompt(prevData => ({
            ...prevData,
            id: value,
            promptText: prompts[value].promptText,
            photoURL: prompts[value].photoURL,
            photoAlt: prompts[value].photoAlt,
            photographer: prompts[value].photographer,
            photographerURL: prompts[value].photographerURL
        }))
    }

    return (
        <main>
            <div className="col card">
                <h3 className="card__promptNumber">Drawing Prompt #{selectedPrompt.id}</h3>
                <h2 className="card__promptWord">{selectedPrompt.promptText}</h2>
                <img src={selectedPrompt.photoURL} alt={selectedPrompt.photoAlt} />
                <h2 className="card__photographer">Photo by {selectedPrompt.photographer} on Pexels</h2>
                <a href={selectedPrompt.photographerURL}>View {selectedPrompt.photographer}'s profile here</a>
                <button onClick={getRandomPrompt} aria-label="Generate new prompt"><FontAwesomeIcon icon={faDiceFive} /></button>
            </div>

        </main>
    )
}