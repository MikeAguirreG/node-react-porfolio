import React from 'react'
import ContactIcons from './ContactIcons'

const Home = () => {

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
                 <ContactIcons styleIcons={styleIcons}/>
                </div>
                <div className='column-item phrase'>
                <h2>Please, take a look at my work!  </h2>
                </div>
                
    </div>
    )
}
export default Home;