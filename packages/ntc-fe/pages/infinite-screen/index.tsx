import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

const DumbDiv = styled.div<{
  x: number;
  y: number;
}>`
  background: green;
  width: 100px;
  height: 100px;
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  z-index: 1;
`;

function InfiniteScreen() {
  const [dumbDivs, setDumbDivs] = useState<ReactNode[]>([]);

  const addDumbDiv = useCallback(
    (x, y) => {
      dumbDivs.push(<DumbDiv x={x} y={y} />);
      setDumbDivs([...dumbDivs]);
    },
    [dumbDivs]
  );

  const [canvasSize, setCanvasize] = useState(() => {
    return {
      height: window.innerHeight * 2,
      width: window.innerWidth * 2,
    };
  });

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null);

  const canvas = useRef(null);
  // TODO: add resize handler here to update canvas size
  useEffect(() => {
    if (!canvas.current) {
      return;
    }
    setCtx(canvas.current.getContext('2d'));
  }, [canvas]);

  useEffect(() => {
    if (!ctx) {
      return;
    }
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.fillStyle = '#F00';
    ctx.fillRect(50, 50, 100, 150);
    ctx.fillStyle = '#0F0';
    ctx.fillRect(75, 75, 100, 100);
    ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
    ctx.fillRect(25, 100, 175, 50);
    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.lineWidth = 5;
    ctx.strokeRect(25, 25, 175, 200);
  }, [ctx]);

  return (
    <div>
      <canvas
        style={{
          position: 'relative',
        }}
        onClick={(e) => {
          addDumbDiv(e.pageX, e.pageY);
        }}
        ref={canvas}
        width={canvasSize.width}
        height={canvasSize.height}
      >
        <p>Your browser does not support canvas</p>
      </canvas>
      {dumbDivs}
    </div>
  );
}

export default InfiniteScreen;
