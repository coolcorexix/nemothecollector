import React from 'react';
import Container from 'src/dnd-stuff/Container';

function DnD(props) {
  return (
    <div>
      <Container type="folder" />
      <Container type="training" />
      <Container type="asset" />
    </div>
  );
}

export default DnD;
