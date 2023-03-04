import React from 'react'
import styled from 'styled-components'
import image from "../../Assets/gig.png"
import {BsArrowRight} from "react-icons/bs"

const Meet = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <span>
                    Meet the saver of 
                    <br />
                    the month!
                    </span>
                    <p>
                    Every month, we shine a spotlight on one saver, asking 
                    <br />
                     them questions about their savings culture and how 
                     <br />
                     the product is specifically helping them shape how they spend 
                     <br />
                     and save for future responsibilities.
                    </p>

                    <Line>
                        <Icon>
                            <BsArrowRight/>
                        </Icon>
                        <a href="https://github.com/Dc-Valerian">Meet Dc Valerian</a>
                    </Line>
                </First>
                <Second>
                    <Img src={image}/>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Meet

const Img = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const Icon = styled.div`
display: flex;
width: 40px;
height: 40px;
color: blue;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: white;
margin-right: 10px;
`

const Line = styled.div`
display: flex;
align-items: center;
cursor: pointer;
width: fit-content;
transition: all 500ms;
background-image: linear-gradient(
    transparent 0,
    transparent 70%,
    whitesmoke
);
background-position-x: left;
background-repeat: no-repeat;
background-size: 0 100%;
:hover{
    background-size: 100% 100%;
}

a{
    color: white;
    font-weight: 600;
    text-decoration: none;
}
`

const Second = styled.div`
width: 800px;
height: 100%;
/* margin-left: 260px; */
text-decoration: none solid rgb(53,53,53);

`

const First = styled.div`
width: 60%;
/* height: 100%; */
display: flex;
flex-direction: column;
justify-content: center;
background-color:rgb(13,96,216);
height: 500px;
padding-left: 100px;

span{
    font-weight: bold;
    font-size: 50px;
    color: white;
}
p{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    line-height: 28px;
    font-size: 15px;
    font-weight: 400;
}

`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 500px;
width: 100%;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
/* background-color: #0D60D8; */
height: 600px;
margin-bottom: 30px;
`