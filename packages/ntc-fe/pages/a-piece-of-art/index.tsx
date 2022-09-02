import React from 'react';

export default () => {
  return (
    <div className="m-auto p-6">
      <span className="block mb-2">A piece of art 1</span>
      <div>
        <svg width="512px" height="512px" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stop-color="#fff" />
              <stop offset="70%" stop-color="#ffff00" />
              <stop offset="100%" stop-color="#ffff00" />
            </linearGradient>
            <clipPath id="clip1">
              <path
                style={{
                  transform: 'translate(18px, 25px) scale(0.3)',
                }}
                d="M 70 60 C 70 80, 110 80, 110 60
                  L 110 0
                  L 50 0
                  L 40 60
                  Z"
              />
            </clipPath>
          </defs>

          <rect
            width="100"
            height="100"
            style={{
              fill: 'rgb(0, 0, 255)',
              stroke: 'transparent',
            }}
          />
          <circle cx="50" cy="50" r="20" fill="url(#gradient)" />
          <path
            className="tear"
            style={{
              transform: 'translate(38px, 45px) scale(0.3)',
              animation: 'tearmove 5s infinite',
              animationTimingFunction: 'ease-in',
            }}
            fill="cyan"
            d="M15 6
            Q 15 6, 25 18
            A 12.8 12.8 0 1 1 5 18
            Q 15 6 15 6z"
          />
          <path
            style={{
              transform: 'translate(18px, 25px) scale(0.3)',
            }}
            d="M 70 60 C 70 80, 110 80, 110 60"
            stroke="black"
            fill="transparent"
          />
          <path
            style={{
              transform: 'translate(34px, 25px) scale(0.3)',
            }}
            d="M 70 60 C 70 80, 110 80, 110 60"
            stroke="black"
            strokeWidth={0.5}
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="url(#gradient)"
            clipPath="url(#clip1)"
          />
        </svg>
      </div>
    </div>
  );
};
