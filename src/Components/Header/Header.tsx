import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import img from "../Assets/piggylogo.svg"

const Header = () => {
    const [show, setShow] = React.useState(false)

    const changeHeaderColor = () => {
        if (window.scrollY >= 70) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    window.addEventListener("scroll", changeHeaderColor)
  return (
    <>
        {show ? (
            <Container bg="#fff" bs=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
        <Wrapper>
            <Logo>
                <Img src={img} />
                <Navs>
                    <Nav>Save</Nav>
                    <Nav>Invest</Nav>
                    <Nav>Stories</Nav>
                    <Nav>FAQs</Nav>
                    <Nav>Blog</Nav>
                    <Nav>E-book</Nav>
                </Navs>
            </Logo>
            <Buttonhold>
                <NavLink to="/login" style={{textDecoration: "none"}}>
                    <Button1>
                    Sign in
                </Button1>
                </NavLink>
                <NavLink to="/signup">
                    <Button2>
                    Create free account
                </Button2>
                </NavLink>
            </Buttonhold>
        </Wrapper>
    </Container>
        ): (
            <Container bg="#fff" bs="#fff">
        <Wrapper>
            <Logo>
                <Img src={img} />
                <Navs>
                    <Nav>Save</Nav>
                    <Nav>Invest</Nav>
                    <Nav>Stories</Nav>
                    <Nav>FAQs</Nav>
                    <Nav>Blog</Nav>
                    <Nav>E-book</Nav>
                </Navs>
            </Logo>
            <Buttonhold>
                <NavLink to="/login" style={{textDecoration: "none"}}>
                    <Button1>
                    Sign in
                </Button1>
                </NavLink>
                <NavLink to="/signup">
                    <Button2>
                    Create free account
                </Button2>
                </NavLink>
            </Buttonhold>
        </Wrapper>
    </Container>
        )}
    </>
  )
}

export default Header
const Button2 = styled.button`
    background: #0c1825;
    transition: background-color .8s;
    font-size: 16.5px;
    font-weight: 600;
    color: #fff!important;
    text-align: center;
    white-space: nowrap;
    padding: 11px 22px;
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;
    font-family: DM Sans,sans-serif!important;
    line-height: 27.2px;
    margin-left: 10px;
`
const Button1 = styled.button`
    color: #0c1825!important;
    background-color: #fff;
    border: 1px solid #bbb;
    transition: border .8s,color .8s;
    font-size: 16.5px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    padding: 16px 22px;
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;
    font-family: DM Sans,sans-serif!important;
`
const Buttonhold = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`
const Nav = styled.div`
    color: #0c1825;
    font-weight: 500;
    cursor: pointer;
    font-family: DM Sans,sans-serif!important;
    margin-left: 50px;
    margin-top: 5px;
    /* font-weight: bold; */
`
const Navs = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`
const Img = styled.img`
    
`
const Logo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`

const Container = styled.div<{bg: string; bs: string}>`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.bg};
    box-shadow: ${(props) => props.bs};
    position: sticky;
`