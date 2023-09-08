import React, { useState } from 'react';
import { blue } from 'src/theme/colors';
import styled from 'styled-components';

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

const HoleWrapper = styled.div`
  @keyframes scaleAnimation {
    0% {
      transform: scale(1000);
    }

    50% {
      transform: scale(250);
    }

    75% {
      transform: scale(50);
    }
    80% {
      transform: scale(75);
    }

    100% {
      transform: scale(1);
    }
  }
  position: relative;
  width: 70px;
  height: 70px;
  padding-bottom: 320px;

  .iris {
    visibility: hidden;
    position: absolute;
    top: -3465px;
    left: -3465px;

    &.animate {
      visibility: visible;
      animation: scaleAnimation 4s ease-in-out;
    }
  }
`;

function Hole() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    scrollToBottom();
    setTimeout(() => {
      setIsAnimating(true);
    }, 500);
    // setTimeout(() => {
    //   setIsAnimating(false);
    // }, 4000);
  };
  return (
    <HoleWrapper onClick={handleClick}>
      {/* <svg
        id="iris"
        className={`iris ${isAnimating ? 'animate' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
      >
        <path
          d="M10 10 L60 10 L60 60 L10 60 Z M35 35 m-15, 0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0"
          fill="black"
        />
      </svg> */}
      <svg
        id="iris"
        className={`iris ${isAnimating ? 'animate' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        width="7000"
        height="7000"
      >
        <path
          d="M1000 1000 L6000 1000 L6000 6000 L1000 6000 Z M3500 3500 m-0.5, 0 a 0.5,0.5 0 1,0 1,0 a 0.5,0.5 0 1,0 -1,0"
          fill={blue}
        />
      </svg>
      <img
        alt="hole"
        style={{
          width: '70px',
          cursor: 'pointer',
        }}
        src={'/hole.png'}
      />
    </HoleWrapper>
  );
}

export default Hole;
