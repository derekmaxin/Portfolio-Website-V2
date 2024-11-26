import React from "react"
import styled from "styled-components"
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"
import "./styles.css"
import { Home } from "./components/home"
import { Interview } from "./components/interview"
import { BrowserRouter as Router } from "react-router-dom"
import { Link } from "react-scroll"

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header>
            <NavContainer>
              <Logo>Derek Maxin</Logo>
              <NavLinks>
                <li>
                  <StyledLink activeClass="active" smooth spy to="home">
                    Home
                  </StyledLink>
                </li>
                <li>
                  <StyledLink activeClass="active" smooth spy to="interview">
                    Projects
                  </StyledLink>
                </li>
              </NavLinks>
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
            </NavContainer>
          </Header>
          <section id="home">
            <Home />
          </section>
          <section id="interview">
            <Interview />
          </section>
        </div>
      </Router>
    </>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1079c9;
  color: #fff;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  flex-wrap: wrap;
`

const Logo = styled.div`
  font-weight: bold;
  color: #181717;
`

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 10px;
  }

  @media (max-width: 548px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  color: #181717;
  text-decoration: none;
  margin: 0 10px;
`

const IconRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 548px) {
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }
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

export default App
