import React, { useState } from 'react'
import axios from 'axios';
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa'
import { IconContext } from "react-icons";

const Portfolio = () => {
    //Setting up states.
    const [projects, setProjects] = useState([]);
    const fetchProjects = () => {
        axios.get('/api/catalog')
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    }
    React.useEffect(() => fetchProjects(), []);
    //Icon Syzing
    const styleIcons = {
        size: '1.2em'
    }
    const getCatalogs = () => {
        return projects && (
            projects.map((project, index) => (
                <div className="flex-item portfolio-item dib br3 ma2 grow bw2 shadow-5" key={index}>
                <img className='br2 h-50' src={`${process.env.PUBLIC_URL}/assets/images/${project.imageName}`} alt={project.name}/>
                <div className='h-50 f6 f4-ns'>
                    <h2 className='f4'>{project.name}</h2>
                    <p className='f7 gray'>{project.description}</p>
                    <h2 className='f5'>Stack</h2>
                    <p className='f7 gray'>{project.tecnologies.map((e) => `#${e} `)}</p>
                    <div className="tc">
                         <IconContext.Provider value={styleIcons}>
                             <a href={project.link}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className="flex-item pa2"
                                 title='Try it alive!'
                             >
                                 <FaExternalLinkAlt />
                             </a>
                             <a href={project.git}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className="flex-item pa2"
                                 title='Check some code!'
                             >
                                 <FaGithubSquare />
                             </a>
                         </IconContext.Provider>
                    </div>
                </div>
            </div>
            ))

        )
    }


    return (
        <div className='flex-container'>
            {getCatalogs()}
        </div>
    )


}
export default Portfolio;

