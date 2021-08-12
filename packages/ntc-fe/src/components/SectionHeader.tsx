import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export function SectionHeader(props: IProps) {
  return (
    <span
      className="text-xl text-red underline"
      style={{
        textDecorationStyle: 'dotted',
      }}
    >
      {props.children}
    </span>
  );
}
