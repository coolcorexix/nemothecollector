import React from 'react';

interface IProps {
    link: string;
    title: string;
    tags: string[];
    readAt: string;
}

export function Bookmark(props: IProps) {
    const {
        title,
        link,
        tags,
    } = props;
    return (<a href={link}>
            <div>
                <span>
                    {title}
                </span>
                <div className='tags'>
                    {tags.map(tag => {
                        return (<span>
                            {tag}
                        </span>)
                    })}
                </div>
            </div>

        </a>)
}