import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons/faDiceFive"; 

import Photo from "/src/component/photo.jsx"

import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_APP_SUPABASE_API_KEY 
const supabase = createClient("https://whaftqpyevfgxqxdfixi.supabase.co", `${supabaseKey}`);

export default function App() {
    const [selectedPrompt, setSelectedPrompt] = React.useState({
        id: 1,
        prompts: "Overgrown Ruins"
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
        const promptNote = prompt[value].prompts
        setSelectedPrompt(prevData => ({
            ...prevData,
            id: value,
            prompts: promptNote

        }))
    }

    return (
        <main>
            <div className="col card">
                <h3 className="card__promptNumber">Drawing Prompt #{selectedPrompt.id}</h3>
                <h2 className="card__promptWord">{selectedPrompt.prompts}</h2>
                <Photo queryWord={selectedPrompt.prompts} />
                <button onClick={getRandomPrompt} aria-label="Generate new prompt"><FontAwesomeIcon icon={faDiceFive} /></button>
            </div>

        </main>
    )
}