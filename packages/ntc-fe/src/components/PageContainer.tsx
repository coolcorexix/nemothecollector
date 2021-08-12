import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export function PageContainer(props: IProps) {
  return (
    <div className="max-w-screen-md px-2 sm:px-0 m-auto">{props.children}</div>
  );
}
