import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

import home from "./../../images/projectImages/YummyPiRecipes/home.png"
import search from "./../../images/projectImages/YummyPiRecipes/search.png"
import details from "./../../images/projectImages/YummyPiRecipes/details.png"
import create from "./../../images/projectImages/YummyPiRecipes/create.png"

import AWSLogo from "./../../images/techLogos/AWS.png"
import MongoDBLogo from "./../../images/techLogos/MongoDB.png"
import ExpressJSLogo from "./../../images/techLogos/ExpressJS.png"
import ReactLogo from "./../../images/techLogos/React.png"
import NodeJSLogo from "./../../images/techLogos/NodeJS.png"

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
  width: 100%;
  max-width: 800px;

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

  @media (max-width: 862px) {
    max-width: 500px;
    max-height: 600px;
  }

  @media (max-width: 530px) {
    max-width: 250px;
    max-height: 400px;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  max-height: 900px;

  object-fit: contain;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 500px;
    max-height: 800px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    max-height: 600px;
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

export const YummyPiRecipes = () => {
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
        <Title>YummyPi Recipes</Title>
        <Subtitle>
          <a
            href="https://yummypirecipes.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            yummypirecipes.com
          </a>
        </Subtitle>
        <StyledSlider {...sliderSettings}>
          <div>
            <StyledImage src={home} alt="Home" />
          </div>

          <div>
            <StyledImage src={details} alt="Details" />
          </div>
          <div>
            <StyledImage src={search} alt="Search" />
          </div>
          <div>
            <StyledImage src={create} alt="Create" />
          </div>
        </StyledSlider>
      </Container>
      <Features>
        <div className="feature-list">
          <div className="feature-item">✓ Recipe Sharing</div>
          <div className="feature-item">✓ Mobile-Friendly</div>
          <div className="feature-item">✓ Easy to Use</div>
          <div className="feature-item">✓ SEO</div>
          <div className="feature-item">✓ Scalable</div>
          <div className="feature-item">✓ Secure</div>
          <div className="feature-item">✓ Supports 50k+ Monthly Users</div>
          <div className="feature-item">✓ Online 24/7</div>
          <div className="feature-item">✓ Yummy!</div>
        </div>
      </Features>
      <TechBar>
        <div className="tech-title">Key Tech</div>
        <div className="tech-list">
          <div className="tech-item">
            <img src={AWSLogo} alt="AWS" />
            AWS
          </div>
          <div className="tech-item">
            <img src={MongoDBLogo} alt="MongoDB" />
            MongoDB
          </div>
          <div className="tech-item">
            <img src={ExpressJSLogo} alt="ExpressJS" />
            ExpressJS
          </div>
          <div className="tech-item">
            <img src={ReactLogo} alt="React" />
            React
          </div>
          <div className="tech-item">
            <img src={NodeJSLogo} alt="NodeJS" />
            NodeJS
          </div>
        </div>
      </TechBar>
    </div>
  )
}

export default YummyPiRecipes
