import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

import endScreen from "./../../images/projectImages/Reversi/End.png"
import intermediateScreen from "./../../images/projectImages/Reversi/Intermediate.png"
import loginScreen from "./../../images/projectImages/Reversi/Login.png"

import JavaLogo from "./../../images/techLogos/Java.png"
import XMLLogo from "./../../images/techLogos/XML.jpg"
import AndroidStudioLogo from "./../../images/techLogos/AndroidStudio.png"

export const Reversi = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div>
      <Container>
        <Title>Reversi</Title>
        <StyledSlider {...sliderSettings}>
          <div>
            <StyledImage src={loginScreen} alt="Login" />
          </div>
          <div>
            <StyledImage src={intermediateScreen} alt="Register" />
          </div>
          <div>
            <StyledImage src={endScreen} alt="Home" />
          </div>
        </StyledSlider>
      </Container>
      <Features>
        <div className="feature-list">
          <div className="feature-item">✓ Reversi Game</div>
          <div className="feature-item">✓ Two Players</div>
          <div className="feature-item">✓ Board Game</div>
          <div className="feature-item">✓ Quick and Easy</div>
          <div className="feature-item">
            ✓ Previously Available on Google Play
          </div>
          <div className="feature-item">✓ Open Source</div>
        </div>
      </Features>
      <TechBar>
        <div className="tech-title">Key Tech</div>
        <div className="tech-list">
          <div className="tech-item">
            <img src={JavaLogo} alt="Java" />
            Java
          </div>
          <div className="tech-item">
            <img src={XMLLogo} alt="XML" />
            XML
          </div>
          <div className="tech-item">
            <img src={AndroidStudioLogo} alt="AndroidStudio" />
            Android Studio
          </div>
        </div>
      </TechBar>
    </div>
  )
}

const Features = styled.div`
  margin-top: 16px;
  font-size: 18px;
  text-align: center;
  width: 80%;
  margin: 16px auto;

  .feature-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  .feature-item {
    flex: 1 1 calc(33.33% - 16px);
    max-width: calc(33.33% - 16px);
    text-align: center;
  }

  @media (max-width: 768px) {
    .feature-item {
      flex: 1 1 calc(50% - 16px);
      max-width: calc(50% - 16px);
    }
  }

  @media (max-width: 480px) {
    .feature-item {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`

const TechBar = styled.div`
  margin-top: 24px;
  border: 2px solid #1079c9;
  color: #1079c9;
  font-weight: bold;
  text-align: center;
  padding: 16px 0;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;

  .tech-title {
    margin-bottom: 16px;
    font-size: 20px;
  }

  .tech-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 14px;
  }

  .tech-item img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 8px;
  }
`

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 35px;
  font-family: "Arial", sans-serif;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const StyledSlider = styled(Slider)`
  width: 80%;
  max-width: 600px;

  .slick-list {
    padding: 0 0px;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-dots li button:before {
    color: black;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #1079c9;
  }

  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 600px;
  }

  @media (max-width: 480px) {
    max-width: 190px;
    max-height: 400px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  max-height: 800px;
  object-fit: contain;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 300px;
    max-height: 600px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
    max-height: 400px;
  }
`

const Title = styled.h1`
  font-size: 40px;
  //color: #1079c9;
  text-align: center;
  //text-decoration: underline;
  margin-bottom: 24px;
  //padding: 20px;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export default Reversi
