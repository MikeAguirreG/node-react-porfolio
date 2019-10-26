import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { IconContext } from "react-icons";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const pages = [
    ({ style }) => <animated.div style={{ ...style, background: '#2D4159' }}><Home/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#ccc'    }}><About/></animated.div>, //'#279761'
    ({ style }) => <animated.div style={{ ...style, background: '#CEBC81' }}><Portfolio/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#A16E83' }}>Building it.. Sorry for the inconvenience!</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#B19F96' }}>Building it.. Sorry for the inconvenience!</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: '#707070' }}><Contact/></animated.div>,
]

const styleIcons = {
    color: 'white',
    size: '2.5em',
    className: 'next-button heartbeat'
}


const Pages = () => {
    const [index, set] = useState(0)
    const onClick = useCallback(() => {set(state => (state + 1) % 6); setValue(state => (state + 1) % 6)},[])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

 

    const nextButton = <IconContext.Provider value={styleIcons} >
                            <FaArrowAltCircleRight onClick={onClick} />
                        </IconContext.Provider>


    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles(theme => ({
        root: {
        flexGrow: 1,
        backgroundColor: '#282c34',
        width: '100%',
        height: '10%',
        },
    }));

    const classes = useStyles();
    const Navbar = 
    <AppBar  className={classes.root} position="static">
        <Tabs 
            value={value} 
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
        >
            <Tab label="Home" onClick={() => set(0)} />
            <Tab label="About" onClick={() => set(1)} />
            <Tab label="Portfolio" onClick={() => set(2)} />
            <Tab label="Collaboration" onClick={() => set(3)} />¸
            <Tab label="Services" onClick={() => set(4)} />¸
            <Tab label="Contact Me" onClick={() => set(5)} />
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
                } 
            </div>
        </div>
    )
}
export default Pages;
