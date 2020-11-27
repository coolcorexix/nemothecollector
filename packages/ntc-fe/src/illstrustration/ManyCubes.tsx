import React, { useState } from 'react';
import { base03, dark100, dark1000, dark10000 } from 'src/theme/colors';

export function ManyCubes() { 
    const [isInMorph, setIsInMorph] = useState(false);
    return (
        <svg height={200} width={200} onClick={() => setIsInMorph(true)} className={isInMorph ? 'in-morph' : ''} viewBox='-21 -10 300 300'>
            <svg style={{display: 'none'}} viewBox="0 -20 300 100">
                <path d='M0,-11.55 l300,0' stroke='black' strokeWidth={1}/>
                <g id='cube' strokeWidth={1} fillOpacity={1} stroke={base03}>
                    <rect x={0} fill={`var(--rightsurface,${dark1000})`} y={0} width={20} height={20} transform='skewY(30)' rx={1} />
                    <rect x={0} fill={`var(--leftsurface,${dark10000})`} y={0} width={20} height={20} transform='skewY(-30) translate(20, 23.1)' rx={1} />
                    <rect x={0} fill={`var(--leftsurface,${dark100})`} y={0} width={20} height={20} transform="scale(1.41,.81) rotate(45) translate(0 -20)" rx={1}  />
                </g>

            </svg>
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