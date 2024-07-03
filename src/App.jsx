import React from "react"
import UnableToConnect from "./reusableFunctions/UnableToConnect";
import Card from "./component/card"

export default function App() {
    const [prompts, setPrompts] = React.useState([])
    const [databaseLoaded, setDatabaseLoaded] = React.useState(false)

    React.useEffect(() => {
        async function getPrompt() {
            setDatabaseLoaded(false)
            try {
                const res = await fetch("/.netlify/functions/supabase")
                const data = await res.json()
                setPrompts(data.data)
                setDatabaseLoaded(true)
            }
            catch (err) {
                UnableToConnect()
            }
        }
        getPrompt()
    }, [])

    const [selectedPrompt, setSelectedPrompt] = React.useState({
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
        else if (databaseLoaded === false) {
            UnableToConnect()
        }
    }

    return (
        <main>
            <Card key={selectedPrompt.id} selectedPrompt={selectedPrompt} getRandomPrompt={getRandomPrompt}/>
        </main>
    )
}