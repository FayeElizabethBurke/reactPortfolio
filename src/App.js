import React from 'react';
import icon from './icon.png';
import './App.css';


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
    </div>
  );
}

export default App;
