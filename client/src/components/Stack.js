import React from 'react'
import {
    DiMysql,
    DiMongodb,
    DiReact,
    DiNodejs,
    DiGit,
    DiJavascript1,
    DiPhp,
    DiCss3,
    DiSass,
    DiJava,
    DiCodeigniter,
    DiBootstrap,
    DiDocker
  } from "react-icons/di";
  import { IconContext } from "react-icons";

const Stack = (styleIcons) => (
    <IconContext.Provider value={styleIcons}>
        <DiJavascript1 />
        <DiReact />
        <DiNodejs />
        <DiMongodb />
        <DiDocker />
        <DiGit />
        <DiPhp />
        <DiCss3 />
        <DiSass />
        <DiJava />
        <DiCodeigniter />
        <DiBootstrap />
        <DiMysql />
    </IconContext.Provider>
)
export default Stack