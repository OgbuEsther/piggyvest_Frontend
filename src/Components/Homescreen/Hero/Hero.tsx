import React from 'react'
import styled from 'styled-components'
import one from "../../Assets/one.png"
import two from "../../Assets/two.png"
import three from "../../Assets/three.png"
import four from "../../Assets/four.png"
import {AiFillApple} from "react-icons/ai"
import {FaGooglePlay} from "react-icons/fa"
import { Link } from 'react-router-dom'
import appleIcon from "../../Assets/apple-icon.svg"
import googleIcon from "../../Assets/google-icon.svg"
import nice from "../../Assets/girlie.png"

const Hero = () => {
  return (
    <div>
      <Container id='hero'>
        <Wrapper>
          <First>
            <Title>
            The Better Way  <br /> to Save & Invest.
            </Title>
            <Sub>
            PiggyVest helps over 4 million customers achieve their financial
            <br />
             goals by helping them save and invest with ease.
            </Sub>
            <Button to ="register">
              Create Free Account
            </Button>
            <ButtonHold>
              <Buttons>
                <Icon>
                  <img src={appleIcon}/>
                </Icon>
                Get on iPhone
              </Buttons>
              <Buttons>
                <Icon>
                  <img src={googleIcon}/>
                </Icon>
                Get on Android
              </Buttons>
            </ButtonHold>
          </First>
          <Second>
           <One src={nice}/>
           <Two src={two}/>
           <Three src={three}/>
           <Four src={four}/>
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Hero
const Icon = styled.div`
margin: 5px;
height: 20px;
font-size: 30px;
justify-content: center;
display: flex;
align-items: center;
color: black;
`

const Second = styled.div`
position: relative;
/* background-color: red; */
width: 40%;
height: 700px;
display: flex;
align-items: center;
justify-content: center;
`
const Four = styled.img`
position: absolute;
z-index: 2;
object-fit: cover;
height: 80px;
width: 250px;
left: -150px;
top: 250px;
`

const Three = styled.img`
position: absolute;
height: 90px;
width: 250px;
z-index: 2;
object-fit: cover;
right:9%;
bottom: 20%;
`

const Two = styled.img`
position: absolute;
/* z-index: 3; */
`

const One = styled.img`
position: absolute;
left: 2px;
z-index: 1;
width: 68%;
height: 78%;
object-fit: cover;
border-radius: 20px;

`

const Buttons = styled.div`
margin: 5px;
height: 50px;
width:180px;
background-color: white;
color: black;
justify-content: center;
align-items: center;
display: flex;
font-size: 15px;
font-weight: 500;
border-radius: 10px;
cursor: pointer;
outline: none;
border: none;
border: 1px solid black;
margin-top: 10px;
transition: all 400ms;

:hover{
  margin-top: -2px;
  transform: scale(0.99);
}
`

const Button = styled(Link)`
margin: 5px;
height: 50px;
width:220px ;
background-color: #0C1825;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
outline: none;
border: none;
font-size: 20px;
text-decoration: none;
font-weight:500;
cursor: pointer;
transition: all 400ms;
border: 1px solid black;


:hover{
  background-color: #0D5ED4;
  border: 1px solid blue;
  color: white;
  transform: scale(0.98);
}
`

const ButtonHold = styled.div`
display: flex;
margin: 5px;


`

const Sub = styled.div`
color: #5A3535;
margin: 15px;
font-family: "DM Sans";
vertical-align: baseline;
text-decoration: none solid rgb(53,53,53);
font-weight: 500;
color: rgb(53,53,53);
`

const Img = styled.img``

const Title = styled.div`
font-size: 4.6em;
font-weight: 800;
line-height: 70px;
color:rgb(12,24,37);
`


const First = styled.div`
display: flex;
flex-direction: column;
`

const Wrapper = styled.div`
/* background-color: navajowhite; */
display: flex;
align-items: center;
justify-content: space-between;
width:90% ;
height: 100%;
margin-top: 90px;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: -80px;
/* background-color: red; */
`