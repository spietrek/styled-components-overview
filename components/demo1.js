import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const TitleBold = styled(Title)`
  font-size: 2.5em;
  font-weight: bold;
  color: ${props => (props.primary ? 'black' : 'red')};
  &:hover {
    text-shadow: 2px 2px black;
  }
  @media (max-width: 400px) {
    font-size: 1.5em;
    font-weight: normal;
  }
`;

// const Wrapper = styled.section`
//   padding: 4em;
//   background: ${props => (props.primary ? "white" : "papayawhip")};
//   font-family: Lato, sans-serif;
// `;

const Wrapper = styled.section(props => ({
  padding: '4em',
  background: props.primary ? 'white' : 'papayawhip',
  fontFamily: 'Lato, sans-serif',
}));

class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <Wrapper>
        <TitleBold>Welcome to Connect.Tech!</TitleBold>
      </Wrapper>
    );
  }
}

export default Demo1;
