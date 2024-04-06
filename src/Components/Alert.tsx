import styled from "styled-components";
import { MdError, MdInfo, MdCheckCircle } from "react-icons/md";
import { GlobalStyle } from "./GlobalStyle";
export interface AlertProps {
    $title : string
    $text: string
    $type: "error" | "warning" | "info" | "success"
}

const AlertBackground = styled.div<AlertProps>`
    background-color: ${props => {
        switch(props.$type) {
            case "error": {
                return "#f8d7da"
            }
            case "warning": {
                return "#fff3cd"
            }
            case "info": {
                return "#d1ecf1"
            }
            case "success": {
                return "#d4edda"
            }
            default: {
                return "#f8d7da"
            }
    }}};
    color: ${props => {
        switch(props.$type) {
            case "error": {
                return "#721c24"
            }
            case "warning": {
                return "#856404"
            }
            case "info": {
                return "#0c5460"
            }
            case "success": {
                return "#155724"
            }
            default: {
                return "#721c24"
        }
    }}};
    border-radius : 5px;
    display: flex;
    padding: 0.75rem 1.25rem;
`;

const AlertText = styled.p`
    margin: 0;
    font-size: 16px;
    margin-left: 15px;
    width: 93%;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    margin-top: 3px;
`;

const AlertTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    margin-right: 8px;
`;

const Alert = ({$title, $text, $type}: AlertProps) => {
    return (
        <AlertBackground $title="" $text="" $type={$type}>
            <GlobalStyle />
            {$type === "error" && <MdError size={"1.5em"} />}
            {$type === "success" && <MdCheckCircle size={"1.5em"} />}
            {$type === "info" && <MdInfo size={"1.5em"} />}
            {$type === "warning" && <MdError size={"1.5em"} />}
            <AlertText><AlertTitle>{$title}</AlertTitle> {$text}</AlertText>
        </AlertBackground>
    );
}

export default Alert;