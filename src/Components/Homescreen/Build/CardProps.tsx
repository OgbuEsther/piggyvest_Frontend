import React from 'react'
import styled from 'styled-components'
import {BsArrowRight} from "react-icons/bs"

interface props{
    text1:string;
    text2:string;
    image:string;
    ButtonText:string;
    color:string;
    bcc:string
}

const CardProps:React.FC<props>= ({
    text1,
    text2,
    image,
    ButtonText,
    color,
    bcc
}) => {
  return (
    <div>
        <Container>
            <Image src={image}/>
           <span>
            {text1}
           </span>
            <p>
                {text2}
            </p>
            <nav>
                <Icon bc={bcc} cl={color}>
                    <BsArrowRight/>
                </Icon>
                <Text>
                    {ButtonText}
                </Text>
            </nav>
        </Container>
    </div>
  )
}

export default CardProps

const Text = styled.div`
color: #484848;
margin-left: 10px;
font-weight: 500;
`

const Icon = styled.div<{bc:string ;cl:string}>`
display: flex;
width: 40px;
height: 40px;
color: ${(props)=>props.cl};
background-color: ${(props)=>props.bc};
justify-content: center;
align-items: center;
border-radius: 50%;
`

const Image = styled.img`
width: 50px;
margin-bottom: 20px;
`

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 320px;
border-radius: 20px;
background-color:#F9F9F9;
padding-left: 30px;
height: 320px;
margin: 30px;
cursor: pointer;

span{
    font-weight: bold;
    font-size: 30px;
}
nav{
    display: flex;
    align-items: center;
    margin-top: 50px;
}
 :hover{
    nav{
        margin-left: 15px;
        transition: all 400ms;
        transform: scale(0.98);
    }
 }

`