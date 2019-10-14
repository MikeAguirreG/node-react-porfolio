import React, { useState } from 'react'
import axios from 'axios';
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa'
import { IconContext } from "react-icons";
// import { DiMysql, DiMongodb, DiReact, DiNodejs, DiGit, DiJavascript1 ,DiPhp ,DiCss3,DiSass ,DiJava, DiCodeigniter, DiBootstrap } from 'react-icons/di';





const Portfolio = () => {


    const [projects, setProjects] = useState([]);
    const fetchProjects = () => {
        axios.get('/api/catalog')
            .then(res => setProjects(res.data))
            .catch(err => console.log(err))
    }
    React.useEffect(() => fetchProjects(), []);
    //Icon Syzing
    const styleIcons = {
        size: '1em'
    }
    const getCatalogs = () => {
        return projects && (
            projects.map((project, index) => (
                <div className='flex-item portfolio-item dib br3 pa2 ma2 h-40 w-20 grow bw2 shadow-6' key={index}>
                    <article className="" >
                        <img src={`${process.env.PUBLIC_URL}/assets/images/${project.imageName}`} className="db br2 br--top h-60" alt="Miguel Aguirre"></img>
                        <div className="pa1 pb3-ns" style={{ overflow: 'auto' }}>
                            <div className="dt w-100 mt1">
                                <div className="dtc">
                                    <h1 className="f6 f4-ns mv0">{project.name}</h1>
                                </div>
                            </div>
                            <p className="f7 w-100 lh-copy measure mt2 gray">
                                {project.description}
                            </p>
                            <div className="dt w-100 mt1">
                                <div className="dtc">
                                    <h3 className="f7 f4-ns mv0">Stack</h3>
                                </div>
                            </div>
                            <p className="f7 w-100 lh-copy measure mt2 gray">
                                {project.tecnologies.map((e) => `#${e} `)}
                            </p>
                            <div className="dt w-100 mt1">
                                <div className="dtc">
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
                    </article>
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

