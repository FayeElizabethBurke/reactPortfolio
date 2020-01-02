import React from 'react';
import icon from './icon.png';
import gitLogo from './GitHub-Mark.png';
import codewarsLogo from './codewars.png';
import linkedinLogo from './linkedIn.png';
import mattsBlog from './mattsBlog.jpg';
import chromeExten from './chromeExtension.JPG';
import codeSnip from './codeSnip.PNG';
import crInterface from './crInterface.PNG';
import gameRegister from './gameRegister.JPG';
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

  const carouselDescription = {
    background: `white`,
  }
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
            <ProgressBar variant="info" now={65} label={`TestCafe`} />
          </div>
          <div className="skill">
            <ProgressBar animated variant="warning" now={60} label={`NodeJS`} />
          </div>
          <div className="skill">
            <ProgressBar variant="danger" now={40} label={`ReactJS`} />
          </div>
          <div className="skill">
            <ProgressBar animated variant="success" now={50} label={`MongoDB`} />
          </div>
          <div className="skill">
            <ProgressBar variant="info" now={80} label={`Git`} />
          </div>
        </div>
      </FadeInSection>
      <div className="box" />
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
            <div className="carouselCaption">
            <Carousel.Caption>
              <div style = {carouselDescription}>
                <h3>Matt-Davey.com</h3>
                <p>NodeJS, React, MongoDB</p>
              </div>
            </Carousel.Caption>
            </div>
          </Carousel.Item>
          


          <Carousel.Item>
            <a rel="noopener noreferrer" target="_blank" href="https://laughing-einstein-674f51.netlify.com/">
              <img
                className="d-block w-100"
                src={gameRegister}
                alt="Third slide"
              />
            </a>
            <div className="carouselCaption">
            <Carousel.Caption>
            <div style = {carouselDescription}>
                <h3>Game Register</h3>
                <p>Figma design, MERN execution- ONGOING</p>
              </div>
            </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <a rel="noopener noreferrer" target="_blank" href="https://priceless-allen-b502e3.netlify.com/">
              <img
                className="d-block w-100"
                height="500"
                src={chromeExten}
                alt="Second slide"
              />
            </a>
            <div className="carouselCaption">
            <Carousel.Caption>
            <div style = {carouselDescription}>
              <h3>Chrome Dashboard Extension</h3>
              <p>NASA API React, Chrome Developer</p>
            </div>
            </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/FayeElizabethBurke/codeDiary">
              <img
                className="d-block w-100"
                src={crInterface}
                alt="Fourth slide"
              />
            </a>
            <div className="carouselCaption">
            <Carousel.Caption>
            <div style = {carouselDescription}>
              <h3>Cloud Router Test Interface </h3>
              <p>Testcafe, Vanilla JS</p>
            </div>
            </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/FayeElizabethBurke/rapidHit">
              <img
                className="d-block w-100"
                src={codeSnip}
                alt="Fifth slide"
              />
            </a>
            <div className="carouselCaption">
            <Carousel.Caption>
              <h3>Code Snip</h3>
              <p>Mongo DB, NodeJS, EJS Templating</p>
            </Carousel.Caption>
            </div>
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
