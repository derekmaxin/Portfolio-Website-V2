import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

import newPatient from "./../../images/projectImages/Healthcare/new.png"
import search from "./../../images/projectImages/Healthcare/search.png"
import diagnostic from "./../../images/projectImages/Healthcare/diagnostic.png"
import encounters from "./../../images/projectImages/Healthcare/encounters.png"
import results from "./../../images/projectImages/Healthcare/results.png"

import AWSLogo from "./../../images/techLogos/AWS.png"
import AzureLogo from "./../../images/techLogos/Azure.png"
import CSharpLogo from "./../../images/techLogos/CSharp.png"
import HAPIFHIRLogo from "./../../images/techLogos/HAPI FHIR.png"
import DotnetLogo from "./../../images/techLogos/Dotnet.png"
import JavascriptLogo from "./../../images/techLogos/JS.png"
import HTMLLogo from "./../../images/techLogos/HTML.png"

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

export const HealthCare = () => {
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
        <Title>Healthcare Insights</Title>
        <StyledSlider {...sliderSettings}>
          <div>
            <StyledImage src={search} alt="Search" />
          </div>
          <div>
            <StyledImage src={results} alt="New Patient" />
          </div>
          <div>
            <StyledImage src={encounters} alt="New Patient" />
          </div>
          <div>
            <StyledImage src={diagnostic} alt="Search" />
          </div>
          <div>
            <StyledImage src={newPatient} alt="New Patient" />
          </div>
        </StyledSlider>
      </Container>
      <Features>
        <div className="feature-list">
          <div className="feature-item">✓ Patient Search</div>
          <div className="feature-item">✓ Medication Info</div>
          <div className="feature-item">✓ Diagnostic Reports</div>
          <div className="feature-item">✓ HL7 FHIR Standard</div>
          <div className="feature-item">✓ Proof of Concept</div>
          <div className="feature-item">✓ RESTful API Utilization</div>
          <div className="feature-item">✓ No Real Patient Data</div>
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
            <img src={AzureLogo} alt="Azure" />
            Azure
          </div>
          <div className="tech-item">
            <img src={CSharpLogo} alt="C#" />
            C#
          </div>
          <div className="tech-item">
            <img src={HAPIFHIRLogo} alt="HAPI FHIR" />
            HAPI FHIR
          </div>
          <div className="tech-item">
            <img src={DotnetLogo} alt="Dotnet" />
            Dotnet
          </div>
          <div className="tech-item">
            <img src={JavascriptLogo} alt="Javascript" />
            Javascript
          </div>
          <div className="tech-item">
            <img src={HTMLLogo} alt="HTML" />
            HTML
          </div>
        </div>
      </TechBar>
    </div>
  )
}

export default HealthCare
