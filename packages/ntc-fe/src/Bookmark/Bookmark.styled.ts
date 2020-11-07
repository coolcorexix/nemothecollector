import styled from 'styled-components';
import { blue } from 'src/theme/colors';

export const BookmarkContainer = styled.a`
    display: block;
    padding: 0 16px 32px 16px;
    box-sizing: border-box;

    border-radius: 4;
    &:hover {
        border-left: ${blue} 4px solid;
        padding-left: 12px;
    }
`