import React  from "react";


const projects = [
    {
      id: 1,
      title: 'Count system',
      icons : '📚',
      link : 'https://simplejsapp1.netlify.app/'
    },
  
    {
      id: 2,
      title: 'Fashion',
      icons : '👗',
      link : 'https://ridashopping.netlify.app'
    },
    
// new

// end

    {
      id: 3,
      title: 'Game',
      icons : '🎮',
      link : 'https://tannugame.netlify.app/home'
    },
      {
      id: 1,
      title: 'Readaa',
      icons : '📚',
      link : 'https://readaa.com'
    },
    {
      id: 2,
      title: 'Calculater',
      icons : '🧮',
      link : 'https://tannuclcs.netlify.app'
    },
    {
      id: 3,
      title: 'Scroe Borde',
      icons : '🎲',
      link : 'https://scorebordt.netlify.app/'
    }
  ]
  
  
  const projectcard = projects.map(item => {
    return(
      <div>
         <h1>{item.icons}</h1>
         <h2>{item.title}</h2>
         <button><a href={item.link} target='_blank'>Check out</a></button>
      </div>
    )
  })

  

export default function Projects() {
    return (
      <div className="container">
        <div className="myprojectsection">
            <h3>My Projects</h3>
            <div className="projects">
                {projectcard}
            </div></div>
        </div>
    )
}