import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js";
import UnableToConnect from "./reusableFunctions/UnableToConnect";
import Card from "./component/card"

const supabaseUrl = import.meta.env.VITE_SUPABASE_DATABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export default function App() {
    const [promptLoaded, setPromptLoaded] = useState(false)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * (30 - 1 + 1) + 1))
    const [selectedPrompt, setSelectedPrompt] = useState({
        id: randomNumber,
        promptText: "",
        photoURL: "",
        photoAlt: "",
        photographer: "",
        photographerURL: ""
    })

    useEffect(() => {
        async function getPrompt() {
            setPromptLoaded(false)
            try {
                const { data } = await supabase.from("DrawingPrompts").select('*').eq('id', randomNumber);
                setSelectedPrompt(prevData => ({
                    ...prevData,
                    id: randomNumber,
                    promptText: data[0].promptText,
                    photoURL: data[0].photoURL,
                    photoAlt: data[0].photoAlt,
                    photographer: data[0].photographer,
                    photographerURL: data[0].photographerURL
                }))
                setPromptLoaded(true)
            }
            catch (err) {
                UnableToConnect()
            }
        }
        getPrompt()
    }, [randomNumber])

    function getRandomPrompt() {
        if (promptLoaded) {
            setRandomNumber(Math.floor(Math.random() * (30 - 1 + 1) + 1))

        }
    }

    return (
        <main>
            <Card
                key={selectedPrompt.id}
                selectedPrompt={selectedPrompt}
                getRandomPrompt={getRandomPrompt}
            />
        </main>
    )
}