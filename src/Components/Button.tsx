import styled from "styled-components"
import {Colors} from "../utils/colors"
import { GlobalStyle } from "./GlobalStyle"

export interface ButtonProps {
    $color?: keyof typeof Colors | undefined
    children: string
}

const MyButton = styled.button<ButtonProps>`
    background-color: ${props => {
        switch(props.$color) {
            case "lightblue": {
                return Colors.lightblue
            }
            case "blue": {
                return Colors.blue
            }
            case "purple": {
                return Colors.purple
            }
            case "yellow": {
                return Colors.yellow
            }
            case "orange": {
                return Colors.orange
            }
            case "lightorange": {
                return Colors.lightorange
            }
            case "red": {
                return Colors.red
            }
            case "green": {
                return Colors.green
            }
            case "lightgreen": {
                return Colors.lightgreen
            }
            case "white": {
                return Colors.white
            }
            default: {
                return Colors.white
        }
    }}};
    color: ${props => props.$color === "white" || undefined ? Colors.blue : Colors.white};
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`;

const Button = (props: ButtonProps) => {
    return <>
        <GlobalStyle />
        <MyButton $color={props.$color}>{props.children}</MyButton>
    </>
}

export default Button;