import styled from "styled-components";

export interface FlexProps {
  $direction?: "row" | "column" | undefined;
  $justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
  $alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined;
  $wrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
  $gap?: string | undefined;
  $flex?: string | undefined;
}

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.$direction || "row"};
    justify-content: ${props => props.$justifyContent || "flex-start"};
    align-items: ${props => props.$alignItems || "stretch"};
    flex-wrap: ${props => props.$wrap || "nowrap"};
    gap: ${props => props.$gap || "0"};
    flex: ${props => props.$flex || "0 1 auto"};
`;

export default Flex;