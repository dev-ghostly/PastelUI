import styled from "styled-components";

export interface GridProps {
    $columns?: string | undefined;
    $rows?: string | undefined;
    $gap?: string | undefined;
    $autoFlow?: "row" | "column" | "row dense" | "column dense" | undefined;
    $width?: string | undefined;
}

const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${props => props.$columns || "auto"};
    grid-template-rows: ${props => props.$rows || "auto"};
    gap: ${props => props.$gap || "0"};
    grid-auto-flow: ${props => props.$autoFlow || "row"};
    width: ${props => props.$width || "100%"};
`;

export default Grid;