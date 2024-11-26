import React from "react"
import styled from "styled-components"
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { YummyPiRecipes } from "../components/projects/yummyPiRecipes"
import { Reversi } from "../components/projects/reversi"
import { AceInterviewer } from "../components/projects/aceInterviewer"
import { Graphing } from "../components/projects/graphing"
import { Connect4 } from "../components/projects/connect4"
import { NoteTaking } from "../components/projects/noteTaking"
import { HealthCare } from "../components/projects/healthcare"

export const Interview = () => {
  return (
    <>
      <div>
        <YummyPiRecipes></YummyPiRecipes>
        <AceInterviewer></AceInterviewer>
        <HealthCare></HealthCare>
        <Graphing></Graphing>
        <Reversi></Reversi>
        <NoteTaking></NoteTaking>
        <Connect4></Connect4>
      </div>
      <Footer
        style={{
          width: "100vw",
          height: "75px",
          backgroundColor: "#1079c9",
          marginTop: "20px",
        }}
      >
        <IconRow>
          <IconButton
            href="https://github.com/derekmaxin"
            target="_blank"
            rel="noopener noreferrer"
            color="#181717"
            hoverColor="#757575"
          >
            <FaGithub />
          </IconButton>
          <IconButton
            href="mailto:dmaxin@uwaterloo.ca"
            color="#181717"
            hoverColor="#757575"
          >
            <FaEnvelope />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/derekmaxin"
            target="_blank"
            rel="noopener noreferrer"
            color="#181717"
            hoverColor="#757575"
          >
            <FaLinkedin />
          </IconButton>
        </IconRow>
      </Footer>
    </>
  )
}

const Footer = styled.div`
  width: 100vw,
  height: 75px,
  background-color: #1079c9,
  margin-top: 20px,
`

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  align-items: center;
  flex: 1;
  height: 75px;
`

const IconButton = styled.a`
  margin: 0 10px;
  color: ${(props) => props.color || "black"};
  font-size: 30px;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.hoverColor || "black"};
  }
`
