import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { CardType } from 'src/dnd-stuff/types';

function DroppableGap(props: {
  type: CardType;
  gapIndex: number;
  isDragging: boolean;
  selectedIndexes: number[];
  moveCards: (itemIndexes: number[], gapIndex: number) => void;
}) {
  const gapRef = useRef(null);
  const [collectedDropProps, drop] = useDrop({
    accept: props.type,
    collect(monitor) {
      return {
        isOver: monitor.isOver(),
      };
    },
    drop(droppedItem: { index: number }) {
      console.log(
        '🚀 ~ file: DroppableGap.tsx ~ line 11 ~ drop ~ item',
        droppedItem
      );
      const itemIndexes = props.selectedIndexes.length
        ? props.selectedIndexes
        : [droppedItem.index];
      props.moveCards(itemIndexes, props.gapIndex);
    },
  });
  drop(gapRef);
  return (
    <div
      ref={gapRef}
      style={{
        background: collectedDropProps.isOver ? 'green' : 'white',
        width: 16,
        height: 32,
        border: props.isDragging ? 'dashed 2px blue' : 'unset',
      }}
    ></div>
  );
}

export default DroppableGap;
