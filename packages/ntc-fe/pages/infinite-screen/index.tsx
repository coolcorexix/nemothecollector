import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

const SCROLL_GRAB_MODE = 'SCROLL_GRAB_MODE';
const SCROLL_DRAG_MODE = 'SCROLL_DRAG_MODE';

const InfiniteScreenWrapper = styled.div<{
  mouseMode: string;
}>`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  ${(props) => {
    return props.mouseMode === SCROLL_GRAB_MODE
      ? css`
          cursor: grab;
          user-select: none;
        `
      : '';
  }}

  ${(props) => {
    return props.mouseMode === SCROLL_DRAG_MODE
      ? css`
          cursor: grabbing;
          user-select: none;
        `
      : '';
  }}
`;

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
  const [pos, setPos] = useState({
    left: 0,
    top: 0,
    // Get the current mouse position
    x: 0,
    y: 0,
  });

  const addDumbDiv = useCallback(
    (x, y) => {
      dumbDivs.push(<DumbDiv key={x + y} x={x} y={y} />);
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

  const [mouseMode, setMouseMode] = useState(null);

  useEffect(() => {
    const handleSpaceKeydown = (e) => {
      e.preventDefault();
      if (e.key === ' ' || e.code === 'Space') {
        if (mouseMode === null) {
          setMouseMode(SCROLL_GRAB_MODE);
          console.log('reset space mode');
        }
      }
    };

    const handleSpaceKeyup = (e) => {
      if (e.key === ' ' || e.code === 'Space') {
        setMouseMode(null);
      }
    };
    // call repeatedly when you hold space
    window.addEventListener('keydown', handleSpaceKeydown);
    window.addEventListener('keyup', handleSpaceKeyup);
    return () => {
      window.removeEventListener('keydown', handleSpaceKeydown);
      window.removeEventListener('keyup', handleSpaceKeyup);
    };
  }, [
    // if you dont pass mouse mode as dependency, its value will always be null
    // which reset the mouse mode repeatedly while you hit space
    mouseMode,
  ]);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null);

  const wrapper = useRef(null);
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
    // scrollable element, act like the camera in game
    // while the canvas is in static mode
    <InfiniteScreenWrapper ref={wrapper} mouseMode={mouseMode}>
      <canvas
        // onClick =  mouseDown + mouseUp
        onClick={(e) => {
          addDumbDiv(e.pageX, e.pageY);
        }}
        onMouseDown={(e) => {
          console.log(
            '🚀 ~ file: index.tsx ~ line 150 ~ InfiniteScreen ~ mouseDown',
            mouseMode
          );
          setPos({
            // The current scroll
            left: wrapper.current.scrollLeft,
            top: wrapper.current.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
          });
          setMouseMode(SCROLL_DRAG_MODE);
        }}
        onMouseMove={(e) => {
          //   console.log(
          //     '🚀 ~ file: index.tsx ~ line 150 ~ InfiniteScreen ~ mouseMode',
          //     mouseMode
          //   );
          if (mouseMode !== SCROLL_DRAG_MODE) {
            return;
          }
          //   console.log('at mouse move');
          // How far the mouse has been moved
          const dx = e.clientX - pos.x;
          const dy = e.clientY - pos.y;

          // Scroll the element
          wrapper.current.scrollTo(pos.left - dx, pos.top - dy);
        }}
        onMouseUp={() => {
          if (mouseMode === SCROLL_DRAG_MODE) {
            console.log('is set here');
            setMouseMode(null);
          }
        }}
        ref={canvas}
        width={canvasSize.width}
        height={canvasSize.height}
      >
        <p>Your browser does not support canvas</p>
      </canvas>
      {/* <div style={{
        width: canvasSize.width,
        height: canvasSize.height,
        position: 'absolute',
      }}> */}
      {dumbDivs}
      {/* </div> */}
    </InfiniteScreenWrapper>
  );
}

export default InfiniteScreen;
