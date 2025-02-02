import React from "react"
import styled from "styled-components"

import reactLogo from "./../images/techLogos/React.png"
import JSLogo from "./../images/techLogos/JS.png"
import KotlinLogo from "./../images/techLogos/Kotlin.png"
import CLogo from "./../images/techLogos/C.png"
import CplusplusLogo from "./../images/techLogos/Cplusplus.png"
import JavaLogo from "./../images/techLogos/Java.png"
import PythonLogo from "./../images/techLogos/Python.png"
import HTMLLogo from "./../images/techLogos/HTML.png"
import CSSLogo from "./../images/techLogos/CSS.png"
import LuaLogo from "./../images/techLogos/Lua.png"

import GitLogo from "./../images/techLogos/Git.png"
import AzureLogo from "./../images/techLogos/Azure.png"
import AWSLogo from "./../images/techLogos/AWS.png"
import FirebaseLogo from "./../images/techLogos/Firebase.png"
import SQLLogo from "./../images/techLogos/SQL.png"
import VSCodeLogo from "./../images/techLogos/VSCode.png"
import JiraLogo from "./../images/techLogos/Jira.png"
import PostmanLogo from "./../images/techLogos/Postman.png"
import JenkinsLogo from "./../images/techLogos/Jenkins.png"
import KubernetesLogo from "./../images/techLogos/Kubernetes.png"

export const Tech = () => {
  return (
    <Container>
      <Title>Languages & Tech</Title>
      <Description style={{ color: "white" }}>
        You may find me using these frequently. I'm always looking for the next
        cool tech to learn!
      </Description>
      <ImageRow>
        <ImageContainer>
          <SmallImage src={reactLogo} alt="React" />
          <Caption>React</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={JSLogo} alt="Javascript" />
          <Caption>Javascript</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={KotlinLogo} alt="Kotlin" />
          <Caption>Kotlin</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={CLogo} alt="C" />
          <Caption>C</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={CplusplusLogo} alt="C++" />
          <Caption>C++</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={JavaLogo} alt="Java" />
          <Caption>Java</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={PythonLogo} alt="Python" />
          <Caption>Python</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={HTMLLogo} alt="HTML" />
          <Caption>HTML</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={CSSLogo} alt="CSS" />
          <Caption>CSS</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={LuaLogo} alt="Lua" />
          <Caption>Lua</Caption>
        </ImageContainer>

        <ImageContainer>
          <SmallImage src={GitLogo} alt="Git" />
          <Caption>Git</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={AzureLogo} alt="Azure" />
          <Caption>Azure</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={AWSLogo} alt="AWS" />
          <Caption>AWS</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={FirebaseLogo} alt="Firebase" />
          <Caption>Firebase</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={SQLLogo} alt="SQL" />
          <Caption>SQL</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={VSCodeLogo} alt="VS Code" />
          <Caption>VS Code</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={JiraLogo} alt="Jira" />
          <Caption>Jira</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={PostmanLogo} alt="Postman" />
          <Caption>Postman</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={JenkinsLogo} alt="Jenkins" />
          <Caption>Jenkins</Caption>
        </ImageContainer>
        <ImageContainer>
          <SmallImage src={KubernetesLogo} alt="Kubernetes" />
          <Caption>Kubernetes</Caption>
        </ImageContainer>
      </ImageRow>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 40px;
  font-family: "Arial", sans-serif;
  background-color: #1955ad;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  color: #64ffda;
  font-size: 48px;
  margin: 10px 0;
`

const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  gap: 20px;
`

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  background: #737373;
  border-radius: 30px;
  padding: 20px;
  overflow: hidden;
  align-content: end;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    padding: 4px;
    background: linear-gradient(45deg, #454444, #64ffda);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: 0;
  }
`

const SmallImage = styled.img`
  width: 70px;
  height: auto;
  margin-bottom: 5px;
  padding: 10px;
`

const Caption = styled.p`
  color: #242424;
  font-size: 14px;
  margin: 0;
  font-weight: bold;
`

const Description = styled.p`
  margin-left: 10px;
  margin-right: 10px;

  color: #64ffda;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
