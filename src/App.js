import React from 'react';
import icon from './icon.png';
import './App.css';
import { ProgressBar } from 'react-bootstrap';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
      </header>
      <div className="box" ></div>
      <FadeInSection>
        <div className="bio">
          <p>I'm a web developer based in Manchester.</p>
          <p>I write clean, straight-forward, clever applications.</p>
          <p>Talk to me!</p>
          <p> • fayeelizabethburke@gmail.com  • </p>
          <p> • ( +61 ) 0466546679  • </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="box" ></div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skill">
            <ProgressBar animated variant="success" now={60} label={`JavaScript`}/>
          </div>
          <div className="skill">
            <ProgressBar animated variant="info" now={65} label={`TestCafe`}/>
          </div>
          <div className="skill">
            <ProgressBar animated variant="warning" now={60} label={`NodeJS`}/>
          </div>
          <div className="skill">
            <ProgressBar animated variant="danger" now={50} label={`ReactJS`}/>
          </div>
          <div className="skill">
            <ProgressBar animated variant="success" now={50} label={`MongoDB`}/>
          </div>
          <div className="skill">
            <ProgressBar animated variant="info" now={80} label={`Git`}/>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default App;
