import React from 'react'
import { FaLinkedin , FaGithub , FaEnvelopeOpenText, FaFileDownload, FaArrowAltCircleRight} from 'react-icons/fa';
import DynamicText from './DynamicText';

import { IconContext } from "react-icons";


const Page1 = () => {

const styleIcons= {
    color: 'white',
    size: '1.5em',
    className: 'icons-contact'
}

    return (<div  className='page-1'>
             <h2>Miguel Aguirre | Software Developer</h2>
            
             <IconContext.Provider value={styleIcons}>
            
                <a  href='https://github.com/MikeAguirreG' 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                <FaGithub />
                </a>
                <a  href='https://www.linkedin.com/in/miguelaguirreg/' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                <FaLinkedin />
                </a>
                <a  href='mailto:agmaug@gmail.com' 
                    target='_blank' 
                    rel='noopener noreferrer'>
                <FaEnvelopeOpenText />
                </a>
                <a  href="https://github.com/MikeAguirreG/resume_files/raw/master/Resume_MiguelAguirreG.pdf" 
                    target="_blank" 
                    rel='noopener noreferrer'
                    download>
                <FaFileDownload />
                </a>
            </IconContext.Provider>
            <h5>Take a look at my work!  <FaArrowAltCircleRight /></h5>
           
            {/* <DynamicText /> */}
            </div>)
}
export default Page1;