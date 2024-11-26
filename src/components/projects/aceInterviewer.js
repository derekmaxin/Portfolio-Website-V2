import React from "react"
import Slider from "react-slick"
import styled from "styled-components"

import loginScreen from "./../../images/projectImages/AceInterviewer/Login.jpg"
import registerScreen from "./../../images/projectImages/AceInterviewer/Register.jpg"
import homeScreen from "./../../images/projectImages/AceInterviewer/Home.jpg"
import ProfileScreen from "./../../images/projectImages/AceInterviewer/Profile unexpanded.jpg"
import SearchScreen from "./../../images/projectImages/AceInterviewer/Search and filter.jpg"

import KotlinLogo from "./../../images/techLogos/Kotlin.png"
import FirebaseLogo from "./../../images/techLogos/Firebase.png"
import AndroidLogo from "./../../images/techLogos/Android.png"
import ComposeLogo from "./../../images/techLogos/Compose.png"
import MUILogo from "./../../images/techLogos/MUI.png"

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

const Subtitle = styled.h2`
  font-size: 18px;
  color: #1079c9;
  text-align: center;
  margin-top: -10px; /* Adjust spacing between title and subtitle */
  margin-bottom: 24px;

  a {
    color: #1079c9;
    text-decoration: underline;

    &:hover {
      color: #0a57a8;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const AceInterviewer = () => {
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
        <Title>Ace Interviewer</Title>
        <Subtitle>
          <a
            href="https://github.com/derekmaxin/AceInterviewer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </Subtitle>
        <StyledSlider {...sliderSettings}>
          <div>
            <StyledImage src={loginScreen} alt="Login" />
          </div>
          <div>
            <StyledImage src={registerScreen} alt="Register" />
          </div>
          <div>
            <StyledImage src={homeScreen} alt="Home" />
          </div>
          <div>
            <StyledImage src={ProfileScreen} alt="Profile" />
          </div>
          <div>
            <StyledImage src={SearchScreen} alt="Search" />
          </div>
        </StyledSlider>
      </Container>
      <Features>
        <div className="feature-list">
          <div className="feature-item">✓ Interview Practice</div>
          <div className="feature-item">✓ Peer Feedback</div>
          <div className="feature-item">✓ Gamified</div>
          <div className="feature-item">✓ Mic Utilization</div>
          <div className="feature-item">✓ Animations</div>
          <div className="feature-item">✓ AAA Unit Tests</div>
          <div className="feature-item">✓ Multi-user</div>
          <div className="feature-item">✓ MVVM Architecture</div>
          <div className="feature-item">✓ Open Source</div>
        </div>
      </Features>
      <TechBar>
        <div className="tech-title">Key Tech</div>
        <div className="tech-list">
          <div className="tech-item">
            <img src={KotlinLogo} alt="Kotlin" />
            Kotlin
          </div>
          <div className="tech-item">
            <img src={ComposeLogo} alt="Compose" />
            Compose
          </div>
          <div className="tech-item">
            <img src={AndroidLogo} alt="Android" />
            Android
          </div>
          <div className="tech-item">
            <img src={FirebaseLogo} alt="Firebase" />
            Firebase
          </div>
          <div className="tech-item">
            <img src={MUILogo} alt="MUI" />
            Material UI
          </div>
        </div>
      </TechBar>
    </div>
  )
}

export default AceInterviewer
