import styled from "styled-components";

export interface ListItemProps {
    $type?: "disc" | "circle" | "square" | undefined;
    $content?: string | undefined;
}

const ListItem = styled.li<ListItemProps>`
    list-style-type: ${props => props.$type || undefined};
    content: ${props => props.$content || ""};
`;

export default ListItem;