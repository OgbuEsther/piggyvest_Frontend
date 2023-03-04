import React from "react";
import styled from "styled-components";

const Investify = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <Top2></Top2>
              <Bottom></Bottom>
            </Left>
            <Right></Right>
          </Top>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Investify;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  width: 63%;
  display: flex;
  height: 150px;
  border: 1px solid #e2e8f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
  flex-direction: column;
  justify-content: center;
  h3 {
    color: #083e9e;
    font-weight: 700;
    font-family: U8, sans-serif;
    margin: 0;
    font-size: 40px;
  }
  p {
    color: #4a5568;
    font-family: Karla, sans-serif;
    font-size: 12px;
    margin: 0;
  }
`;

const Top2 = styled.div`
  width: 100%;
  height: 80%;
  background-color: red;
`;

const Bottom = styled.div`
  width: 100%;
  height: 20%;
  background-color: black;
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 290px;
  /* background-color: red; */
`;
