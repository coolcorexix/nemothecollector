import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export function SectionContainer(props) {
    return (
        <div className='mb-4'>
            {props.children}
        </div>
    );
}