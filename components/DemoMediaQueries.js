import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  tablet: 999,
  phone: 576,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const StyledTitle = styled.h1`
  font-size: 2.5em;
  color: red;

  ${media.tablet`color: white;`} ${media.phone`color: white;`};
`;

const StyledWrapper = styled.section`
  padding: 4em;
  background: papayawhip;

  ${media.tablet`background: mediumseagreen;`} ${media.phone`background: palevioletred;`};
`;

class DemoMediaQueries extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledTitle>Hello CONNECT.TECH!</StyledTitle>
      </StyledWrapper>
    );
  }
}

export default DemoMediaQueries;
