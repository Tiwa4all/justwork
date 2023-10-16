import React from 'react'
import './HeaderContent.css'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from './headerImg.svg'
// import { ArrowRightCircle } from "npm insyt";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Clients = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Data Science","Block Chains", "Communication", "Web Development"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }
              >
                <span className="tagline">Welcome to Pushtechn Tech Company</span>
                <h1>
                  {`Hi! We are PushTechn  `}{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Data Science","Block Chains", "Communication", "Web Development" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p>
                PushTech is a software development company that partners 
                with customers to build software products in addition to
                providing consulting for building internal technical teams. 
                Our Company collaborates with businesses ranging from startups
                to enterprises on building software products that meet users’
                needs. The company’s experts also embed themselves within 
                client organizations to advise them on skills, tools and best 
                practices to guarantee they remain competitive in product
                development and delivery.
                Businesses need every edge available to stay ahead of the 
                competition, so PushTechn has crafted the ultimate DevOps platform. 
                Companies can gather software lifecycle metrics and track project data, 
                creating a more collaborative environment.
                </p>
                {/* <button onClick={() => console.log("connect")}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button> */}
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__zoomIn" : ""
                }
              >
                <img src={headerImg} alt="Header Img" />
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Clients