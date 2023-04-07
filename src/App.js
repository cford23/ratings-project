import React from "react"
import './App.css'
import { Navbar } from './components'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, NewRating, Profile, SignUp } from './pages'

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/new-rating" element={<NewRating />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
