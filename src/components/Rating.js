import React, { useEffect, useState } from "react";
import PosterImage from "./PosterImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faGamepad, faTv, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }) {
    const [timeDiff, setTimeDiff] = useState(0)
    const [showReview, setShowReview] = useState(false)
    const postTime = new Date(rating.created_at)

    const handleReviewToggle = () => {
        setShowReview(!showReview)
    }

    const handleLike = () => {
        alert('You liked this rating!')
    }
    const handleComment = () => {
        alert('You want to comment on this rating!')
    }

    let titleIcon
    if (rating.titles.types.name === "Movie") {
        titleIcon = <FontAwesomeIcon icon={faFilm} />
    }
    else if (rating.titles.types.name === "Show") {
        titleIcon = <FontAwesomeIcon icon={faTv} />
    }
    else if (rating.titles.types.name === "Video Game") {
        titleIcon = <FontAwesomeIcon icon={faGamepad} />
    }

    useEffect(() => {
        function calculateTimeDiff() {
            const currentTime = new Date()
            const diffInMilliseconds = currentTime - postTime
            const minutes = Math.floor(diffInMilliseconds / 1000 / 60)
            setTimeDiff(minutes)
        }

        calculateTimeDiff()

        const interval = setInterval(() => {
            calculateTimeDiff()
        }, 1000 * 60)

        return () => {
            clearInterval(interval)
        }
    }, [postTime])

    function formatTimeDiff(minutes) {
        const hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)

        // Add in: Post was less than a minute ago
        if (minutes < 60) {
            // Rating was less than an hour ago
            return `${minutes}m`
        }
        else if (minutes >= 60 && hours < 24) {
            // Rating was over an hour ago, but less than a day ago
            return `${hours}h`
        }
        else if (hours >= 24 && days < 7) {
            // Rating was over a day ago, but less than a week ago
            return `${days}d`
        }
        else {
            // More than a week ago, display date but not year (for example: 4 Apr)
            const currentDate = new Date()
            const pastDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000)
            
            const day = pastDate.getDate()
            const month = pastDate.toLocaleString('en', { month: 'short' })
            const year = pastDate.getFullYear() !== currentDate.getFullYear() ? pastDate.getFullYear() : ''
            const formattedYear = year ? ` ${year}` : ''

            return `${day} ${month}${formattedYear}`
        }
    }

    return (
        <div className="movie-rating bg-white p-4 rounded-lg shadow-md w-full mb-4 relative">
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <PosterImage imagePath={rating.titles.image_path} />
                </div>
                <div className="flex-grow flex flex-col">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <div className="flex items-center">
                                    <span className="font-semibold text-lg">{rating.users.first_name}</span>
                                    <span className="text-gray-500 text-sm ml-2">
                                        @{rating.users.username.toLowerCase()}
                                    </span>
                                </div>
                                <div className="text-gray-500 text-2xl font-bold mt-1">
                                    {rating.score} / 10
                                </div>
                            </div>
                            <span className="font-semibold text-sm">{formatTimeDiff(timeDiff)}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{titleIcon}  {rating.titles.name}</h3>
                            {rating.review && (
                                <>
                                    <button
                                        className="mt-2 text-blue-600 font-semibold"
                                        onClick={handleReviewToggle}
                                    >
                                        {showReview ? 'Close review' : 'See review'}
                                    </button>
                                    {showReview && (
                                        <div className="mt-2 text-gray-800">
                                            <p>{rating.review}</p>
                                        </div>
                                    )}
                                </>
                            )}
                    </div>
                    <div className="flex items-center mt-auto space-x-2">
                        <button onClick={handleLike} className="focus:outline-none">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <button onClick={handleComment} className="focus:outline-none">
                            <FontAwesomeIcon icon={faComment} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating
