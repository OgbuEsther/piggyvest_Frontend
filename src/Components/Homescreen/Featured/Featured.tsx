import React from 'react'
import styled from 'styled-components'
import img1 from "../../Assets/techpoint.png"
import img2 from "../../Assets/theGuardian.png"
import img3 from "../../Assets/techCrunch.png"
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <div>
        <Container>
            <Wrapper>
               <First>
                <Title>
                As featured in
                </Title>
               </First>
               <Second>
               
               <Image src={img1}/>
               <Image src={img2} />
              <Image src={img3}/>
              </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Featured
const Image =styled.img`
width: 30%;
height: 100%;
object-fit: cover;
margin: 10px;
`

const Second = styled.div`
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
/* height: 40%; */
width: 55%;
margin-left:90px;
cursor: pointer;
/* background-color: red; */


`

const Title = styled.div`
font-weight: bold;
font-size: 40px;
`

const First = styled.div``

const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 90%;
/* background-color: aliceblue; */
height: 100%;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #F9F9F9;
width: 100%;
height: 200px;
margin-bottom: 40px;
`