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
            <div className="flex-item img-div dib br3 ma2 grow bw2 shadow-5" >
                <div className='h-50'>
                <img className='br2 w-100' src={maag} alt="Miguel Aguirre"/>
                </div>
                <div className='h-50 v-btm'>
                    <h2 className='f6'>Miguel Aguirre</h2>
                    <p className='f7 gray'> 
                        My name is Miguel Aguirre a software developer with passion
                        for helping others using technology.
                    </p>
                </div>
            </div>

            <div className='experience flex-item'>
                <article className="">
                    <h1 className="f4 ">Experience</h1>
                    <div className="bt b--black-10">
                    <h5 className="f6">Software Engineer / IT Specialist at Softtek  | May 2018 – Jun 2019 </h5>
                        <p className="f7">
                            Keywords: Software Engineering, IT Specialist,  Web Applications development. Frontend, Backend, IBM WAS, IHS, SDLC,
                            Java, Spring MVC, CSS, Javascript,  Single Sign On, IT Management.
                        </p>
                    </div>
                    <div className=" bt b--black-10">
                    <h5 className="f6">Web Developer / IT PM at Matec | Mar 2017 – April 2018 </h5>
                        <p className="f7 ">
                            Keywords: Full-Stack Development, ERP System Development, MySQL, PHP, Javascript, CSS , Bootstrap, Codeigniter.
                        </p>
                    </div>
                    <div className=" bt b--black-10">
                    <h5 className="f6">IT Administrator / Web Developer at Proser | Jan 2011 – Jul 2014 </h5>
                        <p className="f7">
                            IT Management, Inventory Management Software, POS System Development, 
                            Computer Networks , PHP, Javascript, CSS, Bootstrap, Mysql, Codeigniter.
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

