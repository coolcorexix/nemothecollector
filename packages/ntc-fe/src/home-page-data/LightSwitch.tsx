import React, { useState } from 'react';
import styled from 'styled-components';

const LightSwitchWrapper = styled.div<{
  isOn?: boolean;
}>`
  position: relative;
  .light-switch {
    .light-tip {
      position: absolute;
      background-color: transparent;
      z-index: 99;
      width: 7px;
      height: 10px;
      ${(props) =>
        props.isOn
          ? `
        top: 30px;
    `
          : `
        top: 48px;            

    `}

      left: 25px;
      cursor: pointer;
    }
  }
  .dark-overlay {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
  }
`;

function LightSwitch() {
  const [isOn, setIsOn] = useState(true);
  return (
    <LightSwitchWrapper isOn={isOn}>
      <div className="light-switch">
        <img
          style={{
            width: '70px',
          }}
          src={'/1071125-removebg-preview.png'}
        />
        <div
          onClick={() => {
            // play an mp3 file
            const audio = new Audio('/click-button-140881.mp3');
            audio.play();
            setIsOn(!isOn);
          }}
          className="light-tip"
        />
      </div>
      {!isOn && <div className="dark-overlay" />}
    </LightSwitchWrapper>
  );
}

export default LightSwitch;
