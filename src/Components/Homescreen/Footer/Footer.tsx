import React, {useState} from 'react'
import styled from 'styled-components';
import { BsArrowUpSquare, BsBoxArrowDown } from "react-icons/bs";
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logo.svg"
import footer from "../../Assets/footer.webp"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa"
import {AiFillTwitterSquare} from "react-icons/ai"

const Footer = () => {
        return (
    <Container>
        <Wrapper>
            <Wrap>
                <nav>
                  <Logo src={logo}/>
                </nav>
                <nav>
                  <Image src={footer}/>
                </nav>
              
            </Wrap>
            <Wrap>
              <Head>Products</Head>
              <nav>Piggybank</nav>
            <nav>Invest</nav>
            <nav>Safelock</nav>
            <nav>Target Savings</nav>
            <nav>Flex Naira</nav>
            </Wrap>
            <Wrap>
               <Head>Company</Head>
               <nav>About</nav>
            <nav>FAQs</nav>
            <nav>Blog</nav>
            </Wrap>
            <Wrap>
               <Head>Legal</Head>
               <nav>Terms</nav>
            <nav>Privacy</nav>
            <nav>Security</nav>
            </Wrap>
            <Wrap>
          <IconHold>
          <Icon>
                <FaFacebookSquare/>
              </Icon>
              <Icon>
                <AiFillTwitterSquare/>
              </Icon>
              <Icon>
                <FaInstagramSquare/>
              </Icon>
          </IconHold>
          <nav>45,Prince Fadina Street,Olodi Apapa
            <br />
            Lagos,Nigeria
          </nav>
            <nav>valerianpedro03@gmail.com</nav>
            <nav>
              +234 803 717 1484
            </nav>
         
            </Wrap>
          
         
        </Wrapper>
        <Last>
        <p>
        Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our  
        
          <br />
      
      { " "}  customers have saved and invested billions of Naira that they would normally be tempted to spend.
        </p>
        </Last>
         <ArrowToTop to="header" >
             <BsArrowUpSquare />
             {/* <BsBoxArrowDown /> */}
        </ArrowToTop> 
    </Container>
  )
}
export default Footer;
const Icon = styled.div`
margin: 3px;
font-size:40px;
`

const IconHold = styled.div`
display: flex;
`

const Head = styled.div`
display: flex;

`

const Image = styled.img`
height:70%;
width: 70%;
object-fit: cover;
`

const Logo = styled.img``

const ArrowToTop = styled(Link)`
    color: black;
    position: fixed;
    right: 60px;
    font-size: 40px;
    bottom: 25px;
    cursor: pointer;
    transition: all 350ms;
    :hover{
        transform: scale(1.10);
    }
`;

const Container = styled.div`
width: 100%;
padding-top: 30px;
flex-wrap: wrap;
/* background-color: skyblue; */
position: relative;
margin-bottom: 100px;
`
const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(6, 3fr);
justify-content:center;
/* align-items: center; */
/* background-color: red; */
margin-left: 30px;
/* width: 100%; */

nav{
    color: black;
    font-size: 18px;
    margin: 10px;


}
`
const Wrap = styled.div`
width: 80%;
/* display: flex; */
/* justify-content: center; */
/* align-items: center; */
/* font-weight: bold; */
`
const Last = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
/* background-color: #0000ff40; */
height: 40px;
line-height: 25px;
text-align: center;
` 