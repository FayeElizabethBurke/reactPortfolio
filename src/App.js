import React from 'react';
import icon from './icon.png';
import gitLogo from './GitHub-Mark.png';
import codewarsLogo from './codewars.png';
import linkedinLogo from './linkedIn.png';
import mattsBlog from './mattsBlog.jpg';
import codeSnip from './codeSnip.PNG';
import crInterface from './crInterface.PNG';
import './App.css';
import { ProgressBar } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>

        <h4>Contact Info:</h4>
        <p><strong>Email:</strong> fayeelizabethburke@gmail.com</p>
        <p><strong>Phone:</strong> (+64) 0466546679</p>
      </Modal.Body>

    </Modal>
  );
}

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
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
      </header>

      <div className="box noMarg" />

      {/* bio */}
      <FadeInSection>
        <div className="bio">
          <p>I'm a web developer based in Manchester.</p>
          <p>I write clean, straight-forward, clever applications.</p>
          <p>Talk to me!</p>
          <div className="links">
            <a href="https://github.com/FayeElizabethBurke" >
              <img src={gitLogo} alt={"#"} height={'50px'} />
            </a>
            <a href="https://www.linkedin.com/in/faye-burke-360138149/">
              <img src={linkedinLogo} alt={"#"} height={'50px'} />
            </a>
            <a href="https://www.codewars.com/users/FayeElizabethBurke">
              <img src={codewarsLogo} alt={"#"} height={'50px'} />
            </a>
          </div>
        </div>

      </FadeInSection>


      {/* progress */}
      <FadeInSection>
        <div className="box" />
        <div className="skills">
          <h2>Skills</h2>
          <div className="skill">
            <ProgressBar animated variant="success" now={60} label={`JavaScript`} />
          </div>
          <div className="skill">
            <ProgressBar animated variant="info" now={65} label={`TestCafe`} />
          </div>
          <div className="skill">
            <ProgressBar animated variant="warning" now={60} label={`NodeJS`} />
          </div>
          <div className="skill">
            <ProgressBar animated variant="danger" now={40} label={`ReactJS`} />
          </div>
          <div className="skill">
            <ProgressBar animated variant="success" now={50} label={`MongoDB`} />
          </div>
          <div className="skill">
            <ProgressBar animated variant="info" now={80} label={`Git`} />
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="box" />
        <Carousel>
          <Carousel.Item>
            <a rel="noopener noreferrer" target="_blank" href="http://www.matt-davey.com">
              <img
                className="d-block w-100"
                src={mattsBlog}
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>Matt-Davey.com</h3>
              <p>NodeJS, React, MongoDB</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/FayeElizabethBurke/codeDiary">
              <img
                className="d-block w-100"
                src={crInterface}
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <h3>CodeSnip</h3>
              <p>NodeJS, EJS Templates, MongoDB</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/FayeElizabethBurke/rapidHit">
              <img
                className="d-block w-100"
                src={codeSnip}
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <h3>rapidHit</h3>
              <p>TestCafe</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="box noBottom" />
      </FadeInSection>
      {/* contact modal */}
      <div className="modalButton">
          <Button variant="secondary" onClick={() => setModalShow(true)}>
            Contact Me.
                </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      <ButtonToolbar>

      </ButtonToolbar>

    </div>

  );
}

export default App;
