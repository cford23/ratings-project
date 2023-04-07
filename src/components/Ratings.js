import React, { useState, useEffect } from 'react'
import Rating from './Rating'
import supabase from '../supabaseClient'

function Ratings() {
    const [ratings, setRatings] = useState([])

    useEffect(() => {
        async function fetchRatings() {
            const { data, error } = await supabase
                .from('ratings')
                .select(`
                    *,
                    users (
                        id,
                        username,
                        first_name
                    ),
                    titles (
                        id,
                        name,
                        image_path,
                        types (
                            id,
                            name
                        )
                    )
                `)
                .order('created_at', { ascending: false })
            if (error) {
                console.log(error)
            }
            else {
                setRatings(data)
            }
        }
        fetchRatings()
    }, [])

    return (
        <div className='ratings'>
            {ratings.map((rating) => (
                <Rating key={rating.id} rating={rating} />
            ))}
        </div>
    )
}

export default Ratings
