import React from 'react'
import styled from 'styled-components'
import Chats from './Chats';
import lonely from "../../Assets/lonely.jpg"
import slider1 from "../../Assets/slider1.jpg"
import shazam from "../../Assets/shazam.jpg"
import me from "../../Assets/me.jpeg"
import { Link } from 'react-router-dom';
import appleIcon from "../../Assets/apple-icon.svg"
import googleIcon from "../../Assets/google-icon.svg"

const Customers = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <ChatHold>
              <Chats
               date='Monday, 3rd of April 2023 by 1:29 PM'
              image={me}
              message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
              name=' Dc Valerian'
              />
              <Chats
                date='Thursday, 2nd of March 2023 by 1:29 PM'
              image={slider1}
              message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
              name=' Pedro'
              />
              <Chats
              date='Friday, 3rd of March 2023 by 1:29 PM'
              image={shazam}
              message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
              name=' Divine Peace'
              />
              <Chats
              date='Saturday, 24th of March 2023 by 1:29 PM'
              image={lonely}
              message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
              name=' Judtonia'
              />
            </ChatHold>
          </First>
          <Second>
            <span>
            4 Million + customers
            </span>
            <p>
            Since launching in 2016, over 4,000,000 people 
            <br />
             have used PiggyVest to manage their money better, avoid 
             <br />
              over-spending and be more accountable.
            </p>
            <Button to="register">
              Create Fee Account
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
          </Second>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Customers;
const Icon = styled.div`
margin: 5px;
height: 20px;
font-size: 30px;
justify-content: center;
display: flex;
align-items: center;
color: black;
`

const ChatHold = styled.div`
width: 100%;
height: 100%;
position: absolute;
transition: all 500ms;
animation: MoveUpDown 15s linear infinite;

@keyframes MoveUpDown {
  from{
    bottom: 60px;
  }
  to{
    bottom: 400px;
  }
}
`

const Buttons = styled.button`
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

const ButtonHold = styled.div`
display: flex;
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

const Second = styled.div`
margin-left: 50px;
span{
  font-weight: bold;
  font-size: 50px;
}
p{
  text-decoration: none solid rgb(53,53,53);
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #353535;
}
`

const First = styled.div`
display: flex;
width: 50%;
height: 100%;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 100%;
/* background-color: aliceblue; */
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;
/* background-color: blueviolet; */
margin-bottom: 100px;
`