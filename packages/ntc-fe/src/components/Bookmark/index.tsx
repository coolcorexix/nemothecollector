import React from 'react';
import { IBookmarkItemTag } from 'src/models/IBookmarkItemTag.model';
import { BookmarkContainer } from './Bookmark.styled';

interface IProps {
  link: string;
  title: string;
  tags: IBookmarkItemTag[];
  readAt: string;
}

export function Bookmark(props: IProps) {
  const { title, link, tags } = props;
  return (
    <div className="border-red-700 border mb-4 p-2">
      <a target="_blank" href={link}>
        <div>
          <span className="font-bold text-lg">{title}</span>
          <div className="tags">
            {tags.map((tag) => {
              return (
                <span className="border px-1 border-blue-500 mr-2" key={tag.id}>
                  {tag.name}
                </span>
              );
            })}
          </div>
          <div>{props.readAt}</div>
        </div>
      </a>
    </div>
  );
}
