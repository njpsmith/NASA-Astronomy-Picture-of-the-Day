import React from 'react';
import logo from './../images/nasa-logo.png';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const AppHeader = styled.div`
  background-color: #222;
  height: 130px;
  padding: 20px;
  color: white;
  a {
    text-decoration: none;
    color: #fff;
  }
`
const AppTitle = styled.h1`
  font-size: 1.5em;
`
const Logo = styled.img`
  height: 80px;
`


const Header = (props) => {
  return (
    <AppHeader>
      <Link to={{
        pathname: '/'
      }}>
        <Logo src={logo} alt="NASA" />
        <AppTitle>Astronomy Photo of the Day</AppTitle>
      </Link>
    </AppHeader>
  );
};

export default Header;