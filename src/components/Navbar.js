import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 shadow-md text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="font-semibold text-2xl">Entertainment Ratings</div>
                    <div className="flex space-x-4">
                        <Link to="/" className="hover:text-gray-200">
                            Home
                        </Link>
                        <Link to="/new-rating" className="hover:text-gray-200">
                            New Rating
                        </Link>
                        <Link to="/profile" className="hover:text-gray-200">
                            Profile
                        </Link>
                        <Link to="/signup" className="hover:text-gray-200">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
