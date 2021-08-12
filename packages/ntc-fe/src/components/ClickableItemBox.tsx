import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function ClickableItemBox(props: IProps) {
  return (
    <div className={`border-gray-300 border p-4 ${props.className || ''}`}>
      {props.children}
    </div>
  );
}
