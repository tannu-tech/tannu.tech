import React from "react";

export default function Home() {

const [fullbar, setfullbar] = React.useState(true)

function changeicon(){
    setfullbar(fullbar => !fullbar)
}

    return (
        
        <div className="homepage ">
            {/* <div className="togglekabap"> */}
            <div className="toggel" onClick={changeicon}>
                <span class="material-symbols-outlined">
                    {
                        fullbar ?  'close' : 'menu' 
                    }
                    </span> 

                   
                {/* </div> */}
            </div>
               

                    {fullbar ? <div className="fulltoggel animate__animated animate__fadeInRight">                
                        <nav id="phonenav">
                        <ul>
                            <li><span class="material-symbols-outlined">home</span></li>
                            <li><span class="material-symbols-outlined">
                                    collections_bookmark
                                    </span></li>
                            <li><span class="material-symbols-outlined">
                                stack_star
                                </span></li>
                            <li><span class="material-symbols-outlined">
                            assignment_ind
                            </span></li>
                        </ul>
                    </nav> 
                </div> : ''}   
                

            <div>
                <h1>Hello <br /> I am Tannu </h1>
                <h3>Frontend developer</h3>
                
            </div>

            <div className='myimgcenter'>
                <img id="me" src="./me1.png" alt="React Logo" />
            </div>
         
         <nav id="lappinav">
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