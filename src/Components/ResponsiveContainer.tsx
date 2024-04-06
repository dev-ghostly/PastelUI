import styled from "styled-components";

export interface ResponsiveContainerProps {
  $minWidth?: string | undefined;
  $maxWidth?: string | undefined;
  $minHeight?: string | undefined;
  $maxHeight?: string | undefined;
  $width?: string | undefined;
  $height?: string | undefined;
  $margin?: string | undefined;
  $padding?: string | undefined;
}

const ResponsiveContainer = styled.div<ResponsiveContainerProps>`
    min-width: ${props => props.$minWidth || "0"};
    max-width: ${props => props.$maxWidth || "100%"};
    min-height: ${props => props.$minHeight || "0"};
    max-height: ${props => props.$maxHeight || "100%"};
    width: ${props => props.$width || "100%"};
    height: ${props => props.$height || "100%"};
    margin: ${props => props.$margin || "0"};
    padding: ${props => props.$padding || "0"};
`;

export default ResponsiveContainer;