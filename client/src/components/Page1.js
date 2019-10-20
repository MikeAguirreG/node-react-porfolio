import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelopeOpenText, FaFileDownload } from 'react-icons/fa';
import { IconContext } from "react-icons";


const Page1 = () => {

    const styleIcons = {
        color: 'white',
        size: '4em',
        className : ''
        // className: 'bounce-top'
    }

    return (<div className='page-1'>
                <div className='column-item name'>
                <h1>Miguel Aguirre | Software Developer</h1>
                </div>
                <div className='column-item row-icons'>
                <IconContext.Provider value={styleIcons}>
                        <div className="icon">
                            <a href='https://www.linkedin.com/in/miguelaguirreg/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className="flex-item"
                                title="LinkedIn profile."
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className="icon">
                            <a href='https://github.com/MikeAguirreG'
                                target='_blank'
                                rel='noopener noreferrer'
                                className="flex-item"
                                title="Github account."
                            >
                                <FaGithub />
                            </a>
                        </div>
                        <div className="icon">
                            <a href='mailto:agmaug@gmail.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className="flex-item"
                                title='Email me: agmaug@gmail.com'
                            >
                                <FaEnvelopeOpenText />
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://github.com/MikeAguirreG/resume_files/raw/master/Resume_MiguelAguirreG.pdf"
                                target="_blank"
                                rel='noopener noreferrer'
                                className="flex-item"
                                title='Download my resume here.'
                                download
                            >
                                <FaFileDownload />
                            </a>
                        </div>
                </IconContext.Provider>
                </div>
                <div className='column-item phrase'>
                <h2>Please, take a look at my work!  </h2>
                </div>
                
    </div>
    )
}
export default Page1;