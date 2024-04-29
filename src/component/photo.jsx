import React from "react";
import { createClient } from "pexels"

const pexelsAPI = import.meta.env.VITE_APP_PEXELS_API_KEY
const client = createClient(`${pexelsAPI}`)


export default function Photo(props) {
    const [selectedPhoto, setSelectedPhoto] = React.useState({
        photographer: "",
        photographerURL: "",
        photoURL: "",
        altTag: ""

    })

    async function getPhoto() {
        let query = props.queryWord;
        let orientation = 'landscape';
        let out = await client.photos.search({ query,orientation, per_page: 1 })
        if (out.total_results > 0) {
            let path = out.photos[0]

            setSelectedPhoto({
                photographer: path.photographer,
                photographerURL: path.photographer_url,
                photoURL: path.src.landscape,
                altTag: path.alt
            })
        }
    }

    React.useEffect(() => {
        getPhoto()
    }, [props.queryWord])

    return (
        <div className="col card">
            <img src={selectedPhoto.photoURL} alt={selectedPhoto.altTag} />
            <h2 className="card__photographer">Photo by {selectedPhoto.photographer} on Pexels</h2>
            <a href={selectedPhoto.photographerURL}>View {selectedPhoto.photographer}'s profile here</a>
        </div>
    )
}