import { useState, useEffect } from "react"
import UnableToConnect from "./reusableFunctions/UnableToConnect";
import Card from "./component/card"

export default function App() {
    const [prompts, setPrompts] = useState([])
    const [databaseLoaded, setDatabaseLoaded] = useState(false)

    useEffect(() => {
        async function getPrompt() {
            setDatabaseLoaded(false)
            try {
                const res = await fetch("/.netlify/functions/supabase")
                const data = await res.json()
                if (data.data === null) {
                    setDatabaseLoaded(false)
                    return UnableToConnect()
                }
                else {
                    setPrompts(data.data)
                    setDatabaseLoaded(true)
                }
            }
            catch (err) {
                UnableToConnect()
            }
        }
        getPrompt()
    }, [])

    const [selectedPrompt, setSelectedPrompt] = useState({
        id: 27,
        promptText: "Overgrown Ruins",
        photoURL: "https://images.pexels.com/photos/13074007/pexels-photo-13074007.jpeg",
        photoAlt: "Ruins of a Castle in a Jungle Overgrown with Bushes",
        photographer: "Yusron El Jihan",
        photographerURL: "https://www.pexels.com/@yusronell/"
    })

    function getRandomPrompt() {
        if (databaseLoaded) {
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
        else UnableToConnect()

    }

    return (
        <main>
            <Card
                key={selectedPrompt.id}
                selectedPrompt={selectedPrompt}
                getRandomPrompt={getRandomPrompt} />
        </main>
    )
}