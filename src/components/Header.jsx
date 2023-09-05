import React from 'react';
import { styled } from 'styled-components';


const Header = ({ onLogout }) => {
  return (
    <HeaderContainer>
      <H1>Trello</H1>
      <Button onClick={onLogout}>Выход</Button>
    </HeaderContainer>
  );
};
const HeaderContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4747bf;
  width: 1440px;
  height: 110px;
  margin-top: -3px;
  color: white;
`;

const H1 = styled('h1')`
  margin: 0;
  margin-left: 650px;
  margin-top: -20px;
`;

const Button = styled('button')`
  width: 250px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #ce4c4c;
  color: white;
  margin-top: -15px;
  margin-right: 30px;
  &:hover {
    background-color: #cf3131;
  }
`;

export default Header;
