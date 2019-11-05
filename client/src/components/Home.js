import React from 'react';
import ContactIcons from './ContactIcons';

const Home = () => {
  const styleIcons = {
    color: 'white',
    size: '4em',
    className: ''
    // className: 'bounce-top'
  };

  return (
    <div className="page-1">
      <div className="column-item name">
        <h1>Miguel Aguirre | Software Developer</h1>
      </div>
      <div className="column-item row-icons">
        <ContactIcons styleIcons={styleIcons} />
      </div>
      <div className="column-item phrase">
        <h2>Please, take a look at my work! </h2>
      </div>
      <div className="column-item portfolio-code">
        <a
          href="https://github.com/MikeAguirreG/node-react-porfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-item"
          title="Github account."
          style={{ color: 'white' }}
        >
          <h4>
            Did you like this portfolio? <br /> Take a look at my code!
          </h4>
        </a>
      </div>
    </div>
  );
};
export default Home;
