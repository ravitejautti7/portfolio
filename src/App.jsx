import React from "react";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App(){


    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
        </div>
        

    )
}

export default App;


