import React, { Component } from 'react';
import styled from 'styled-components';
import { lighten, ellipsis, wordWrap } from 'polished';

const StyledRedTitle = styled.h3`
  text-align: center;
  color: #ff0000;
`;

const StyledLighterRedTitle = styled(StyledRedTitle)`
  color: ${lighten(0.2, '#ff0000')};
`;

const StyledEllipsisTitle = styled(StyledRedTitle)`
  ${ellipsis('300px')};
`;

const StyledWordWrapTitle = styled(StyledRedTitle)`
  max-width: 360px;
  ${wordWrap('break-word')};
`;

const StyledWrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class DemoBasics extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledRedTitle>This is a standard red title.</StyledRedTitle>
        <StyledLighterRedTitle>
          This title color has been lightened.
        </StyledLighterRedTitle>
        <StyledEllipsisTitle>
          This is an example of a long title.
        </StyledEllipsisTitle>
        <StyledWordWrapTitle>
          This is an example of word wrap.
        </StyledWordWrapTitle>
      </StyledWrapper>
    );
  }
}

export default DemoBasics;
