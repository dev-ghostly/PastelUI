import styled from "styled-components";
import Button from "./Button";
import { Colors } from "../utils/colors";

export interface CardProps {
    $title?: string;
    $description?: string;
    $price?: string;
    $image?: string;
    $button1Text?: string;
    $button2Text?: string;
    $button1OnClick?: (...params : any[]) => void;
    $button2OnClick?: (...params : any[]) => void;
}

export const CardBody = styled.div`
    padding: 15px;
    width: fit-content;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
`;

export const CardImage = styled.img`
    border-radius: 5px;
    width: 300px;
`;

export const CardTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top : 10px;
    line-height: 1.5;
    width: 300px;
`;

export const CardDescription = styled.p`
    margin-top : 5px;
    width: 300px;
    line-height: 1.35;
`;

export const CardPrice = styled.p`
    margin-top : 10px;
    color : ${Colors.blue};
    font-size: 1.6rem;
    line-height: 1.5;
    width: 300px;
`;

export const CardSeparator = styled.hr`
    margin-top : 10px;
    border: 0;
    border-top: 1px solid #e0e0e0;
`;

export const CardButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;
    width: 300px;
`

export default function Card(props : CardProps) {
    return (
        <CardBody>
            <CardImage src={props.$image} alt={props.$title} />
            <CardTitle>{props.$title}</CardTitle>
            <CardDescription>{props.$description}</CardDescription>
            <CardPrice>{props.$price}</CardPrice>
            {props.$button1Text && <CardSeparator />}
            <CardButtonGroup>
                {props.$button1Text && <Button $color="blue" onClick={props.$button1OnClick}>{props.$button1Text}</Button>}
                {props.$button2Text && <Button $color="blue" onClick={props.$button2OnClick}>{props.$button2Text}</Button>}
            </CardButtonGroup>
        </CardBody>
    );
}