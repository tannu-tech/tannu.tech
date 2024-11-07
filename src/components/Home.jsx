import React from "react";

export default function Home() {
    return (
        <div className="homepage">
            <div>
                <h1>Hello <br /> I am Tannu </h1>
                <h3>Frontend developer</h3>
                
            </div>

            <div className='myimgcenter'>
                <img id="me" src="./me1.png" alt="React Logo" />
            </div>
         
         <nav>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
         </nav>

        </div>
        
    )
}