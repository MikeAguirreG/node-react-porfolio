import React from 'react';
import maag from '../images/maag.jpg';
import ContactIcons from './ContactIcons';
import Stack from './Stack';

const About = () => {
  const styleIcons = {
    size: '3em',
    color: 'white'
  };

  const styleIcons1 = {
    size: '3em',
    color: '#282c34'
  };
  return (
    <div className="page-2">
      <div className="img-column">
        <div className="img-div v-btm">
          <img
            className="h-100 br3 ba b--black bw2"
            src={maag}
            alt="Miguel Aguirre"
          />
        </div>

        <div className="topics v-btm">
          <div className="text-img pa1">
            <h2>Miguel Aguirre</h2>
            <h3>Software Developer</h3>
            <p>
              My name is Miguel Aguirre a software developer with passion for
              helping others using technology.
            </p>
          </div>

          <div className="row-icons v-btm">
            <ContactIcons styleIcons={styleIcons1} />
          </div>

          <h2>I have worked doing</h2>
          <div className="topics-list">
            <p className="">
              &bull; Software Development &bull; Software Engineering &bull;
              Code Analysis &bull; QA &bull; IT Banking Infraestructure &bull;
              IT Consulting &bull; Linux Server Configuration &bull; Agile
              Methodologies &bull; JWT &bull; MVC Architecture &bull; OOP &bull;
              IT Management &bull; Web Development &bull; IT Specialist
            </p>
          </div>
        </div>
      </div>

      <div className="experience-div">
        <h2>Experience</h2>
        <div className="experience-column">
          <div className="experience-item v-mid  br3 ma2  bw2 ba shadow-5">
            <h5 className="f6">
              Software Engineer / IT Specialist at Softtek | May 2018 – Jun 2019
            </h5>
            <p className="f7">
              Keywords: Software Engineering, IT Specialist, Web Applications
              development. Frontend, Backend, IBM WAS, IHS, SDLC, Java, Spring
              MVC, CSS, Javascript, Single Sign On, IT Management.
            </p>
          </div>
          <div className="experience-item  v-mid  br3 ma2  bw2 ba shadow-5">
            <h5 className="f6">
              Web Developer / IT PM at Matec | Mar 2017 – April 2018
            </h5>
            <p className="f7 ">
              Keywords: Full-Stack Development, ERP System Development, MySQL,
              PHP, Javascript, CSS , Bootstrap, Codeigniter.
            </p>
          </div>
        </div>
        <div className="experience-column">
          <div className="experience-item   br3 ma2  bw2 ba shadow-5">
            <h5 className="f6">
              IT Administrator / Web Developer at Proser | Jan 2011 – Jul 2014
            </h5>
            <p className="f7">
              Keywords: IT Management, Inventory Management Software, POS System
              Development, Computer Networks , PHP, Javascript, CSS, Bootstrap,
              Mysql, Codeigniter.
            </p>
          </div>
          <div className="experience-item  v-mid  br3 ma2  bw2 ba shadow-5">
            <h5 className="f6">
              Software Developer - Freelancing | 2018 – 2019
            </h5>
            <p className="f7">
              Keywords: Full-Stack Development, Node, JS, React JS, Ecommerce,
              ERP System Development, MySQL, PHP, Javascript, CSS , Bootstrap,
              Codeigniter.
            </p>
          </div>
        </div>

        <h2>Education</h2>
        <div className="experience-column">
          <div className="education-item br3 ma2 bw2 ba shadow-5">
            <h5 className="f6">Bachelor Degree Information Systems</h5>
            <p className="f7">
              University of Guanajuato Guanajuato, México | 2011-2017
            </p>
          </div>
          <div className="education-item  v-mid  br3 ma2 bw2 ba shadow-5">
            <h5 className="f6">Computer Science</h5>
            <p className="f7">
              International Exchange Student FH Frankfurt Frankfurt, Germany |
              2015-2017
            </p>
          </div>
          <div className="education-item  v-mid  br3 ma2 bw2 ba shadow-5">
            <h5 className="f6">Informatic Technician</h5>
            <p className="f7">CBTis 172 Guanajuato, México | 2007-2010</p>
          </div>
        </div>

        <h2>Stack</h2>
        <div className="row-icons v-btm">
          <div className="experience-column">
            <Stack styleIcons={styleIcons1} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
