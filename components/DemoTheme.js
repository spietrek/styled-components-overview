import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  fg: 'red',
  bg: 'white',
};

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.fg};
  background: ${props => props.theme.bg};
`;

const StyledWrapper = styled.section`
  padding: 4em;
  background: black;
`;

class DemoTheme extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <StyledTitle>Hello CONNECT.TECH!</StyledTitle>
          <ThemeProvider theme={invertTheme}>
            <StyledTitle>Inverted Theme</StyledTitle>
          </ThemeProvider>
        </StyledWrapper>
      </ThemeProvider>
    );
  }
}

export default DemoTheme;
