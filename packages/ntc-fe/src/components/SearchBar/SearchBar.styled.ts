import styled from 'styled-components';
import { base03, base2, base3 } from 'src/theme/colors';

export const SearchBarContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  width: auto;
  min-width: 256px;
  .content {
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 16px;
    color: ${base03};
    background: ${(props) => (props.isActive ? base3 : base2)};
    border: 2px solid ${base03};
    input {
      font-size: 36px;
      caret-color: ${base03};
      background: transparent;
      border: none;
      outline: none;
    }
  }
  .shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${base03};
    right: -4px;
    top: 4px;
    z-index: 0;
  }
`;
