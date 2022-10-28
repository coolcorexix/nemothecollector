import styled from '@emotion/styled';
import React from 'react';
import ColorPopper from './components/ColorPopper';

const HudWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 8px;
  z-index: 100;
`;

function HUDLayer(props) {
  return (
    <HudWrapper>
      <ColorPopper
        setBackgroundColor={props.setBackgroundColor}
        backgroundColor={props.backgroundColor}
      />
    </HudWrapper>
  );
}

export default HUDLayer;
