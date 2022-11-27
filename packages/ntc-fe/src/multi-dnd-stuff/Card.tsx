import React, { useEffect, useRef } from 'react';
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
  setIsDragging: (isDragging: boolean) => void;
  content: string;
  type: CardType;
  index: number;
  isChecked: boolean;
  onSelect: (index: number) => void;
  onDeselect: (index: number) => void;
}) {
  const cardRef = useRef(null);

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
  useEffect(() => {
    props.setIsDragging(isDragging);
  }, [isDragging]);
  const opacity = isDragging ? 0 : 1;

  drag(cardRef);

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
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => {
          if (e.target.checked) {
            props.onSelect(props.index);
          } else {
            props.onDeselect(props.index);
          }
        }}
      />
      {props.content}
    </div>
  );
}

export default Card;
