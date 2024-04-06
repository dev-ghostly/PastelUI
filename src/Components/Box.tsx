import styled from "styled-components";

export interface BoxProps {
  $width?: string | undefined;
  $height?: string | undefined;
  $backgroundColor?: string | undefined;
  $padding?: string | undefined;
  $margin?: string | undefined;
}

const Box = styled.div<BoxProps>`
    width: ${props => props.$width || "100%"};
    height: ${props => props.$height || "100%"};
    background-color: ${props => props.$backgroundColor || "white"};
    padding: ${props => props.$padding || "0"};
    margin: ${props => props.$margin || "0"};
`;

export default Box;