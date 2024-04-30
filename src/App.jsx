import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons/faDiceFive"; 


import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_APP_SUPABASE_API_KEY 
const supabase = createClient("https://whaftqpyevfgxqxdfixi.supabase.co", `${supabaseKey}`);

export default function App() {
    const [selectedPrompt, setSelectedPrompt] = React.useState({
        id: 1,
        prompts: "Overgrown Ruins",
        photoURL: "https://images.pexels.com/photos/13074007/pexels-photo-13074007.jpeg",
        photoAlt:"Ruins of a Castle in a Jungle Overgrown with Bushes",
        photographer: "Yusron El Jihan",
        photographerURL: "https://www.pexels.com/@yusronell/"


    })

    const [prompt, setPrompts] = React.useState([])

    async function getPrompt() {
        let { data } = await supabase
            .from('DrawingPrompts')
            .select('*')
        console.log(data)
        setPrompts(data)
    }

    React.useEffect(() => {
        getPrompt()
    }, [])

    function getRandomPrompt() {
        let value = Math.floor(Math.random() * (prompt.length - 1) + 1);
        setSelectedPrompt(prevData => ({
            ...prevData,
            id: value,
            prompts: prompt[value].prompts,
            photoURL: prompt[value].photoURL,
            photoAlt: prompt[value].photoAlt,
            photographer: prompt[value].photographer,
            photographerURL:prompt[value].photographerURL
        }))
    }

    return (
        <main>
            <div className="col card">
                <h3 className="card__promptNumber">Drawing Prompt #{selectedPrompt.id}</h3>
                <h2 className="card__promptWord">{selectedPrompt.prompts}</h2>
                <img src={selectedPrompt.photoURL} alt={selectedPrompt.photoAlt} />
                <h2 className="card__photographer">Photo by {selectedPrompt.photographer} on Pexels</h2>
                <a href={selectedPrompt.photographerURL}>View {selectedPrompt.photographer}'s profile here</a>
                <button onClick={getRandomPrompt} aria-label="Generate new prompt"><FontAwesomeIcon icon={faDiceFive} /></button>
            </div>

        </main>
    )
}