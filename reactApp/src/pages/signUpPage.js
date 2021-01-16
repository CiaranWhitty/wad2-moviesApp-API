import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Container, Header } from 'semantic-ui-react'

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }
  
  // eslint-disable-next-line 
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (
    <>

    
      <Container textAlign='center' text >
        <Header as='h2'>SignUp page</Header>
          
          <p>You must register a username and password to log in </p>

          <input 
          value={userName} 
          placeholder="user name" 
          onChange={e => {
            setUserName(e.target.value);
          }}>
          </input>
          <br />

          <input 
          value={password} 
          type="password" 
          placeholder="password" 
          onChange={e => {
            setPassword(e.target.value);
          }}>
          </input>
          <br />

          <input 
          value={passwordAgain} 
          type="password" 
          placeholder="password again" 
          onChange={e => {
            setPasswordAgain(e.target.value);
          }}>
          </input>
          <br />

          {/* Login web form  */}
          <button onClick={register}>Register</button>
          <p>Registered?<Link to="/login">Sign In!</Link></p>
          
      </Container>
      
    </>
  );
};

export default SignUpPage;