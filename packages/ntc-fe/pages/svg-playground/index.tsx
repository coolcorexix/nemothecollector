import React, { useState } from 'react';
import { base1, base01, magenta, blue, base2, base3, base03, base00, base02, dark100, dark1000, dark10000 } from 'src/theme/colors';

const strokeWidth = 4;

function renderBoundingBox(width, height) {
 return <rect width={width} height={height} fill='none' stroke='red' />
}

function rotateInTheMiddle(degree, width, height) {
    return `rotate(${degree}, ${width/2}, ${height/2})`
}

function renderPlanetLookLike() {
    return <svg width="100" height="100">
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

function renderCube() {
    return (
        <>
        <svg viewBox="0 -20 300 100">
            <path d='M0,-11.55 l300,0' stroke='black' strokeWidth={1}/>
            <g id='cube' strokeWidth={1} fill={base1} fillOpacity={1} stroke={base03}>
                <rect x={0} fill={`var(--rightsurface,${dark1000})`} y={0} width={20} height={20} transform='skewY(30)' rx={1} />
                <rect x={0} fill={`var(--leftsurface,${dark10000})`} y={0} width={20} height={20} transform='skewY(-30) translate(20, 23.1)' rx={1} />
                <rect x={0} fill={`var(--leftsurface,${dark100})`} y={0} width={20} height={20} transform="scale(1.41,.81) rotate(45) translate(0 -20)" rx={1}  />
            </g>

        </svg>
        </>
    )
}

function renderManyCube() {
    const [isInMorph, setIsInMorph] = useState(false);
    return (
        <svg onClick={() => setIsInMorph(true)} className={isInMorph ? 'in-morph' : ''} viewBox='-21 -10 300 300'>
            {/* 0 diagonal row <><><> */}
            <use className='moving-100' xlinkHref="#cube" x="20" y={60-11.55}/>
            <use className='moving-100' xlinkHref="#cube" x="20" y={40-11.55}/>
            <use className='moving-100' xlinkHref="#cube" x="20" y={20-11.55}/>

            {/* 1st diagonal row <><><> */}
            <use className='moving1000' xlinkHref="#cube" x="0" y="60"/>
            <use className='moving1000' xlinkHref="#cube" x="0" y="40"/>
            {/* <use xlinkHref="#cube" x="0" y="20"/> */}
            
            <use className='moving10' xlinkHref="#cube" x="40" y="60"/>
            <use className='moving10' xlinkHref="#cube" x="40" y="40"/>
            {/* <use xlinkHref="#cube" x="40" y="20"/> */}
            
            {/* 2nd diagonal row  <><><> */}

            {/* first step */}
            <use className='moving-10' xlinkHref="#cube" x="-20" y="71.55"/>
            {/* <use xlinkHref="#cube" x="-20" y="51.55"/>
            <use xlinkHref="#cube" x="-20" y="31.55"/> */}

            <use className='moving100' xlinkHref="#cube" x="20" y="71.55"/>
            <use className='moving100' xlinkHref="#cube" x="20" y="51.55"/>
            {/* <use xlinkHref="#cube" x="20" y="31.55"/> */}

            <use className='moving100000' xlinkHref="#cube" x="60" y="71.55"/>
            {/* <use xlinkHref="#cube" x="60" y="51.55"/> */}
            {/* <use xlinkHref="#cube" x="60" y="31.55"/> */}

            {/* 3rd diagonal row  <><><> */}
            {/* second step */}
            <use className='moving100' xlinkHref="#cube" x="0" y="83.1"/>
            {/* <use xlinkHref="#cube" x="0" y="63.1"/>
            <use xlinkHref="#cube" x="0" y="43.1"/> */}

            <use className='moving10000' xlinkHref="#cube" x="40" y="83.1"/>
            {/* <use xlinkHref="#cube" x="40" y="63.1"/>
            <use xlinkHref="#cube" x="40" y="43.1"/> */}


            {/* 4th diagonal row  <><><> */}
            <use className='moving1000' xlinkHref="#cube" x="20" y="94.65"/>
            {/* <use xlinkHref="#cube" x="20" y="74.65"/>
            <use xlinkHref="#cube" x="20" y="54.65"/> */}
            
            
            

        </svg>
    )
}

function generateACol(wheX, ) {
    const hsn = 11.55;
    const cubes = [];
    for (let i = 0; i < 3; i++) {
        cubes.push(<use xlinkHref="#cube" x="40" y="83.1"/>)
    }

    return (<>

    </>)
}

function renderDaylightSky() {
    return <svg width="100" height="100">

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
            <div
                className='background'
                style={{
                    width: '200px',
                    height: '200px',
                    background: '#89CFF0',
                }}
            />
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
            {
                renderCube()
            }
            {
                renderManyCube()
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