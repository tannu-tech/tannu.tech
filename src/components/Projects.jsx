import React  from "react";


const projects = [
    {
      id: 1,
      title: 'Readaa',
      icons : '📚',
      link : 'https://readaa.com'
    },
    {
      id: 2,
      title: 'abx company',
      icons : '👔',
      link : 'https://readaa.com'
    },
    {
      id: 3,
      title: 'Naturify',
      icons : '🌿',
      link : 'https://readaa.com'
    },
      {
      id: 1,
      title: 'Readaa',
      icons : '📚',
      link : 'https://readaa.com'
    },
    {
      id: 2,
      title: 'abx company',
      icons : '👔',
      link : 'https://readaa.com'
    },
    {
      id: 3,
      title: 'Naturify',
      icons : '🌿',
      link : 'https://readaa.com'
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
        <div className="myprojectsection">
            <h3>My Projects</h3>
            <div className="projects">
                {projectcard}
            </div>
        </div>
    )
}