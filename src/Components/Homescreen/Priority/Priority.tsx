import React from 'react'
import styled from 'styled-components'
import {FaGreaterThan} from "react-icons/fa"
import img from "../../Assets/security.png"

const Priority = () => {
  return (
    <div>
    <Container>
     <Wrapper>
     <Image src={img}/>
 <Second>
   <h2>Your security is our priority</h2>
   <p>
   PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security
   <br />
    encryption to ensure that your information is comepletely protected from fraud.
   </p>
   <Learn>
    <a href="/"> Learn More</a>
     <Icon>
       <FaGreaterThan/>
     </Icon>
   </Learn>
 </Second>
     </Wrapper>
    </Container>
    </div>
  )
}

export default Priority

const Icon = styled.div`
margin-top: 6px;
font-size: 10px;
`

const Learn = styled.div`
color: #0D60DF;
display: flex;
/* justify-content: center; */
align-items: center;
margin: 2px;
margin-top: 30px;
font-weight: bold;

a{
  text-decoration: none;
  color:  #0D60DF;
}
`

const Second = styled.div`
h2{
  font-weight: bold;
  font-size: 40px;
  margin: 9px;
}
p{
  font-family: "Dm Sans";
  vertical-align: baseline;
  text-decoration: none solid rgb(53,53,53);
  font-weight: 300;
  font-size: 18px;
  color: grey;
  margin: 0;

}
`

const Image = styled.img`
width: 150px;
margin-right: 30px;
cursor: pointer;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 30px;
`
