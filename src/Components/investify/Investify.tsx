import React from "react";
import styled from "styled-components";

const Investify = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Left></Left>
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
  display: flex;
  flex-direction: column;
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
