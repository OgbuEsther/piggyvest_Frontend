import React from 'react'
import styled from 'styled-components'
import SideBar from '../DashBoard/SideBar'
import Savings from "./Savings"

const SavingsDashboard = () => {
  return (
    <Container>
      <SideBar />
        <Savings />
    </Container>
  )
}

export default SavingsDashboard

const Container = styled.div`
    display: flex;
`