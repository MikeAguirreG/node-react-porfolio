import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelopeOpenText, FaFileDownload } from 'react-icons/fa';
import { IconContext } from "react-icons";


const Page1 = () => {

    const styleIcons = {
        color: 'white',
        size: '1.5em',
        className: 'bounce-top'
    }

    return (<div>
    <div className='column-item'>
             <h2>Miguel Aguirre | Software Developer</h2>
             </div>
        <IconContext.Provider value={styleIcons}>
            <div className='flex-container column-item'>
                <div className="row">
                    <a href='https://github.com/MikeAguirreG'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="flex-item"
                    >
                        <FaGithub />
                    </a>
                </div>
                <div className="row">
                    <a href='https://www.linkedin.com/in/miguelaguirreg/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="flex-item"
                    >
                        <FaLinkedin />
                    </a>
                </div>
                <div className="row">
                    <a href='mailto:agmaug@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="flex-item"
                    >
                        <FaEnvelopeOpenText />
                    </a>
                </div>
                <div className="row">
                    <a href="https://github.com/MikeAguirreG/resume_files/raw/master/Resume_MiguelAguirreG.pdf"
                        target="_blank"
                        rel='noopener noreferrer'
                        className="flex-item"
                        download
                    >
                        <FaFileDownload />
                    </a>
                </div>
            </div>
        </IconContext.Provider>
        <div className='column-item'>
       <h4>Please, take a look at my work!  </h4>
       </div>
    </div>
    )
}
export default Page1;