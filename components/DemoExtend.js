import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledTitleBold = styled(StyledTitle)`
  font-size: 2.5em;
  font-weight: bold;
  color: red;
`;

const StyledWrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class DemoExtend extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledTitle>Welcome to Connect.Tech!</StyledTitle>
        <StyledTitleBold>Welcome to Connect.Tech!</StyledTitleBold>
      </StyledWrapper>
    );
  }
}

export default DemoExtend;
