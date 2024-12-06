import React  from "react";
import { useState } from "react";

import CircularProgress from "./CircularProgress ";



function Skiils()  {

  // const [percent, setPercent] = useState(50);

  const percent = {
    ui: 50,
    bootstarp: 70,
    frontEnd: 90,
    backEnd: 30

  
  }



 

    return (
    <>
  <div className="myskills">

    <h2 className="medio">My Skills</h2>
  
    {/* < img src="myskillwave.png"    className="wave"    alt="" /> */}





  <div className="head-skiils">
      </div>
  <div className="box-skiils">
    <div className="main-line">
        <h2>HTML</h2>
        <progress className="file" value="60" max="100"> 60% </progress>
        <h2>CSS</h2>
        <progress className="file" value="70" max="100"> 70% </progress>
        <h2>UI/UX</h2>
        <progress className="file" value="88" max="100"> 88% </progress>
    </div>
    <div class="progress-container">
    <div class="progress-circle-container">


    {/* <div class="progress-circle" data-color="green" data-percent="95">
      <span>95%</span>
    </div> */}
    

  

  
    <CircularProgress percent={percent.ui} />

    <p className="nn">UX/UI</p>
  </div>
  <div class="progress-circle-container">
    {/* <div class="progress-circle" data-color="green" data-percent="95">
      <span>85%</span>
    </div> */}
      <CircularProgress percent={percent.bootstarp} />
    <p className="nn">Bootstarp</p>
  </div>

  <div class="progress-circle-container">
  

<CircularProgress percent={percent.frontEnd} />
    <p className="nn">Front-end</p>
  </div>
  <div class="progress-circle-container">
    {/* <div class="progress-circle" data-color="green" data-percent="95">
      <span>15%</span>
    </div> */}
    <CircularProgress percent={percent.backEnd} />
    <p className="nn">Back-end</p>
  </div></div>
    
  </div>
 
  </div>
    </>
    )
  }
    export default Skiils