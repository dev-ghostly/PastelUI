import styled from "styled-components";

export interface OrderedListProps {
    $type?: "decimal" | "lower-alpha" | "upper-alpha" | "lower-roman" | "upper-roman" | undefined;
    $start?: number | undefined;
    $items?: string[] | undefined;
}

const OrderedList = styled.ol<OrderedListProps>`
    list-style-type: ${props => props.$type || "decimal"};
    counter-reset: item ${props => props.$start || 1};
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
`;

export default OrderedList;