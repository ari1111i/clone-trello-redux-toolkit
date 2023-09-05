import React, { useState } from "react";
import { styled } from 'styled-components'

const LoginTrello = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const isAuthenticated = true; 

    if (isAuthenticated) {
      onLogin();
    } else {
      alert("Ошибка аутентификации. Попробуйте снова.");
    }
  };

  return (
    <Container>
      <H2>Login</H2>
      <Input
        type="text"
        placeholder="Login"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div><Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /></div>
      <Button onClick={handleLogin}>Sign In</Button>
    </Container>
  );
};
const Container = styled('div')`
    background-color: #9292f0;
    height: 820px;
    margin-top: -20px;
    
`
const H2 = styled('h2')`
  justify-content: center;
  display: flex;
  font-size: 30px;
  margin-top: 20px;
  color: white;
  margin-left: -20px;
  
`
const Input = styled('input')`
  margin-left: 600px;
  padding: 10px;
  border: none;
  box-shadow: 0px 0px 1px 0px;
  width: 230px;
`
const Button = styled('button')`
  width: 250px;
  height: 40px;
  margin-left: 600px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  background-color: #8484ed;
  color: white;
&:hover{
  background-color: #7272ea;
}
`

export default LoginTrello;
