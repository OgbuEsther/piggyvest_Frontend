import React from 'react'
import styled from 'styled-components'
import phone from "../../Assets/invest.png"
import {FaGreaterThan} from "react-icons/fa"

const Investment = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <Image src={phone}/>
                </First>
                <Second>
                    <Button>Up To 25% Returns</Button>
                    <span>
                    Access investment
                    <br />
                     opportunities
                    </span>
                    <p>
                    Invest securely and confidently on the go. Grow your
                    <br />
                     money confidently by investing in pre-vetted investment
                     <br />
                      opportunities.
                    </p>
                    <Line>
                        Learn more about Investments 
                        <Icon>
                        <FaGreaterThan/>
                        </Icon>
                    </Line>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Investment
const Icon = styled.div`
margin-top: 6px;
font-size: 10px;
margin-left: 7px;
font-weight: 500;
`

const Line  = styled.div`
display: flex;
align-items: center;
cursor: pointer;
width: fit-content;
transition: all 500ms;
background-image: linear-gradient(
    transparent 0,
    transparent 70%,
    black
);
background-position-x: left;
background-repeat: no-repeat;
background-size: 0 100%;
:hover{
    background-size: 100% 100%;
}
`

const Button = styled.button`
height: 30px;
width: 150px;
background-color: #F7F0FF;
outline: none;
border: none;
border-radius: 50px;
color: #7913E9;
font-size: 15px;
font-weight: bold;
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const Second = styled.div`
display: flex;
flex-direction: column;

span{
    font-weight: 500;
    color: #0C1825;
    font-size: 60px;
    margin-top: 30px;
}
p{
    line-height: 30px;
    color: grey;
    margin-top: 30px;
    font-size: 18px;
}
`


const First = styled.div`
width: 300px;
margin-right: 50px;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
width: 100%;
margin-bottom: 200px;
`