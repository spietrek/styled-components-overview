import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 2.5em;
  color: red;
  &:hover {
    text-shadow: 2px 2px #999999;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledWrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class DemoPseudoClasses extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledTitle>Hello CONNECT.TECH!</StyledTitle>
      </StyledWrapper>
    );
  }
}

export default DemoPseudoClasses;
