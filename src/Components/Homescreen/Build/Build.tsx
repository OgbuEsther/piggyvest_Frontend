import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CardProps from './CardProps'
import piggy from "../../Assets/piggy.png"
import lock from "../../Assets/safelock.png"
import target from "../../Assets/target.png"
import flex from "../../Assets/flex.png"



const Build = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <span>
                    4 ways to build <br /> your savings
                    </span>
                    <p>
                    Earn 5%-15% when you save with any <br /> of these PiggyVest plans.
                    </p>
                    <Button to="/">Start Saving</Button>
                </First>
                <Second>
                    <CardProps
                    text1='Automated Savings'
                    text2='Build a dedicated savings faster on your terms automatically or manually'
                    ButtonText='PiggyBank'
                    image={piggy}
                    bcc="#E4F0FD"
                    color="blue"
                    />
                    <CardProps
                    text1="Fixed Savings"
                    text2="Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."
                    ButtonText='Safelock'
                    image={lock}
                    bcc="#E7F5FD"
                    color="#58A9FD"
                    />
                    <CardProps
                    text1='Goal-oriented Savings'
                    text2="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
                    ButtonText='Target Savings'
                    image={target}
                    bcc="#E7FDF0"
                    color="#34AC62"
                    />
                    <CardProps
                    text1="Flexible Savings"
                    text2="Save, transfer, withdraw, manage and organise your money for free at any time."
                    ButtonText="Flex Naira"
                    image={flex}
                    bcc="#FBE9F5"
                    color="#E850A1"
                    />
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Build
const Button = styled(Link)`
margin: 5px;
height: 50px;
width:150px;
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

const Second = styled.div`
display: flex;
flex-wrap: wrap;
padding-bottom: 10px;
justify-content: flex-end;
align-items: flex-end;
width: 70%;
`

const First = styled.div`
span{
    font-weight: bold;
    font-size: 35px;
}

p{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    vertical-align: baseline;
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 30px;
}
`

const Wrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 80px;
margin-bottom: 20px;
`