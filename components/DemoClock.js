import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import moment from 'moment';
import Interval from './Interval';

const theme = {
  day: '#7D53DE',
  hour: '#D1C4E9',
  min: '#F71735',
  sec: '#BAA898',
  ampm: '#FF9F1C',
};

const StyledAppContainer = styled.div`
  margin: auto;
  width: 40%;
`;

const StyledContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const wobble = keyframes`
  33% {
    transform: translateX(-50px);
  }

  66% {
    transform: translateX(50px);
  }
`;

const animationMixin = css`
  animation: ${wobble} 5s linear infinite;
`;

const StyledTimeBlock = styled.div`
  width: 15vw;
  padding: 4vw 2vw;
  margin: 0 3vw;
  font-size: 5vw;
  text-align: center;
  vertical-align: middle;
  border-radius: 1rem;
  background-color: ${props => props.theme};
  opacity: ${p => (p.disabled ? 0.3 : 1.0)};
  ${props => (props.animation ? animationMixin : '')};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleButton = styled.button`
  border: none;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin-right: 20px;
  opacity: ${p => (p.disabled ? 0.3 : 1.0)};
  background-color: ${p => (p.disabled ? 'grey' : '#4CAF50')};
  color: ${p => (p.disabled ? '#555' : '#FFFFFF')};
`;

class DemoProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerDisabled: true,
      animationEnabled: false,
      callback: this.timer,
      day: 'XX',
      hour: '00',
      min: '00',
      sec: '00',
      ampm: 'AM',
    };
  }

  onToggleInterval = () => {
    const { timerDisabled } = this.state;
    this.setState({ timerDisabled: !timerDisabled });
  };

  onToggleAnimation = () => {
    const { animationEnabled } = this.state;
    this.setState({ animationEnabled: !animationEnabled });
  };

  timer = () => {
    this.setState({
      day: moment().format('dd'),
      hour: moment().format('hh'),
      min: moment().format('mm'),
      sec: moment().format('ss'),
      ampm: moment().format('A'),
    });
  };

  render() {
    const {
      timerDisabled,
      animationEnabled,
      callback,
      day,
      hour,
      min,
      sec,
      ampm,
    } = this.state;
    return (
      <StyledAppContainer>
        <StyledContainer>
          <Interval
            enabled={!timerDisabled}
            callback={callback}
            timeout={1000}
          />
          <StyledTimeBlock
            disabled={timerDisabled}
            animation={animationEnabled}
            theme={theme.day}
          >
            {day}
          </StyledTimeBlock>
          <StyledTimeBlock
            disabled={timerDisabled}
            animation={animationEnabled}
            theme={theme.hour}
          >
            {hour}
          </StyledTimeBlock>
          <StyledTimeBlock
            disabled={timerDisabled}
            animation={animationEnabled}
            theme={theme.min}
          >
            {min}
          </StyledTimeBlock>
          <StyledTimeBlock
            disabled={timerDisabled}
            animation={animationEnabled}
            theme={theme.sec}
          >
            {sec}
          </StyledTimeBlock>
          <StyledTimeBlock
            disabled={timerDisabled}
            animation={animationEnabled}
            theme={theme.ampm}
          >
            {ampm}
          </StyledTimeBlock>
        </StyledContainer>
        <StyledButtonContainer>
          <StyleButton
            disabled={!timerDisabled}
            onClick={this.onToggleInterval}
          >
            Start Timer
          </StyleButton>
          <StyleButton
            disabled={timerDisabled}
            onClick={this.onToggleInterval}
          >
            Stop Timer
          </StyleButton>
          <StyleButton
            disabled={timerDisabled || animationEnabled}
            onClick={this.onToggleAnimation}
          >
            Start Animation
          </StyleButton>
          <StyleButton
            disabled={!animationEnabled}
            onClick={this.onToggleAnimation}
          >
            Stop Animation
          </StyleButton>
        </StyledButtonContainer>
      </StyledAppContainer>
    );
  }
}

export default DemoProps;
