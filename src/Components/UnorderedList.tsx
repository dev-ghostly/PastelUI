import styled from "styled-components";

export interface UnorderedListProps {
    $type?: "disc" | "circle" | "square" | undefined;
    $items?: string[] | undefined;
}

const UnorderedList = styled.ul<UnorderedListProps>`
    list-style-type: ${props => props.$type || "disc"};
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
`;

export default UnorderedList;