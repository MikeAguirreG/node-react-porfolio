import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import Page1 from './Page1'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { IconContext } from "react-icons";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'rgba(53, 55, 88, 0.95)' }}><Page1 /></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}> B </animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}> C </animated.div>
]

const styleIcons = {
    color: 'white',
    size: '2.5em',
    className: 'next-button'
}

const Pages = () => {
    const [index, set] = useState(0)
    const onClick = useCallback(() => {set(state => (state + 1) % 3); setValue(state => (state + 1) % 3)},[])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const nextButton = <IconContext.Provider value={styleIcons} >
                            <FaArrowAltCircleRight onClick={onClick} />
                        </IconContext.Provider>

    const Navbar = <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Home" onClick={() => set(0)} />
            <Tab label="Item Two" onClick={() => set(1)} />
            <Tab label="Item Three" onClick={() => set(2)} />
        </Tabs>
    </AppBar>



    return (
        <div>
            {Navbar}
            <div className="simple-trans-main">
                {nextButton}
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key}
                        style={props}
                    />
                })
                } </div>
        </div>
    )
}
export default Pages;
