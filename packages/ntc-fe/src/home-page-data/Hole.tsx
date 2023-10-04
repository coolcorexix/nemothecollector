import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { blue, darkerBlue } from 'src/theme/colors';
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
      transform: scale(1500);
    }
    10% {
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

function isOnPhone() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function Hole() {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    scrollToBottom();
    if (isOnPhone()) {
      router.push('/products');
      return;
    }
    setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        router.push('/products');
      }, 4000);
    }, 500);
  };
  return (
    <HoleWrapper onClick={handleClick}>
      <svg
        id="iris"
        className={`iris ${isAnimating ? 'animate' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        width="7000"
        height="7000"
      >
        <path
          d="M1000 1000 L6000 1000 L6000 6000 L1000 6000 Z M3500 3500 m-0.5, 0 a 0.5,0.5 0 1,0 1,0 a 0.5,0.5 0 1,0 -1,0"
          fill={darkerBlue}
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
