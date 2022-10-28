import React from 'react';
import { base1, base2 } from 'src/theme/colors';

function BackgroundLayer(props: {
  width: number;
  height: number;
  backgroundColor: string;
}) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        position: 'absolute',
      }}
    ></div>
  );
}

export default BackgroundLayer;
