import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js";
import UnableToConnect from "./reusableFunctions/UnableToConnect";
import { data as localData } from "./data/localData.js"
import Card from "./component/card"

const supabaseUrl = import.meta.env.VITE_SUPABASE_DATABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
    const [isLocalData,] = useState(false) // Change here to use local data
    const [promptLoaded, setPromptLoaded] = useState(false)
    const [numberOfPrompts, setNumberOfPrompts] = useState(0)
    const [randomNumber, setRandomNumber] = useState(0)
    const [selectedPrompt, setSelectedPrompt] = useState({
        id: randomNumber,
        promptText: "",
        photoURL: "",
        photoAlt: "",
        photographer: "",
        photographerURL: ""
    })

    useEffect(() => {
        async function getNumberOfPrompts() {
            try {
                const { data } = await supabase
                    .from('DrawingPrompts')
                    .select('id');

                setNumberOfPrompts(data.length)
            }
            catch (err) {
                UnableToConnect()
            }
        }
        if (!isLocalData) {
            getNumberOfPrompts()
        }
        else if (isLocalData) {
            setNumberOfPrompts(localData.length)
        }
    }, [isLocalData])

    useEffect(() => {
        if (numberOfPrompts) {
            getRandomPrompt()
        }
    }, [numberOfPrompts])

    useEffect(() => {
        async function getPrompt() {
            setPromptLoaded(false)
            try {
                const { data } = await supabase.from("DrawingPrompts").select('*').eq('id', randomNumber);

                if (data.length === 0) {
                    throw Error
                }

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

        function getPromptLocalData() {
            setPromptLoaded(false)
            const promptData = localData.find(prompt => prompt.id === randomNumber)
            setSelectedPrompt(prevData => ({
                ...prevData,
                id: randomNumber,
                promptText: promptData.promptText,
                photoURL: promptData.photoURL,
                photoAlt: promptData.photoAlt,
                photographer: promptData.photographer,
                photographerURL: promptData.photographerURL
            }))
            setPromptLoaded(true) // Set this to false to simulate retry interface if using local data
        }

        if (randomNumber && !isLocalData) {
            getPrompt()
        }
        else if (randomNumber && isLocalData) {
            getPromptLocalData()
        }
    }, [randomNumber])

    function getRandomPrompt() {
        setRandomNumber(Math.floor(Math.random() * (numberOfPrompts - 1 + 1) + 1))
    }

    const MainDisplay = () => {
        const [showRetry, setShowRetry] = useState(false)

        if (promptLoaded && !showRetry) {
            return <Card
                key={selectedPrompt.id}
                selectedPrompt={selectedPrompt}
                getRandomPrompt={getRandomPrompt}
            />
        }

        else {
            setTimeout(() => {
                setShowRetry(true)
            }, 1000)

            return showRetry && <>
                <p>Unable to load prompt</p>
                <button className='retry' onClick={getRandomPrompt} data-test="retry-button">Retry</button>
            </>

        }
    }

    return (
        <main>
            <MainDisplay />
        </main>
    )
}