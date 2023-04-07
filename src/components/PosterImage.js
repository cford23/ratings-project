import React, { useEffect, useState } from "react"
import supabase from "../supabaseClient"

function PosterImage({ imagePath }) {
    const [imageURL, setImageURL] = useState(null)

    useEffect(() => {
        async function fetchImageUrl() {
            const { data, error } = await supabase.storage
                .from('posters')
                .getPublicUrl(imagePath)
            if (error) {
                console.error(`Error fetching image URL: ${error}`)
            }
            else {
                if (!data.publicUrl.endsWith("null")) {
                    setImageURL(data.publicUrl)
                }
            }
        }
        fetchImageUrl()
    }, [imagePath])

    return (
        <div>
            {imageURL ? (
                <img
                    className="h-24 w-16 rounded-md object-cover"
                    src={imageURL}
                    alt="Poster"
                />
            ) : (
                <img
                    className="h-24 w-16 rounded-md object-cover"
                    src="https://via.placeholder.com/100x150"
                    alt="Poster"
                />
            )}
        </div>
    )
}

export default PosterImage
