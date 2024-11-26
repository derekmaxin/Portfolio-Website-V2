import React, { useRef } from "react"
import styled from "styled-components"
import { Link as ScrollLink } from "react-scroll"

export const Home = () => {
  const targetRef = useRef(null)

  return (
    <Container className="target" ref={targetRef}>
      <Intro>Welcome to my portfolio! My name is</Intro>
      <Name>Derek Maxin</Name>
      <Tagline>Software developer and architect</Tagline>
      <ButtonContainer>
        <ScrollLink to="interview" smooth={true} duration={1000}>
          <Button>View my projects →</Button>
        </ScrollLink>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  text-align: left;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 4px solid #1079c9;
  border-radius: 10px;
  overflow-x: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 550px) {
    border: none;
    box-shadow: none;
    margin-top: 160px;
  }
`

const Intro = styled.p`
  color: #181717;
  font-size: 18px;
`

const Name = styled.h1`
  color: #1079c9;
  font-size: 48px;
  margin: 10px 0;
`

const Tagline = styled.h2`
  color: #181717;
  font-size: 32px;
  margin: 10px 0;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  color: #181717;
  border: 1px solid #1079c9;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(16, 121, 201, 0.1);
  }
`
