import styled, { css } from 'styled-components';

export const LayerWrapper = styled.div<{
    width: number;
    height: number;
    zIndex: number;
}>`
    position: absolute;
    ${(props) => css`
        height: ${props.height}px;
        width: ${props.width}px;
        z-index: ${props.zIndex};
    `}

`