import React from 'react';
import { magenta, blue, base2 } from 'src/theme/colors';

const strokeWidth = 4;

function renderBoundingBox(width, height) {
 return <rect width={width} height={height} fill='none' stroke='red' />
}

function rotateInTheMiddle(degree, width, height) {
    return `rotate(${degree}, ${width/2}, ${height/2})`
}

function renderPlanetLookLike() {
    return <svg width="1000" height="1000">
        <svg width="100" height="100" x={100} >
            {renderBoundingBox(100, 100)}
            <g transform={rotateInTheMiddle(21, 100, 100)}>
                <path d='M20,50 a3,1 0 1 1 60,0' fill='none' stroke={magenta} strokeWidth={1} />
                <circle
                    cx={50}
                    cy={50}
                    r={20}
                    fill={blue}
                />
                <path d='M20,50 a3,1 0 0 0 60,0' fill='none' stroke={magenta} strokeWidth={1} />
            </g>
        </svg>
    </svg>
}

function renderCloudHorizontal() {
    return (
        <svg width="100" height="100">
            <path
                d='M50,50 a1,1 0 1 1 40, 0'
                strokeWidth={strokeWidth}
                stroke={blue}
                fill={base2}
            />
            <circle
                cx={40}
                cy={50}
                r={20}
                strokeWidth={strokeWidth}
                stroke={blue}
                fill={base2}
            />
            <path
                d='M50,50 a1,1 0 0 0 40, 0'
                strokeWidth={strokeWidth}
                stroke={blue}
                fill={base2}
            />
            {/* <path d='M0,50 l100, 0' stroke='black' strokeWidth={1}/> */}
        </svg>
    )
}

function renderSomethingLikeCloud() {

    return (
        <svg width="100" height="100">
            <circle
                cx='16'
                cy='16'
                r="15" stroke='#268bd2'
                stroke-width={strokeWidth} fill="#eee8d5"
            />
            <path
                d="M25, 25 a1,1 0 1 1 30,30"
                stroke-width={strokeWidth}
                fill='#eee8d5'
                stroke='#268bd2'
            />
            <circle
                cx="60"
                cy="60"
                r="20" stroke='#268bd2'
                stroke-width={strokeWidth} fill="#eee8d5"
            />

            <path
                d="M25, 25 a1,1 0 0 0 30,30"
                stroke-width={strokeWidth}
                fill='#eee8d5'
                stroke='#268bd2'
            />
            <line x1='0' y1='0' x2='100' y2='100' stroke='black' />
        </svg>
    )
}

export default function SvgPlayground() {
    return (
        <div style={{
            maxWidth: 1024,
            margin: 'auto',
        }}>
            <h1>My first SVG</h1>
            {
                renderSomethingLikeCloud()
            }
            {
                renderCloudHorizontal()
            }
            {
                renderPlanetLookLike()
            }
            <svg height="400" width="450">
                <path id="lineAB" d="M 100 350 l 150 -300" stroke="red"
                    stroke-width="3" fill="none" />
                <path id="lineBC" d="M 250 50 l 150 300" stroke="red"
                    stroke-width="3" fill="none" />
                <path d="M 175 200 l 150 0" stroke="green" stroke-width="3"
                    fill="none" />
                <path d="M 100 350 q 150 -300 300 0" stroke="blue"
                    stroke-width="5" fill="none" />

                <g stroke="black" stroke-width="3" fill="black">
                    <circle id="pointA" cx="100" cy="350" r="3" />
                    <circle id="pointB" cx="250" cy="50" r="3" />
                    <circle id="pointC" cx="400" cy="350" r="3" />
                </g>

                <g font-size="30" font-family="sans-serif" fill="black" stroke="none"
                    text-anchor="middle">
                    <text x="100" y="350" dx="-30">A</text>
                    <text x="250" y="50" dy="-10">B</text>
                    <text x="400" y="350" dx="30">C</text>
                </g>
            </svg>
            <svg height="200" width="300">
                <path d='M20,50 a1,1 0 0 0 50 50' fill='black' />
            </svg>

        </div>
    )
}