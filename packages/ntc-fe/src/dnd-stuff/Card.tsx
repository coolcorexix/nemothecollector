import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { green, orange, violet } from 'src/theme/colors';
import { CardType } from './types';

interface DnDItem {
  index: number;
}

const boxColors = {
  folder: orange,
  training: green,
  asset: violet,
};

function Card(props: {
  content: string;
  type: CardType;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}) {
  const cardRef = useRef(null);
  const [collectedDropProps, drop] = useDrop({
    accept: props.type,
    hover(item: DnDItem, monitor) {
      console.log('on hover');
      if (!cardRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = (
        cardRef.current as any
      ).getBoundingClientRect();

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) {
        throw new Error('no client offset');
      }
      // vertical middle of hovered item
      const middleHoverY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // horizontal middle of hovered item
      const middleHoverX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      // delta of mouse to bounding rect
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      console.log(
        '🚀 ~ file: Card.tsx ~ line 43 ~ hover ~ middleHoverX',
        middleHoverX
      );

      const isDraggingLeftward =
        hoverIndex < dragIndex && hoverClientX < middleHoverX;
      const isDraggingRightward =
        hoverIndex > dragIndex && hoverClientX > middleHoverX;
      const isDraggingUpward =
        hoverIndex < dragIndex && hoverClientY < middleHoverY;
      const isDraggingDownward =
        hoverIndex > dragIndex && hoverClientY > middleHoverY;

      if (
        !isDraggingUpward &&
        !isDraggingDownward &&
        !isDraggingLeftward &&
        !isDraggingRightward
      ) {
        return;
      }
      props.moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [collectedDragProps, drag] = useDrag({
    type: props.type,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: (): DnDItem => {
      return {
        index: props.index,
      };
    },
  });
  const { isDragging } = collectedDragProps;
  const opacity = isDragging ? 0 : 1;

  drag(drop(cardRef));

  return (
    <div
      ref={cardRef}
      style={{
        fontWeight: 1000,
        cursor: 'move',
        height: 32,
        width: 64,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: boxColors[props.type],
        color: 'white',
        opacity,
      }}
    >
      {props.content}
    </div>
  );
}

export default Card;
