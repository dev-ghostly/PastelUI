import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

export interface CheckboxProps {
  $checked: boolean | undefined;
  $label?: string | undefined;
}

const Check = styled.input.attrs<CheckboxProps>(({ $checked }) => ({
  type: "checkbox",
  checked: $checked,
}))<CheckboxProps>`
  margin-right: 10px;
`;

const Label = styled.label`
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
`;

const Checkbox = ({ $checked, $label }: CheckboxProps) => {
    return (
        <>
            <GlobalStyle />
            <Check $checked={$checked} />
            <Label>{$label}</Label>
        </>
    );
}

export default Checkbox;