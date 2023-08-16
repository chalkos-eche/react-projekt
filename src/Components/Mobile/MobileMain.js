import React from "react";
import MobileLayout from "../Layouts/MobileLayout";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Bgi = styled.div`
  user-select: none;
  background: url("/assets/MobileMainImg.jpg") no-repeat cover;
  background-color: #1b2526;
  background-position: 0% 100%;
  width: inherit;
  height: 100%;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  margin: 20px 0px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Title = styled.h1`
  color: white;
  margin: 10px 0;
  margin-left: 16px;
  font-size: 62px;
`;
const Subtitle = styled.h2`
  color: #eee;
  margin-left: 16px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: underline;
`;
const Button = styled.button`
  width: 440px;
  height: 80px;
  border: none;
  outline: none;
  border-radius: 20px;
  margin: 10px 10px;
  font-size: 24px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  box-shadow: 0px -1.6px 30px -37px rgba(0, 0, 0, 0.04),
    0px -1.2px 35.9px -37px rgba(0, 0, 0, 0.054),
    0px 2.6px 38px -37px rgba(0, 0, 0, 0.078),
    0px 13.8px 43.3px -37px rgba(0, 0, 0, 0.135),
    0px 48px 80px -37px rgba(0, 0, 0, 0.39);
  &.order {
    background-color: #f08e2a;
  }
  &.login {
    background-color: #fff;
    color: #f08e2a;
  }
`;
const MobileMain = () => {
  return (
    <>
      <Bgi>
        <MobileLayout>
          <Header>
            <img src="assets/blogo.png" alt="" />
          </Header>
          <footer>
            <Title>SUPER FOOD, DUPER FUN</Title>
            <Subtitle>Premium Burger from San Francisco !</Subtitle>
            <ButtonWrap>
              <Button className="order">
                <Link to="/order">Order</Link>
              </Button>
              <Button className="login">
                <Link to="/login">Login / Register</Link>
              </Button>
            </ButtonWrap>
          </footer>
          {/* <img src={MobileMainImg} alt="1" /> */}
        </MobileLayout>
      </Bgi>
    </>
  );
};

export default MobileMain;
