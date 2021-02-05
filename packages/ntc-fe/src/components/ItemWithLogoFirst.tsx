import React from 'react';

interface IProps {
    logoSrc: string;
    content: React.ReactNode;
}

export function ItemWithLogoFirst(props: IProps) {
    return (
        <div>
            <img
                src={props.logoSrc}
            />
            <div>
                {props.content}
            </div>            
        </div>
    );
}