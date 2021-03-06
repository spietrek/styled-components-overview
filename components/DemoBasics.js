import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledWrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class DemoBasics extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledTitle>Hello CONNECT.TECH!</StyledTitle>
      </StyledWrapper>
    );
  }
}

export default DemoBasics;
