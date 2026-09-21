import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home(){
    const navigate=useNavigate();
    return(
        <section>
            <h1>Hi,I'm Raviteja</h1>
            <h2>Frontend Developer.</h2>
            <p>I’m Raviteja, a Computer Science graduate with basic knowledge of Java and experience with JavaScript, HTML, and CSS. I’m currently learning React and enjoy building responsive, user-friendly web applications.</p>
            <button onClick={()=>navigate("/projects")}>Projects</button>
            
        </section>
    )
}

export default Home;