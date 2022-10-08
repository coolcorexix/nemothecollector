import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ScrollLayer from 'src/infinite-screen/ScrollLayer';
import styled, { css } from 'styled-components';

const SCROLL_GRAB_MODE = 'SCROLL_GRAB_MODE';
const SCROLL_DRAG_MODE = 'SCROLL_DRAG_MODE';

const InfiniteScreenViewport = styled.div<{
  mouseMode: string;
  commandMode: 'move';
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
  #scroll-layer {
    position: absolute;
    display: ${(props) => props.commandMode !== 'move' && 'none'};
    cursor: grab;
    background: pink;
    opacity: 0.4;
    z-index: 2;
  }

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
  const [isPressingSpace, setIsPressingSpace] = useState(false);

  const commandMode = useMemo(() => {
    if (isPressingSpace) {
      return 'move';
    }
    return null;
  }, [isPressingSpace]);

  useEffect(() => {
    const handleSpaceKeydown = (e) => {
      e.preventDefault();
      if (e.key === ' ' || e.code === 'Space') {
        setIsPressingSpace(true);
      }
    };

    const handleSpaceKeyup = (e) => {
      setIsPressingSpace(false);
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
    commandMode,
  ]);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null);

  const viewportRef = useRef(null);
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
    <InfiniteScreenViewport ref={viewportRef}>
      {isPressingSpace && (
        <ScrollLayer mapSize={canvasSize} viewportRef={viewportRef} />
      )}
      <canvas
        // onCli ck =  mouseDown + mouseUp
        onClick={(e) => {
          addDumbDiv(e.pageX, e.pageY);
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
    </InfiniteScreenViewport>
  );
}

export default InfiniteScreen;
