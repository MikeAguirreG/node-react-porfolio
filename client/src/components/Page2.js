import React from 'react'
import maag from '../images/maag.jpg'
import { DiMysql, DiMongodb, DiReact, DiNodejs, DiGit, DiJavascript1 ,DiPhp ,DiCss3,DiSass ,DiJava, DiCodeigniter, DiBootstrap } from 'react-icons/di';
import { IconContext } from "react-icons";




const About = () => {

    const styleIcons = {
        size: '2em'
    }

    return (

        <div className='flex-container'>
            <div className='flex-item img-div dib br3 pa2 ma2 h-40 w-20 grow bw2 shadow-6'>
                <article className="">
                    <img src={maag} className="db br2 br--top h-60" alt="Miguel Aguirre"></img>
                    <div className="pa1 pb3-ns" style={{ overflow: 'auto' }}>
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f6 f4-ns mv0">Software Developer</h1>
                            </div>
                        </div>
                        <p className="f7 w-100 lh-copy measure mt2 gray">
                            My name is Miguel Aguirre a software developer with passion
                            for helping others using technology.
                </p>
                    </div>
                </article>
            </div>

            <div className='experience grow flex-item  center'>
                <article className="">
                    <h1 className="f4 ">Experience</h1>
                    <div className="bt b--black-10">
                    <h5 className="f6">Software Engineer / IT Specialist at Softtek  | May 2018 – Jun 2019 </h5>
                        <p className="f7">
                            Software Engineer,  Web Applications development. Front-end, back-end environments, and IBM WAS servers configurations, 
                            as well as management activities related to SDLC. 
                            Programming languages, tools and web technologies:
                            Java, Spring MVC, CSS, Javascript, IBM WAS, IHS, HTTP Server, Single Sign On
                            IT Specialist, managing a software development team.  Solution presenter, documentation, and meeting negotiator.
                    </p>
                    </div>
                    <div className=" bt b--black-10">
                    <h5 className="f6">Web Developer / IT PM at Matec | Mar 2017 – April 2018 </h5>
                        <p className="f7 ">
                            In charge of several projects working as a «Full-Stack Developer». 
                            Main activities were related with developing modules for a web platform as well as databases design, 
                            front-end, back-end programming.
                            Programming languages, tools and web technologies:
                            PHP, Javascript, CSS, MySQL, Bootstrap, Codeigniter
                    </p>
                    </div>
                    <div className=" bt b--black-10">
                    <h5 className="f6">IT Administrator / Web Developer | Jan 2011 – Jul 2014 </h5>
                        <p className="f7">
                            IT Management in PROSER, Veterinary Services Company, In this position I was in charge of corrective 
                            and preventive maintenance of computer equipment, as well as management software for inventory, computer 
                            networks, social networks, and developing of a POS System.
                            Programming languages, tools and web technologies
                            Computer Networks , PHP, Javascript, CSS, Bootstrap, Mysql, Codeigniter
                    </p>
                    </div>
                  
                    <div className="bt b--black-10">
                    <h1 className="f4 ">I can work with the following technologies:</h1>
                    <IconContext.Provider value={styleIcons}>
                    <DiJavascript1/> 
                    <DiReact/> 
                    <DiNodejs/> 
                    <DiMongodb/> 
                    <DiGit/> 
                    <DiPhp/> 
                    <DiCss3/>
                    <DiSass/> 
                    <DiJava/> 
                    <DiCodeigniter/> 
                    <DiBootstrap/>
                    <DiMysql/>
                    </IconContext.Provider>
                    </div>
                </article>
            </div>


        </div>






    )

}
export default About;

