import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from 'src/multi-dnd-stuff/Container';

function DnD(props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container type="folder" />
      <Container type="training" />
      <Container type="asset" />
    </DndProvider>
  );
}

export default DnD;
