import React from "react";
import styled from "styled-components";

const Investify = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <Top2>
                <p>TOTAL BALANCE</p>
                <h3>0.00</h3>
              </Top2>
              <Bottom>
                <p>Learn More</p>
              </Bottom>
            </Left>
            <Right>
              <h6>EXPECTED ROI</h6>
              <h3>Up to 25%</h3>
              <p>Per Annum</p>
            </Right>
          </Top>
          <MainBottom></MainBottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Investify;

const MainBottom = styled.div``;

const Right = styled.div`
  width: 30%;
  display: flex;
  height: 110px;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;

  h6 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  h3 {
    margin: 0;
    color: #083e9e;
    font-weight: 300;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  height: 150px;
  border: 1px solid #e2e8f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  /* padding-left: 15px; */
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
  height: 60%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  flex-direction: column;
`;

const Bottom = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 290px;
`;
